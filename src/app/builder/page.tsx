"use client";

import { ChangeEvent, PointerEvent, useState } from "react";

const sizes = [
  { label: "30 cm x 50 cm", meters: 0.5, price: 100 },
  { label: "30 cm x 100 cm", meters: 1, price: 200 },
  { label: "30 cm x 150 cm", meters: 1.5, price: 300 },
  { label: "30 cm x 200 cm", meters: 2, price: 400 },
  { label: "30 cm x 500 cm", meters: 5, price: 950 },
  { label: "30 cm x 1000 cm", meters: 10, price: 1800 },
];

type Design = { id: number; name: string; url: string; x: number; y: number; size: number };

export default function BuilderPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [designs, setDesigns] = useState<Design[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [dragging, setDragging] = useState<{ id: number; offsetX: number; offsetY: number } | null>(null);

  function addFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []).filter((file) => file.type.startsWith("image/"));
    const newDesigns = files.map((file, index) => ({ id: Date.now() + index, name: file.name, url: URL.createObjectURL(file), x: 14 + (index % 3) * 28, y: 12 + Math.floor(index / 3) * 25, size: 24 }));
    setDesigns((current) => [...current, ...newDesigns]);
    if (newDesigns[0]) setActiveId(newDesigns[0].id);
    event.target.value = "";
  }

  function moveDesign(event: PointerEvent<HTMLDivElement>, design: Design) {
    const box = event.currentTarget.parentElement?.getBoundingClientRect();
    if (!box) return;
    setActiveId(design.id);
    setDragging({ id: design.id, offsetX: event.clientX - box.left - (design.x / 100) * box.width, offsetY: event.clientY - box.top - (design.y / 100) * box.height });
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function dragDesign(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    const box = event.currentTarget.parentElement?.getBoundingClientRect();
    if (!box) return;
    setDesigns((current) => current.map((design) => design.id === dragging.id ? { ...design, x: Math.max(0, Math.min(100 - design.size, ((event.clientX - box.left - dragging.offsetX) / box.width) * 100)), y: Math.max(0, Math.min(100 - design.size, ((event.clientY - box.top - dragging.offsetY) / box.height) * 100)) } : design));
  }

  const rate = selectedSize.meters >= 10 ? 180 : selectedSize.meters >= 5 ? 190 : 200;
  const total = selectedSize.meters * rate;
  const activeDesign = designs.find((design) => design.id === activeId);

  return <main className="builder-page">
    <header className="builder-header"><a href="/" className="builder-logo"><img src="/gd-logo.png.jpeg" alt="GD Graphics and Prints" /></a><a href="/" className="builder-back">Back to website</a></header>
    <section className="builder-intro"><p className="eyebrow">GD GRAPHICS &amp; PRINTS</p><h1>Build your gang sheet</h1><p>Upload your artwork, arrange your prints, and order a ready-to-press sheet.</p></section>
    <section className="builder-layout">
      <div className="builder-workspace"><div className="workspace-top"><div><span className="step">01</span><h2>Arrange your artwork</h2></div><label className="upload-button">Upload designs<input type="file" accept="image/png,image/jpeg,image/webp" multiple onChange={addFiles} /></label></div><div className="sheet-label">30 cm wide sheet <span>Drag designs to arrange them</span></div><div className="sheet-stage" onPointerMove={dragDesign} onPointerUp={() => setDragging(null)}>{designs.length === 0 && <div className="empty-sheet"><span>+</span><p>Your designs will appear here</p><small>Upload transparent PNG files for the best result</small></div>}{designs.map((design) => <div key={design.id} className={`design ${activeId === design.id ? "selected" : ""}`} style={{ left: `${design.x}%`, top: `${design.y}%`, width: `${design.size}%`, aspectRatio: "1" }} onPointerDown={(event) => moveDesign(event, design)}><img src={design.url} alt={design.name} draggable={false} /></div>)}</div>{designs.length > 0 && <button className="clear-button" onClick={() => setDesigns([])}>Remove all designs</button>}</div>
      <aside className="builder-controls"><div className="control-block"><span className="step">02</span><h2>Choose sheet size</h2><div className="size-options">{sizes.map((size) => <button key={size.label} className={selectedSize.label === size.label ? "chosen" : ""} onClick={() => setSelectedSize(size)}><span>{size.label}</span><b>R{size.price}</b></button>)}</div></div><div className="control-block"><span className="step">03</span><h2>Fine tune design</h2>{activeDesign ? <><p className="active-file">{activeDesign.name}</p><label className="range-label">Design size <input type="range" min="10" max="40" value={activeDesign.size} onChange={(event) => setDesigns((current) => current.map((design) => design.id === activeDesign.id ? { ...design, size: Number(event.target.value) } : design))} /></label><button className="remove-design" onClick={() => { setDesigns((current) => current.filter((design) => design.id !== activeDesign.id)); setActiveId(null); }}>Remove selected design</button></> : <p className="muted">Select a design on the sheet to resize or remove it.</p>}</div><div className="order-summary"><p>YOUR ORDER</p><div><span>{selectedSize.label}</span><strong>R{total}</strong></div>{selectedSize.meters >= 5 && <small>Bulk rate applied: R{rate} per meter</small>}<button className="order-button" onClick={() => window.alert(designs.length ? "Your gang sheet has been added to your enquiry." : "Upload at least one design first.")}>Add gang sheet to enquiry</button></div></aside>
    </section>
    <section className="builder-notes"><div><b>No minimum order</b><span>Order exactly the size you need.</span></div><div><b>Transparent artwork</b><span>PNG files give the cleanest transfers.</span></div><div><b>Ready to press</b><span>Cut your sheet and apply your designs.</span></div></section>
  </main>;
}
