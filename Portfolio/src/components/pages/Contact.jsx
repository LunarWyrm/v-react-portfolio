export default function Contact() {
  return (
    <div className="contact-container">
      <div className="links-section">
        <h1 className="title-links">Links</h1>
        <ul className="links">
          <a href="mailto:englerprogramming@gmail.com">✉️ englerprogramming@gmail.com</a>
          <br />
          <a href="https://github.com/LunarWyrm">💻 GitHub</a>
          <br />
          <a href="https://www.linkedin.com/in/vanessaengler/">🔗 LinkedIn</a>
        </ul>
      </div>

      <div className="form-section">
        <h2 className="title-contact">Contact Me</h2>
        <form action="submit_form.php" method="POST" className="email-form">
          <div className="form-group">
            <div className="left-group">
              <input type="text" id="name" name="name" placeholder="Name"required />

              <input type="email" id="email" name="email" placeholder="Email" required />

              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>

            <div className="message-group">
              <textarea id="message" name="message" rows="10" placeholder="Message" required></textarea>
            </div>
          </div>

          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}
