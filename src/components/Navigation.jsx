import { NavLink } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="navbar-menu">
         
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-title">
            CRISLYN'S | PORTFOLIO
          </NavLink>
        </div>

          <div className="navigation-box" id="navigation">
            <ul className="navbar-list">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link active" end>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link active">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/resume" className="nav-link active">
                  Technologies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link active">
                  Contact
                </NavLink>
              </li>
              <li>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
            
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;