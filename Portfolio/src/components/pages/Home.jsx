export default function Home() {
  return (
    <div className="home">
      <div className="profile-container">
        <div class="profile-content">
          <img
            className="v-profile"
            src="/images/V_Profile_2024.jpg"
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
