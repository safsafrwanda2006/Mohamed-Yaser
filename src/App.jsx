import { useState } from "react";
import "./App.css";
import About from "./About.jsx";
import Gellary from "./Gellary.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [menu, setmenu] = useState(false);
  return (
    <>
      <div
        className="page-container"
        id="hero"
        onClick={(e) => {
          e.stopPropagation();
          setmenu(false);
        }}
      >
        <header>
          <div className="logo">
            <img src="/icons/logo.png" alt="" />
            <h2>Mohamed yaser</h2>
          </div>
          <div className="space"></div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setmenu((prev) => !prev);
            }}
            className="menu"
          >
            <img src="/icons/menu.png" alt="" />
          </div>

          <div className="middle"></div>
          <div className="header-btns">
            <a href="/" className="home">
              Home
            </a>
            <a href="/#about">About</a>
            <a href="/#gellery">Gallery</a>
            <a href="/#contact">Contact</a>
          </div>
        </header>
        {menu && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="menu-elements"
          >
            <a href="/" className="home">
              Home
            </a>
            <a href="/#about">About</a>
            <a href="/#gellery">Gallery</a>
            <a href="/#contact">Contact</a>
            <a 
            href="/#contact"
            className="prymary-btn hero-btn">
              <b>Get Started</b>
            </a>
          </div>
        )}
        <section className="hero">
          <div className="content">
            <h1>
              From Idea to <span className="spicial">Impactful</span> Visual
              Story
            </h1>
            <p>
              Professional photography and cinematic videography designed for
              brands, individuals, and creators. Every project is crafted to
              tell a story, capture emotion, and deliver visuals that leave a
              lasting impression.
            </p>
            <div className="hero-btns">
              <a 
              href="/#contact"
              className="prymary-btn hero-btn">
                <b>Start Your Story</b>
              </a>
              <a 
              href="/#gellery"
              className="secondary-btn hero-btn">
                <b>Browse Gallery</b>
              </a>
            </div>
          </div>
          <div className="social-media">
            <a 
             target="_blank" href="https://www.instagram.com/yass3r.m/">
              <img src="/icons/instagram.png" alt="" />
            </a>
            <a 
             target="_blank" href="https://web.facebook.com/mhmd.yasr.88624">
              <img src="/icons/facebook.png" alt="" />
            </a>
            <a 
             target="_blank" href="https://www.linkedin.com/in/mohamed-yaser-072a58352/">
              <img src="/icons/linkedin.png" alt="" />
            </a>
            <a
             target="_blank"  href="/">
              <img src="/icons/x.png" alt="" />
            </a>
            <a 
             target="_blank" href="mailto:my1335667@gmail.com">
              <img src="/icons/email.png" alt="" />
            </a>
          </div>
          <div className="border">
            <div className="pointer"></div>
          </div>
        </section>
      </div>
      <About />
      <Gellary />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
