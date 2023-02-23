import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCaretRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../img/techjam-logo.png";

import "./style.css";

function Footer(props) {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <footer className="fag-footer">
        <div className="footer-top-area">
          <Container>
            <Row className="justify-content-between text-center m-auto">
              <Col lg={4} sm={6}>
                <div className="single-footer">
                  <h3>Our Mission</h3>
                  <p>
                  We're driven by the opportunity to change the way people think 
                  about tech & gaming through impactful experience-led strategies 
                  that create lasting bonds & build engaged communities. 
                  </p>
                  <p>
                  TechJam has become an influential agent of change throughout the 
                  tech and gaming industries. We partner with brands to change how 
                  community members view tech & gaming from the inside out

                    {/* euismod metus sit amet, tristique justo. Vestibulum mattis */}
                    {/* Vestibulum mattis,{" "} */}
                  </p>
                </div>
              </Col>
              <Col lg={4} sm={6}>
                <div className="widget-content">
                  <div className="single-footer">
                    <h3>Explore</h3>
                    <ul>
                      <li>
                        <Link to="/about" >
                          <FaCaretRight />
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/programs" >
                          <FaCaretRight />
                          Esports
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" >
                          <FaCaretRight />
                          Contact Us
                        </Link>
                      </li>
                      
                      <li>
                        <Link to="/programs" onClick={onClick}>
                          <FaCaretRight />
                          {/* Help &amp; Support */}
                          TechJam NXTlevel
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Privacy Policy
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </Col>
              {/* <Col lg={3} sm={6}>
                <div className="widget-content">
                  <div className="single-footer">
                    <h3>Our Games</h3>
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Need For Speed
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Call Of Duty
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Resident Evil
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Dragons Fight
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />2 Player Champions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col> */}
              <Col lg={4} sm={6}>
                <div className="single-footer">
                  <h3>Contact Us</h3>
                  <div className="footer-contact">
                    <h4 className="title">
                      <FaMapMarkerAlt />
                      Address{" "}
                    </h4>
                    <p>
                      Transwerke Bulding, Constitution Hill
                      <br />
                      Johannesburg,2001
                    </p>
                  </div>
                  <div className="footer-contact">
                    <h4 className="title">
                      <FaEnvelope />
                      Email Address
                    </h4>
                    <p>techjam@techsprung.co.za</p>
                  </div>
                  {/* <div className="footer-contact">
                    <h4 className="title">
                      <FaPhoneAlt />
                      Phone{" "}
                    </h4>
                    <p>+27 69 196 1025</p>
                  </div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row>
              <Col sm={12}>
                <div className="footer-bottom-inn">
                  <div className="footer-logo">
                    <a href="/">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <a target="_blank" href="https://www.facebook.com/techjambytechsprung/" >
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/techjam_africa/" >
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@techjam_africa">
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/techjam_africa">
                          <FaTwitter />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright">
                    <p>
                      &copy; Copyrights {new Date().getFullYear()} Techjam - All
                      Rights Reserved
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;
