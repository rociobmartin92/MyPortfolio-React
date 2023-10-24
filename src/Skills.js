import React from "react";

import {
  css3,
  react1,
  html5,
  typescript,
  sql,
  atom,
  git,
  js4,
  redux,
} from "./imagesLogo";

export function Skills() {
  return (
    <div className="container-skills">
      <h1>Skills</h1>

      <div className="container-icons-skills">
        <div className="container">
          <div className="skills">
            <div className="img">
              <img src={html5} alt="" />
              <div className="skill_name">
                <p>HTML</p>
              </div>
            </div>

            <div className="img">
              <img src={css3} alt="" />
              <div className="skill_name">
                <p>CSS</p>
              </div>
            </div>
            <div className="img">
              <img src={js4} alt="" />
              <div className="skill_name">
                <p>Jvascript</p>
              </div>
            </div>
            <div className="img">
              <img src={typescript} alt="" />
              <div className="skill_name">
                <p>Typescript</p>
              </div>
            </div>
            <div className="img">
              <img src={react1} alt="" />
              <div className="skill_name">
                <p>Reactjs</p>
              </div>
            </div>
            <div className="img">
              <img src={atom} alt="" />
              <div className="skill_name">
                <p>ReactNative</p>
              </div>
            </div>
            <div className="img">
              <img src={redux} alt="" />
              <div className="skill_name">
                <p>Redux toolkit</p>
              </div>
            </div>
            <div className="img">
              <img src={git} alt="" />
              <div className="skill_name">
                <p>Git</p>
              </div>
            </div>
            {/* <div className="img">
              <img src={`imagen/github.png`} alt="" />
              <div className="skill_name">
                <p>GitHub</p>
              </div>
            </div> */}
            {/* <div className="img">
              <img src={`imagen/sass1.png`} alt="" />
              <div className="skill_name">
                <p>Sass</p>
              </div>
            </div>
            <div className="img">
              <img src={`imagen/py5.png`} alt="" />
              <div className="skill_name">
                <p>Python</p>
              </div>
            </div> */}
            <div className="img">
              <img src={sql} alt="" />
              <div className="skill_name">
                <p>MySql</p>
              </div>
            </div>
            {/* <div className="img">
              <img src={`imagen/flask.png`} alt="" />
              <div className="skill_name">
                <p>Flask</p>
              </div>
            </div> */}
            {/* <div className="img">
              <img src={`imagen/django1.png`} alt="" />
              <div className="skill_name">
                <p>Django</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
