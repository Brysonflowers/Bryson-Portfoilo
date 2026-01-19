import picofbryson from "./assets/brysonflowerspic.png";
import githubimg from "./assets/githublogo.png";
import gmailimg from "./assets/Gmail_Logo.png";
import linkedinimg from "./assets/linkedin.png";

import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="content-container">
        <section id="about" className="about-me">
          <h1 className="about-me">About Bryson</h1>
          <p className="about-me">
            Ever since I was young, I've been fascinated by how technology can
            be used to solve real-world problems. This curiosity grew into a
            passion, which I formalized by earning my Associate of Applied
            Science degree from Northwest Mississippi Community College. I
            then gained hands-on experience and a professional certification
            at the nonprofit Base Camp Coding Academy in Water Valley,
            Mississippi, where my hard work and willingness to learn allowed
            me to quickly develop skills in full-stack development. I'm now
            eager to apply my dedication to a professional software
            development role where I can contribute to building robust and
            innovative solutions.
          </p>
        </section>

        <section id="experience" className="training">
          {/* SECTION 2: WORK EXPERIENCE */}
          <div className="training">
            <h1 className="training-section-header">WORK EXPERIENCE</h1>
            <hr className="header-line" />

            <div className="entry">
              <div className="date-location">
                <p>
                  Grenada, MS <br /> Feb 2025 - June 2025
                </p>
              </div>

              <div className="job-details">
                <h3>Milwaukee Tool Engineer Intern</h3>
                <ul className="training">
                  <li className="training">
                    Assisted in quality assurance processes...
                  </li>
                  <li className="training">
                    Contributed to inventory management...
                  </li>
                  <li className="training">
                    Collaborated with cross-functional teams...
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="training">
          {/* SECTION 1: EDUCATION */}
          <div className="training">
            <h1 className="training-section-header">EDUCATION</h1>
            <hr className="header-line" />

            <div className="entry">
              <div className="date-location">
                <p>
                  Expected <br /> May 2026
                </p>
              </div>

              <div className="job-details">
                <h3>Northwest Community College</h3>
                <ul className="training">
                  <li className="training">
                    Associate of Applied Science in Coding Technology
                  </li>
                  <li className="training">
                    Certificate in Full-Stack Software Development — Base Camp
                    Coding Academy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholders for other sections */}
        <section id="skills" style={{ padding: '2rem 0' }}>
          <h2>Skills</h2>
          <p>Skills matrix coming soon...</p>
        </section>

        <section id="projects" style={{ padding: '2rem 0' }}>
          <h2>Projects</h2>
          <p>Project gallery coming soon...</p>
        </section>

        <section id="contact" style={{ padding: '2rem 0' }}>
          <h2>Contact</h2>
          <p>Contact form coming soon...</p>
        </section>
      </div>
    </Layout>
  );
}

export default App;

export default App;
