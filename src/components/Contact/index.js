import React,{useState, useTransition} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./style.css";

function Contact(props) {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')

  return (
    <>
      {/* Contact Area Start */}
      <section className="fag-contact-details-area section_100">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="single-contact-box">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-head">
                  <h4>Location</h4>
                </div>
                <div className="contact-text">
                  <p>
                    Transwerke Bulding, Constitution Hill <br /> Johannesburg,2001
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single-contact-box">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-head">
                  <h4>Phones</h4>
                </div>
                <div className="contact-text">
                  <p>~Company Phone Number Here~</p>
                  <br />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single-contact-box">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-head">
                  <h4>Email</h4>
                </div>
                <div className="contact-text">
                  <p>techjam@techsprung.co.za</p>
                  <br />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Contact Area End */}
      {/* Contact Form Start */}
      <section className="fag-contact-form section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Send <span>Message</span>
                </h2>
                <p>
                  blanditiis praesentium voluptatum deleniti atque
                  corrupti.accusamus et iusto odio corrupti.accusamus et iusto
                  odioiusto odio dignissimos ducimus qui blanditiis
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="contact-form-inn">
                <form action="vusumuzi1947@gmail.com" method="POST">
                  <Row>
                    <Col lg={6}>
                      <div className="comment-field">
                        <input
                          className="ns-com-name"
                          name="name"
                          placeholder="Name"
                          type="text"
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="comment-field">
                        <input
                          className="ns-com-name"
                          name="email"
                          placeholder="Email"
                          type="email"
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="comment-field">
                        <textarea
                          className="comment"
                          placeholder="Write your message here..."
                          name="comment"
                          defaultValue={""}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="comment-field form-action">
                        <button type="submit" className="fag-btn">
                          Send Message{" "}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Contact Form End */}
    </>
  );
}

export default Contact;
