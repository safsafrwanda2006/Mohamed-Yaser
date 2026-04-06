import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="platform-footer">
      <div className="footer-container">
        {/* about */}
        <div className="footer-col">
          <a href="/" className="footer-logo">
          <img src="/icons/logo.png" alt="" />
            <h3>Mohamed Yaser</h3>
            
          </a>
          <p>
            Professional photography and cinematic videography focused on
            storytelling and visual impact.
          </p>
        </div>

        {/* links */}
        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#hero"><b>Home</b></a>
            </li>
            <li>
              <a href="#about"><b>About</b></a>
            </li>
            <li>
              <a href="#works"><b>Works</b></a>
            </li>
            <li>
              <a href="#contact"><b>Contact</b></a>
            </li>
          </ul>
        </div>

        {/* categories */}
        <div className="footer-col">
          <h4>Classifications</h4>
          <ul>
            <li><i>Travel / Landscape</i></li>
            <li><i>Social Media Conten</i></li>
            <li><i>Cinematic Videography</i></li>
            <li><i>Event Photography</i></li>
          </ul>
        </div>


        {/* contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <a
            className="direct-logo"
            href="https://wa.me/250795926725"
            target="_blank"
          >
            <div className="social-icon whatsapp">
              <img  src="/icons/whatsapp.png" alt="whatsapp" />
            </div>
            <p> 0795926725</p>
          </a>
          <a
            className="direct-logo"
            href="mailto:my1335667@gmail.com"
            aria-label="Email"
          >
            <div className="social-icon">
              <img src="/icons/email.png" alt="Email" />
            </div>

            <p> mohamedyaser@gmail.com</p>
          </a>  
          <div className="footer-social">
            <a
              href="https://x.com/sudanteach"
              className="social-icon"
              target="_blank"
            >
              <img src="/icons/x.png" alt="" />
            </a>

            <a
              href="https://web.facebook.com/mhmd.yasr.88624"
              className="social-icon"
              target="_blank"
            >
              <img src="/icons/facebook.png" alt="facebook" />
            </a>

            <a
              href="https://www.instagram.com/yass3r.m/"
              className="social-icon"
              target="_blank"
            >
              <img src="/icons/instagram.png" alt="instagram" />
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-yaser-072a58352/"
              className="social-icon"
              target="_blank"
            >
              <img src="/icons/linkedin.png" alt="youtube" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mohamed Yaser - All Rights Reserved</p>

        <p className="footer-dev">
         Developed by {" "}
          <a href="https://execode-team.vercel.app/" target="_blank">
            <strong className="execode">ExeCode<div className="dot"></div></strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
