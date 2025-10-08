import { faCube } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <div className="bg-white border-top p-5">
        <Container>
          <Row>
            <Col className="d-flex flex-column">
              <div className="d-flex mb-3 logo">
                <span>
                  <FontAwesomeIcon icon={faCube} size="2x" className="me-2" />
                </span>
                <span>E-Commerce</span>
              </div>
              <div>
                <p className="fw-light">
                  Your trusted online store for quality products and exceptional
                  service.
                </p>
              </div>
            </Col>
            <Col className="d-flex flex-column">
              <h5 className="mb-3">Quick links</h5>
              <a className="text-secondary" href="">
                Home
              </a>
              <a className="text-secondary" href="">
                All Products
              </a>
              <a className="text-secondary" href="">
                Electronics
              </a>
              <a className="text-secondary" href="">
                Clothing
              </a>
            </Col>
            <Col className="d-flex flex-column">
              <h5 className="mb-3">Customer Services</h5>
              <a className="text-secondary" href="">
                Contact Us
              </a>
              <a className="text-secondary" href="">
                Shopping Info
              </a>
              <a className="text-secondary" href="">
                Returns
              </a>
              <a className="text-secondary" href="">
                FAQ
              </a>
            </Col>
            <Col className="d-flex flex-column">
              <h6 className="fw-semibold mb-3">Contact Info</h6>
              <address>
                <span className="fw-light mb-1">
                  123 Commerce St, Business District
                </span>
                <br />
                <span className="fw-light mb-1">(555) 123-4567</span>
                <br />
                <span className="fw-light mb-1">support@ourstore.com</span>
              </address>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="border-top p-2">
        <Container>
          <div className=" d-flex flex-row justify-content-between">
            <div className="">
              <p className="text-secondary">
                {" "}
                &#169; E-Commerce stroe By JK, All rights reserved.{" "}
              </p>
            </div>
            <div className="">
              <div className="d-flex flex-row">
                <a className="text-secondary mx-3" href="">
                  Privacy Policy
                </a>
                <a className="text-secondary" href="">
                  Terms of Services
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default Footer;
