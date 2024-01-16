// import github from "../img/github.svg";
// import linkedIn from "../img/linkedIn.svg"
//import 'bootstrap/dist/css/bootstrap.css';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer>
            <div>
                <ul>
                    <a href="https://www.linkedin.com" target="_blank"
                    rel="noopener noreferrer"> 
                    <FontAwesomeIcon icon={faLinkedin} />
                    {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                    </a>

                    <a href="https://github.com/c-wrenn"   target="_blank"
                    rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </ul>
            </div>
            <section>
                <p>Crislyn's Portfolio | 2023</p>
            </section>
        </footer>
    );
};

export default Footer;