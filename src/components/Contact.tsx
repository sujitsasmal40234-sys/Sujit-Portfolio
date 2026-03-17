import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sujitsasmal40234@gmail.com" data-cursor="disable">
                sujitsasmal40234@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918345943769" data-cursor="disable">
                +91 8345943769
              </a>
            </p>
            <h4>Location</h4>
            <p>Tamluk, West Bengal, India</p>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p>
              <strong>(2021–2022)</strong> Tamluk High School — Higher Secondary
              in Science
            </p>
            <p>
              <strong>(2023–2025)</strong> Arena Animation Institute — Course of
              Animation VFX
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sujit Sasmal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
