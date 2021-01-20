import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';

const path = require('path')

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div id='particles' style={{position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>

      <header className="App-header">
        <p id="landingMessage">
          Hello, I'm <span style={{color: 'cyan'}}>Dino Hadzic.</span> <br />
          I'm a web developer.
        </p>
        <a href="#about" id="landingButton">
          View my portfolio < FontAwesomeIcon icon={['fas', 'arrow-right']} />
        </a>
      </header>
      <div id="about">
        <div id="education">
          <h3>< FontAwesomeIcon icon={['fas', 'graduation-cap']} /> Education</h3>
          <h4>Bachelors Degree in Computer Science</h4>
          University of Washington Tacoma<br />
          Graduated 2018
        </div>

        <div id="skills">
          <h3 style={{color: '#666b68', textAlign: 'center'}}>< FontAwesomeIcon icon={['fas', 'keyboard']} /> Technical Skills</h3>
          <p id="skillCategory" className="skillCategory90">
            HTML &nbsp; 90%
          </p>
          <p id="skillCategory" className="skillCategory90">
            CSS &nbsp; 90%
          </p>
          <p id="skillCategory" className="skillCategory80">
            JavaScript &nbsp; 80%
          </p>
          <p id="skillCategory" className="skillCategory80">
            Node.js &nbsp; 80%
          </p>
          <p id="skillCategory" className="skillCategory80">
            MongoDB &nbsp; 80%
          </p>
          <p id="skillCategory" className="skillCategory70">
            React &nbsp; 70%
          </p>
          <p id="skillCategory" className="skillCategory70">
            Python &nbsp; 70%
          </p>
          <p id="skillCategory" className="skillCategory60">
            SQL &nbsp; 60%
          </p>
          <p id="skillCategory" className="skillCategory60">
            Video editing &nbsp; 60%
          </p>
          <p id="skillCategory" className="skillCategory50">
            Photoshop &nbsp; 50%
          </p>
          <p id="skillCategory" className="skillCategory50">
            PHP  &nbsp; 50%
          </p>
          <p id="skillCategory" className="skillCategory50">
            WordPress &nbsp; 50%
          </p>
          <p id="skillCategory" className="skillCategory60">
            Java &nbsp; 60%
          </p>
        </div>
        <div id="projects">
          <h3 style={{color: '#666b68', textAlign: 'center'}}>< FontAwesomeIcon icon={['fas', 'code']} /> Projects</h3>
          <span style={{color: '#007ba1'}}>GifShr</span>
          <p style={{width: '80%', textAlign: 'left', margin: 'auto', marginBottom: '10px'}}>
            A social media site - including: Account creation/login, Creating posts, liking posts,
            sharing posts, comments, viewing and following other profiles, searching for profiles,  and more.
          </p>
          <br />
          <a href="https://gifshr.herokuapp.com/" id="siteButton" target="_blank" rel="noreferrer">View site</a>
          <br /><br />
          <img src={path.join(process.env.PUBLIC_URL, '/gifshr2.png')} alt="gifshr" id="gifshrImage" />
          <br />More projects coming soon.<br />

        </div>
        <div id="links" style={{textAlign: 'left', marginBottom: '40px'}}>
          <h3 style={{color: '#666b68', textAlign: 'center'}}>< FontAwesomeIcon icon={['fas', 'link']} /> Links</h3>
          < FontAwesomeIcon icon={['far', 'envelope']} /> &emsp;<a href="mailto:dinohadzic28@gmail.com" className="socialLink">dinohadzic28@gmail.com</a>
          <br />
          < FontAwesomeIcon icon={['fab', 'github']} /> &emsp;<a href="https://github.com/hadz333" className="socialLink" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default App;
