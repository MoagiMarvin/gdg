"use client";

import { FormEvent, useState } from "react";

const products = [
  { name: "Custom T-Shirt Print", type: "Apparel printing", price: "From R180", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85" },
  { name: "Premium DTF Transfer", type: "Print transfers", price: "From R45", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85" },
  { name: "Branded Hoodie", type: "Custom apparel", price: "From R390", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85" },
  { name: "Business Starter Pack", type: "Branding package", price: "From R850", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=85" },
];

const services = [
  ["01", "Custom printing", "Professional prints made for apparel, packaging, signage and your next big idea."],
  ["02", "Branded apparel", "Turn your logo into quality t-shirts, hoodies, workwear and team clothing."],
  ["03", "Design support", "Need a fresh start? We help shape your idea into artwork ready to print."],
];

const faqs = [
  ["What can GD Graphics & Prints make?", "We create custom apparel, DTF transfers, branded products, print work and design solutions for individuals, teams and businesses."],
  ["Can I order a custom design?", "Yes. Send us your idea or existing artwork and we can guide you through the best print option."],
  ["How do I get a quote?", "Use the contact form below or message us with your product, quantity and artwork details."],
];

const menuItems = ["Home", "Shop", "Services", "About Us", "Gallery", "Contact"];

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
      <div className="topline">Premium custom printing and branded apparel <span>South Africa</span></div>
      <header className="site-header">
        <button className="mobile-menu" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><i /><i /><i /></button>
        <a href="#top" className="logo" aria-label="GD Graphics and Prints home"><img src="/gd-logo.png.jpeg" alt="GD Graphics and Prints - Quality Reliable Designs" /></a>
        <nav className="mock-nav" aria-label="Main navigation">{menuItems.map((item, index) => <a key={item} className={index === 0 ? "active" : ""} href={item === "Home" ? "#top" : item === "Shop" ? "/builder" : `#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>)}</nav>
        <div className="header-actions"><button className="search-button" aria-label="Open search" onClick={() => setSearchOpen(true)}><span /></button><a className="quote-link" href="#contact">Get a quote</a></div>
      </header>
      {searchOpen && <div className="search-panel"><input autoFocus type="search" placeholder="Search the catalogue" aria-label="Search the catalogue" /><button onClick={() => setSearchOpen(false)} aria-label="Close search">&times;</button></div>}

      <main id="top">
        <section className="brand-hero" id="about"><div className="hero-copy"><p className="eyebrow">GD GRAPHICS &amp; PRINTS</p><h1>Quality reliable designs.</h1><p>Bold, durable printing for t-shirts, hoodies, caps, clothing brands and bulk orders.</p><div className="hero-actions"><a className="gold-button" href="#shop">Shop the collection</a><a className="text-link" href="#services">Explore services <span>↗</span></a></div></div><div className="hero-poster"><img src="/dtf-poster.jpg.jpeg" alt="GD Graphics and Prints DTF printing price and service poster" /></div></section>

        <section className="shop-section" id="shop"><div className="section-heading"><div><p className="eyebrow">OUR COLLECTION</p><h2>Made for your next idea</h2></div><a className="text-link" href="#contact">View all products <span>↗</span></a></div><div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><button aria-label={`Add ${product.name} to cart`} onClick={() => window.alert(`${product.name} added to enquiry.`)}>+</button></div><p>{product.type}</p><h3>{product.name}</h3><strong>{product.price}</strong></article>)}</div></section>

        <section className="service-section" id="services"><div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>More than just printing</h2></div><p className="section-intro">Reliable creative support and quality production for the work you want people to notice.</p></div><div className="service-grid">{services.map(([number, title, copy]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p><a href="#contact" aria-label={`Learn about ${title}`}>Learn more <span>↗</span></a></article>)}</div></section>

        <section className="story-section"><div className="story-image"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" alt="Creative team working on a brand project" /></div><div className="story-copy"><p className="eyebrow">WHY GD GRAPHICS &amp; PRINTS</p><h2>Thoughtful work. Dependable finish.</h2><p>We believe the details matter. Every order is handled with care, from choosing the right materials to making sure your final product looks the way you imagined it.</p><ul><li><b>01</b><span>Quality materials and sharp finishes</span></li><li><b>02</b><span>Personal service from idea to delivery</span></li><li><b>03</b><span>Creative solutions built around you</span></li></ul><a className="gold-button" href="#contact">Work with us</a></div></section>

        <section className="gallery-section" id="gallery"><div className="section-heading"><div><p className="eyebrow">OUR GALLERY</p><h2>A little inspiration</h2></div><a className="text-link" href="#contact">Start your project <span>↗</span></a></div><div className="gallery-grid"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85" alt="Printed fashion detail" /><img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85" alt="Branded clothing on a rail" /><img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=85" alt="Creative product packaging" /><img src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=85" alt="Designed interior product" /></div></section>

        <section className="testimonial"><p className="eyebrow">A WORD FROM OUR CLIENTS</p><blockquote>“The team understood exactly what we needed and the final prints looked even better than we imagined.”</blockquote><p className="testimonial-name">— Local business owner</p></section>

        <section className="faq-section" id="faq"><div className="section-heading"><div><p className="eyebrow">NEED TO KNOW</p><h2>Frequently asked</h2></div></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}</div></section>

        <section className="contact-section" id="contact"><div className="contact-copy"><p className="eyebrow">LET&apos;S MAKE SOMETHING</p><h2>Ready when you are.</h2><p>Tell us what you are working on and we&apos;ll help you find the right way to bring it to life.</p><div className="contact-details"><p>Email: hello@gdgraphics.co.za</p><p>WhatsApp: 065 734 8040</p><p>South Africa</p></div></div><form className="contact-form" onSubmit={submitForm}><label>Name *<input required name="name" /></label><label>Email *<input required type="email" name="email" /></label><label>Tell us about your project<textarea name="message" rows={4} /></label><button type="submit">Send enquiry <span>↗</span></button>{submitted && <p className="form-message">Thanks, your message has been received.</p>}</form></section>
      </main>

      <footer><img src="/gd-logo.png.jpeg" alt="GD Graphics and Prints" /><div><a href="#shop">Shop</a><a href="#services">Services</a><a href="#about">About Us</a><a href="#contact">Contact</a></div><small>© 2026 GD Graphics &amp; Prints. Quality reliable designs.</small></footer>
      <div className={`drawer-backdrop ${drawerOpen ? "show" : ""}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}><button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">&times;</button><nav>{menuItems.map((item) => <a key={item} href={item === "Home" ? "#top" : item === "Shop" ? "/builder" : `#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setDrawerOpen(false)}>{item}<span>↗</span></a>)}</nav></aside>
    </div>
  );
}
