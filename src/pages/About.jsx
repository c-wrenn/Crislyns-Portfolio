import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Experience from "../components/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  imageStyle: {
    height: "25rem",
    width: "25rem",
    borderRadius: "50%",
    border: "3px solid #000",
  },
  letterStyle: {
    fontStyle: {
      fontWeight: "200",
      fontSize: "2rem",
      fontFamily: "Trebuchet MS",
    },
    paragraphStyle: {
      fontFamily: "Trebuchet MS",
      letterSpacing: "1.2px",
      lineHeight: "1.6rem",
    },
  },
};

function About() {
  return (
    <body className="body-styles">
      <main>
        <section>
          <div>
            <h1 className="abt-title" styles={styles.letterStyle.fontStyle}>
              About Me
            </h1>
          </div>

          <div>
            <article className="aboutMe-articles">
              <h3>Frontend Developer</h3>
              <p>I have experience with front end development.</p>
            </article>

            <article className="aboutMe-articles">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs
              </p>
            </article>

            <article className="aboutMe-articles">
              <h3>Web Developer</h3>

              <div className="dev-descript">
                <div className="lapIcon">
                  <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
                  {/* <FontAwesomeIcon icon="fa-solid fa-laptop-code" size="xs" style={{color: "#fd72d8",}} /> */}
                </div>
                <div className="dev-p">
                <p>I am a web developer with experience collaborating.</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <article className="exp-article">
        <Experience />
      </article>
    </body>
  );
}

export default About;
