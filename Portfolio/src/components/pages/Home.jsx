export default function Home() {
  return (
    <div className="home">
      <div className="profile-wrapper">
        <div className="profile-container">
          <div class="profile-content">
            <img
              className="v-profile"
              src="/images/VEngler2 Crop - By @novva.lux.jpg"
              alt="v_profile"
            />
            <div className="text-container">
              <h1 className="name">
                Vanessa
                <br />
                Engler
              </h1>
              <div className="my-title">
                Full-Stack Web Developer
              </div>
          <a href="/documents/Vanessa Engler 2024.pdf"  download="Vanessa Engler 2024.pdf" className="download-resume button">Resume</a>
            </div>
          </div>
        </div>
      </div>
      
        {/* SOCIALS */}
      <div className="socials">
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://github.com/LunarWyrm" className="has-text-success">GitHub</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/vanessaengler/" className="has-text-success">LinkedIn</a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:englerprogramming@gmail.com" className="has-text-success">Email</a>
            </li>
          </ul>
        </div>
      </div>
        {/* ICONS */}
        
      <div className="devicons">
        <ul>
          <li className="node">
            Node.js
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          </li>
          <li className="react">
            React
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          </li>
          <li className="vite">
            Vite js
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
          </li>
          <li className="bulma">
            Bulma
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bulma/bulma-plain.svg" />
          </li>
        </ul>
      </div>
    </div>
  );
}
