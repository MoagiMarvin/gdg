"use client";

import { FormEvent, useState } from "react";

const faqs = [
  ["What is the difference between DTF and UV DTF?", "DTF means Direct to Film and is used to transfer full-colour designs onto fabric with heat. UV DTF uses ultraviolet light and creates durable transfers for hard surfaces."],
  ["How does it work?", "We provide a ready-to-press transfer for fabric, or a robust semi-permanent sticker for hard surfaces with UV DTF."],
  ["How do I order?", "Upload your artwork to our gang sheet builder and check out online as normal."],
  ["How do I press or stick the transfer onto the garment or hard substrate?", "Follow our pressing instructions for DTF transfers or application instructions for UV DTF."],
  ["How do I use the gang sheet builder?", "Choose your sheet size, upload your artwork and arrange each design before adding it to your cart."],
  ["What do you do with my artworks I submit?", "All submitted artwork is deleted after 30 days. We never use, sell or print your artwork for another client."],
  ["What about sublimation?", "Sublimation still has its place for hard substrates and white polyester. We continue to print sublimation transfers for those systems."],
];

const menuItems = ["HOME", "Collection and Shipping", "Artwork Preparation", "Pressing Instructions", "About Us", "Refunds and Returns", "ORDER DTF TRANSFER", "DTF Transfer by Size", "Build a DTF Gang Sheet", "ORDER UV DTF", "Order UVDTF By Size", "Build UVDTF Gang Sheet", "ORDER SUBLIMATION PRINT", "NEED HELP WITH BLANK APPAREL?"];

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="logo" aria-label="GD Graphics and Prints home">
          <img src="/gd-logo.png.jpeg" alt="GD Graphics and Prints - Quality Reliable Designs" />
        </a>
        <nav className="mock-nav" aria-label="Main navigation"><a className="active" href="#top">Home</a><a href="#services">Services</a><a href="#about">About Us</a><a href="#contact">Contact</a></nav>
        <div className="header-actions">
          <button className="search-button" aria-label="Open search" onClick={() => setSearchOpen(true)}><span /></button>
          <button className="cart-button" aria-label="Open cart" onClick={() => window.alert("Your cart is empty.")}><span /><b>0</b></button>
        </div>
      </header>
      {searchOpen && <div className="search-panel"><input autoFocus type="search" placeholder="Search products" aria-label="Search products" /><button onClick={() => setSearchOpen(false)} aria-label="Close search">&times;</button></div>}

      <main id="top">
        <section className="brand-hero" id="about"><div><p className="eyebrow">PRINTING WITH PURPOSE</p><h1>Quality reliable designs.</h1><p>Bold ideas, beautifully printed. GD Graphics &amp; Prints brings your brand, apparel and creative work to life.</p><a className="gold-button" href="#services">Explore our services</a></div><img className="hero-logo" src="/gd-logo.png.jpeg" alt="GD Graphics and Prints logo" /></section>
        <section className="service-strip" id="services"><div><b>01</b><h2>Custom Printing</h2><p>Professional prints made for your next big idea.</p></div><div><b>02</b><h2>Branded Apparel</h2><p>Stand out with designs made to be remembered.</p></div><div><b>03</b><h2>Design Support</h2><p>Reliable creative help from concept to finish.</p></div></section>
        <section className="faq-section" id="guide"><h2>FAQ</h2><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}</div></section>
        <section className="video-grid"><div className="video-frame"><div className="play">▶</div><small>DTF transfer application</small></div><div className="video-frame"><div className="play">▶</div><small>UV DTF transfer application</small></div></section>
        <section className="contact-section" id="contact">
          <div className="contact-copy"><h2>Contact Us</h2><p>DTF Central (Pty) Ltd - Bloemfontein Free State</p><p>Our office hours are Monday - Friday 8am - 5pm</p><p>All queries will be handled during these hours. We are closed over weekends</p><div className="socials"><a href="#contact" aria-label="Facebook">f</a><a href="#contact" aria-label="Instagram">◎</a></div></div>
          <form className="contact-form" onSubmit={submitForm}><label>Name *<input required name="name" /></label><label>Email *<input required type="email" name="email" /></label><label>Message<textarea name="message" rows={4} /></label><button type="submit">Submit</button>{submitted && <p className="form-message">Thanks, your message has been received.</p>}</form>
          <div className="details"><p>✉ Email: orders(at)dtfcentral.co.za</p><p>♧ Whatsapp: 065 734 8040</p><p>⌖ 100 Dreyer Avenue Roodewal BFN</p></div>
          <div className="policies"><h3>Policies</h3><a href="#contact">Refunds and Returns</a><a href="#contact">Privacy Policy</a><a href="#contact">Security Policy</a><a href="#contact">Terms of Sale</a><a href="#contact">Website Terms of Use</a></div>
        </section>
      </main>
      <footer>© 2026 DTF Central.</footer>
      <div className={`drawer-backdrop ${drawerOpen ? "show" : ""}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}><button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">&times;</button><nav>{menuItems.map((item, index) => <a key={item} className={index === 0 || item.startsWith("ORDER") || item.startsWith("NEED") ? "top-link" : ""} href={index === 0 ? "#top" : item.includes("Contact") ? "#contact" : "#guide"} onClick={() => setDrawerOpen(false)}>{item}{(index === 0 || item === "ORDER DTF TRANSFER" || item === "ORDER UV DTF") && <span>⌄</span>}</a>)}</nav></aside>
    </div>
  );
}
