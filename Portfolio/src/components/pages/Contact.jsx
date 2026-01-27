import { useEffect } from "react";

export default function Contact() {

  useEffect(() => {
    if (!window.__calendlyLoaded && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/v-devdesign/30min",
        parentElement: document.getElementById("calendly-embed")
      });
      window.__calendlyLoaded = true;
    }
  }, []);

  return (
    <div className="contact-container">
      <h2 className="title-contact">Contact Me</h2>
      {/* LINKS ABOVE CALENDLY */}
      <div className="links-section">
        <h1 className="title-links">Links</h1>
        <ul className="links">
          <a href="mailto:englerprogramming@gmail.com" className="has-text-success">
            ✉️ englerprogramming@gmail.com
          </a>
          <br />
          <a href="https://github.com/LunarWyrm" className="has-text-success">
            💻 GitHub
          </a>
          <br />
          <a href="https://www.linkedin.com/in/vanessaengler/" className="has-text-success">
            🔗 LinkedIn
          </a>
        </ul>
      </div>

      {/* CALENDLY API */}
      <div
        id="calendly-embed"
        className="calendly-box"
      ></div>
    </div>
  );
}