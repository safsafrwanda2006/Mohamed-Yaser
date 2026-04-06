import { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [currentImage,setcurrentImage]=useState("first")
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="style style-about"></div>
      <div className="about-content">
        <div className="image-part">
          
          <img src={
            currentImage=="first"?
              "/images/about-camera1.jpeg"
            :currentImage=="second"?
              "/images/about1.jpeg"
           : currentImage=="third"?
              "/images/about2-cpy.jpeg"
            :""
          } alt="" />
          <div className="dots">
            <div
            onClick={()=>setcurrentImage("first")}
             className={currentImage=="first"?"dot-clicked":"dot-btn"}></div>
            <div
            onClick={()=>setcurrentImage("second")}
             className={currentImage=="second"?"dot-clicked":"dot-btn"}></div>
            <div
            onClick={()=>setcurrentImage("third")}
             className={currentImage=="third"?"dot-clicked":"dot-btn"}></div>
          </div>
        </div>
        <div className="text-part">
          <h3>
            I’m <span className="mohamed-yaser">Mohamed Yaser</span>, photographer and videographer specializing in capturing real
            moments and turning them into compelling visual stories. My work
            combines creativity, technical precision, and a strong understanding
            of visual storytelling.
          </h3>
          <h3>
            I collaborate with brands, individuals, and creators to produce
            content that reflects identity, builds presence, and delivers
            impact.
          </h3>
          <h3>
            Every project is approached with attention to detail, from concept
            to final result.
          </h3>
          <h2 className="exper">Experence</h2>
          <div className="style"></div>
          <div className="experince">
            <a target="_blank" href="https://execode-team.vercel.app">
              <div className="card-experence">
                <div className="first-line">
                  <img src="/icons/execode.png" alt="Execode Solutions" />
                  <h2>Execode Solutions</h2>
                </div>
                <div className="pragraph">
                  <p className="meta">
                    Content Creator & Brand Visual Specialist · Present
                  </p>
                  <div className="dot"></div>
                </div>
              </div>
            </a>
            <a target="_blank" href="/">
              <div className="card-experence">
                <div className="first-line">
                  <img src="/icons/khartoum2.jpg" alt="Khartoum Interfilm" />
                  <h2>Khartoum Interfilm</h2>
                </div>
                <div className="pragraph">
                  <p className="meta">
                    Photographer & Visual Storyteller · Present
                  </p>
                  <div className="dot"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
