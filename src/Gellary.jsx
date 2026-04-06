import React, { useState, useEffect, useRef } from "react";
import "./Gellary.css";

const firstThreeVideos=[
  { id: 1, src: "/images/testV.mp4", title: "Cinematic Travel" },
  { id: 2, src: "/images/testV2.mp4", title: "Brand Story" },
  { id: 3, src: "/images/testV3.mp4", title: "Commercial Shot" },

  
  { id: 1, src: "/images/testV.mp4", title: "Cinematic Travel" },
  { id: 2, src: "/images/testV2.mp4", title: "Brand Story" },
  { id: 3, src: "/images/testV3.mp4", title: "Commercial Shot" },
]
const videosData = [
  { id: 1, src: "/images/testV.mp4", title: "Cinematic Travel" },
  { id: 2, src: "/images/testV2.mp4", title: "Brand Story" },
  { id: 3, src: "/images/testV3.mp4", title: "Commercial Shot" },
  { id: 4, src: "/images/testV.mp4", title: "Creative Visual" },
  { id: 5, src: "/images/testV2.mp4", title: "Documentary Style" },
];

function Gellary() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const videoRefs = useRef([]);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videosData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [index]);

  const getClass = (i) => {
    if (i === index) return "center";
    if (i === (index - 1 + videosData.length) % videosData.length)
      return "left";
    if (i === (index + 1) % videosData.length) return "right";
    return "hidden";
  };

  return (
    <div className="gellary" id="gellery">
      <h1>Visual Stories</h1>
      <div className="style"></div>

      <p className="desc">
        Cinematic visuals crafted to tell stories, capture emotion, and elevate
        brands through powerful imagery.
      </p>

      <div className="slider">
        {firstThreeVideos.map((video, i) => (
          <div key={video.id} className={`card ${getClass(i)}`}>
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              muted
              loop
              playsInline
              src={video.src}
            />
            <h4>{video.title}</h4>
          </div>
        ))}
      </div>

      <button className="view-more" onClick={() => setOpen(true)}>
        View All
        <img src="/icons/viewmore.png" alt="arrow" />
      </button>

      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>All Projects</h2>

            <div className="modal-grid">
              {videosData.map((video) => (
                <div key={video.id} className="modal-card">
                  <video controls src={video.src}></video>
                  <p>{video.title}</p>
                </div>
              ))}
            </div>

            <button className="close-btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gellary;
