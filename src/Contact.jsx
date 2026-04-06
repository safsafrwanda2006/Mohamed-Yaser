import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    discription: "",
  });

  const sendviaWhatsapp = (e) => {
    e.preventDefault();
    const whatsappText = `Name: ${contactData.fullName}
   Email: ${contactData.email}
   project Type: ${contactData.projectType}
   Discription: ${contactData.discription}`;

    const whatsappUrl = `https://wa.me/250795926725?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappUrl, "_blank");
    setContactData = {
      fullName: "",
      email: "",
      projectType: "",
      discription: "",
    };
  };
  return (
    <div className="contact" id="contact">
      <h1 className="first-h1">Get In Touch</h1>
      <div className="style"></div>


      <div className="contact-content">
        <div className="contact-texts">
          {" "}
          <h1>Let’s discuss your project and bring your ideas to life.</h1>
          <h4>Available for bookings and collaborations.</h4>
          <div className="contact-info">
            <div className="contact-info-card">
              <h1>24h</h1>
              <p>TYPICAL RESPONSE</p>
            </div>
            <div className="contact-info-card">
              <h1>Clean</h1>
              <p>SCOPE & MILESTONES</p>
            </div>
          </div>
        </div>

        <form className="submit-course-form" onSubmit={sendviaWhatsapp}>
          <div className="inputs">
            <input
              className="exe-input"
              type="text"
              name="fullName"
              placeholder="Full Name .. "
              value={contactData.fullName}
              onChange={(e) =>
                setContactData({ ...contactData, fullName: e.target.value })
              }
              required
            />

            <input
              type="email"
              className="exe-input"
              name="email"
              placeholder="Email..."
              value={contactData.email}
              onChange={(e) =>
                setContactData({ ...contactData, email: e.target.value })
              }
              required
            />
          </div>
          <select
            className="exe-input"
            name="projecttype"
            id=""
            onChange={(e) =>
              setContactData({ ...contactData, projectType: e.target.value })
            }
            required
          >
            <option value="">Select your Project Type</option>
            <option value="Travel / Landscape">Travel / Landscape</option>
            <option value="Social Media Content">Social Media Content</option>
            <option value="Cinematic Videography">Cinematic Videography</option>
            <option value="Event Photography">Event Photography</option>
            <option value="Brand Photography">Brand Photography</option>
            <option value="Advertisements / Commercials">
              Advertisements / Commercials
            </option>
            <option value="Weddings">Weddings</option>
          </select>

          <textarea
            className="exe-input"
            name="description"
            id=""
            placeholder="Enter your project discription"
            onChange={(e) =>
              setContactData({ ...contactData, discription: e.target.value })
            }
            required
          ></textarea>
          <div className="form-btns">
            <button type="submit" className="send">
              Submit Request
            </button>
            <a className="contact-email" href="mailto:my1335667@gmail.com">
              Contact Via Email
            </a>
          </div>
          <p className="last-p">
            You’ll get a professional response with scope, timeline, and next
            steps
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
