export default function Contact() {
  return (
    <div className="contact-container">
      <div className="links-section">
        <h1>Links</h1>
        <ul className="links">
          <a href="mailto:englerprogramming@gmail.com">✉️ englerprogramming@gmail.com</a>
          <br />
          <a href="https://github.com/LunarWyrm">💻 GitHub</a>
          <br />
          <a href="https://www.linkedin.com/in/vanessaengler/">🔗 LinkedIn</a>
        </ul>
      </div>

      <div className="form-section">
        <h2>Contact Me</h2>
        <form action="submit_form.php" method="POST" className="email-form">
          <div className="form-group">
            <div className="left-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="message-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="10" required></textarea>
            </div>
          </div>

          <input type="submit" value="Send Message" />
        </form>
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .email-form {
          background-color: #222222;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 255, 55, 0.7), 0 0 15px rgba(0, 255, 55, 0.7);
          max-width: 700px; /* Made the form smaller */
          width: 100%;
          margin-top: 20px;
        }

        .email-form h2 {
          text-align: center;
          margin-bottom: 10px;
          color: #98e970;
        }

        .form-group {
          display: flex;
          justify-content: space-between;
        }

        .left-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-right: 20px;
        }

        .left-group input {
          margin-bottom: 30px; /* Added extra space between input fields */
        }

        .message-group {
          flex: 1.5;
        }

        .email-form label {
          display: block;
          margin-bottom: 5px;
          color: #f0f0f0;
        }

        .email-form input,
        .email-form textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #98e970;
          background-color: #121212;
          color: #f0f0f0;
          border-radius: 5px;
        }

        .email-form textarea {
          resize: none;
        }

        .email-form input[type="submit"] {
          background-color: #98e970;
          border: none;
          color: #000000;
          font-weight: bold;
          cursor: pointer;
          text-transform: uppercase;
          transition: background-color 0.3s ease;
          width: 100%;
          margin-top: 20px; /* Extra space before the Send Message button */
        }

        .email-form input[type="submit"]:hover {
          background-color: #f0f0f0;
          color: #000000;
        }

        .email-form input:focus,
        .email-form textarea:focus {
          outline: none;
          box-shadow: 0 0 10px rgba(0, 255, 55, 0.7), 0 0 20px rgba(0, 255, 55, 0.7); /* Updated glow color */
        }

        @media (min-width: 768px) {
          .form-group {
            display: flex;
            justify-content: space-between;
          }

          .left-group {
            flex-direction: column;
            width: 40%;
          }

          .message-group {
            flex: 1;
            margin-left: 20px;
          }
        }

        @media (max-width: 767px) {
          .form-group {
            flex-direction: column;
          }

          .left-group,
          .message-group {
            width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
