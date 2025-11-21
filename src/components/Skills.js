import colorSharp from "../assets/img/color-sharp.png";

// ICON IMPORTS (same as your code)
import vueIcon from "../assets/icon/vue.png";
import reactIcon from "../assets/icon/react.png";
import angularIcon from "../assets/icon/angular.png";
import jsIcon from "../assets/icon/javascript.png";
import htmlIcon from "../assets/icon/html.png";
import cssIcon from "../assets/icon/css.png";
import bootstrapIcon from "../assets/icon/bootstrap.png";

import phpIcon from "../assets/icon/php.png";
import csharpIcon from "../assets/icon/csharp.png";
import cIcon from "../assets/icon/c.png";
import javaIcon from "../assets/icon/java.png";
import nodeIcon from "../assets/icon/node.png";
import expressIcon from "../assets/icon/express.png";
import pythonIcon from "../assets/icon/python.png";

import mysqlIcon from "../assets/icon/mysql.png";
import sqliteIcon from "../assets/icon/sqlite.png";
import mongoIcon from "../assets/icon/mongodb.png";

import gitIcon from "../assets/icon/git.png";
import githubIcon from "../assets/icon/github.png";
import postmanIcon from "../assets/icon/postman.png";
import azureIcon from "../assets/icon/azure.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="skills-wrapper">
        <h2 style={{ 
  fontSize: "60px", 
  textAlign: "center",
  color: "#fff"
}}>
  Skills
</h2>

        <p className="skills-desc">
          Here are the technologies and tools I have experience with.
        </p>

        <div className="skills-grid">

          {/* FRONTEND */}
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <div className="skill-list">
              
              <article className="skill-item">
                <img src={vueIcon} className="icon" />
                <div><strong>Vue.js</strong><br/>Advanced</div>
              </article>

              <article className="skill-item">
                <img src={reactIcon} className="icon" />
                <div><strong>ReactJs</strong><br/>Basic</div>
              </article>

              <article className="skill-item">
                <img src={angularIcon} className="icon" />
                <div><strong>Angular</strong><br/>Basic</div>
              </article>

              <article className="skill-item">
                <img src={jsIcon} className="icon" />
                <div><strong>JavaScript</strong><br/>Advanced</div>
              </article>

              <article className="skill-item">
                <img src={htmlIcon} className="icon" />
                <div><strong>HTML</strong><br/>Experienced</div>
              </article>

              <article className="skill-item">
                <img src={cssIcon} className="icon" />
                <div><strong>CSS</strong><br/>Intermediate</div>
              </article>

              <article className="skill-item">
                <img src={bootstrapIcon} className="icon" />
                <div><strong>Bootstrap</strong><br/>Basic</div>
              </article>

            </div>
          </div>

          {/* BACKEND */}
          <div className="skill-card">
            <h3>Backend Development</h3>
            <div className="skill-list">

              <article className="skill-item">
                <img src={phpIcon} className="icon" />
                <div><strong>PHP</strong><br/>Intermediate</div>
              </article>

              <article className="skill-item">
                <img src={csharpIcon} className="icon" />
                <div><strong>C#</strong><br/>Intermediate</div>
              </article>

              <article className="skill-item">
                <img src={cIcon} className="icon" />
                <div><strong>C</strong><br/>Intermediate</div>
              </article>

              <article className="skill-item">
                <img src={javaIcon} className="icon" />
                <div><strong>Java</strong><br/>Basic</div>
              </article>

              <article className="skill-item">
                <img src={nodeIcon} className="icon" />
                <div><strong>NodeJs</strong><br/>Basic</div>
              </article>

              <article className="skill-item">
                <img src={expressIcon} className="icon" />
                <div><strong>ExpressJs</strong><br/>Basic</div>
              </article>

              <article className="skill-item">
                <img src={pythonIcon} className="icon" />
                <div><strong>Python</strong><br/>Intermediate</div>
              </article>

            </div>
          </div>

          {/* DATABASE */}
          <div className="skill-card">
            <h3>Database Management</h3>
            <div className="skill-list">

              <article className="skill-item">
                <img src={mysqlIcon} className="icon" />
                <div><strong>MySQL</strong><br/>Intermediate</div>
              </article>

              <article className="skill-item">
                <img src={sqliteIcon} className="icon" />
                <div><strong>SQLite</strong><br/>Basic</div>
              </article>

              <article className="skill-item">
                <img src={mongoIcon} className="icon" />
                <div><strong>MongoDB</strong><br/>Basic</div>
              </article>

            </div>
          </div>

          {/* TOOLS */}
          <div className="skill-card">
            <h3>Tools</h3>
            <div className="skill-list">

              <article className="skill-item">
                <img src={gitIcon} className="icon" />
                <div><strong>Git</strong><br/>Intermediate</div>
              </article>

              <article className="skill-item">
                <img src={githubIcon} className="icon" />
                <div><strong>GitHub</strong><br/>Intermediate</div>
              </article>

              <article className="skill-item">
                <img src={postmanIcon} className="icon" />
                <div><strong>Postman</strong><br/>Intermediate</div>
              </article>

              <article className="skill-item">
                <img src={azureIcon} className="icon" />
                <div><strong>Azure DevOps</strong><br/>Basic</div>
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
