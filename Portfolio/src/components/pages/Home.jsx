export default function Home() {
  return (
    <div className="home">
      <div className="profile-wrapper">
        <div className="profile-box">
          <div class="profile-content">
            <img
              className="v-profile"
              src="/images/Profile3.jpg"
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
          <a href="/documents/Vanessa Engler 2026.pdf"  download="Vanessa Engler 2026.pdf" className="download-resume button">Resume</a>
            </div>
          </div>
        </div>
      </div>
      
        {/* SOCIALS */}
      <div className="socials">
        <div className="social-container">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://github.com/LunarWyrm" className="social-link has-text-success">GitHub</a>
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
          <li className="devicon-unit">
            <p className="devicon-name">Node.js</p>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          </li>
          <li className="devicon-unit">
          <p className="devicon-name">React</p>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          </li>
          <li className="devicon-unit">
          <p className="devicon-name">Vite js</p>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
          </li>
          <li className="devicon-unit">
          <p className="devicon-name">Bulma</p>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bulma/bulma-plain.svg" />
          </li>
        </ul>
      </div>
    </div>
  );
}
