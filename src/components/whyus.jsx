import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
function Whyus() {
  return (
    <div className="bg-light pt-4">
      <Container>
        
        <div className="text-center m-5">
          <h1 className="my-5">Why Choose Us?</h1>
          <p>
            We provide the best shopping experience with top-quality products
            and exceptional service.
          </p>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
            <Row>
                <Col>
        <Card className="m-2 p-3 rounded">
          <Card.Body>
            <Card.Title className="text-center mb-5 p-4 w-25 mx-auto custom-bg-1">
              <FontAwesomeIcon icon={faTruck} />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-center">
              Fast Delivery
            </Card.Subtitle>
            <Card.Text className="text-center">
              Free shipping on orders over $50. Express delivery available.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="m-2 p-3 rounded">
          <Card.Body>
            <Card.Title className="text-center mb-5 p-4 w-25 mx-auto custom-bg-2">
              <FontAwesomeIcon icon={faShieldHalved} />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-center">
              Secure Shopping
            </Card.Subtitle>
            <Card.Text className="text-center">
              Your data is protected with industry-standard encryption.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="m-2 p-3 rounded">
          <Card.Body>
            <Card.Title className="text-center mb-5 p-4 w-25 mx-auto custom-bg-3">
              <FontAwesomeIcon icon={faWindowRestore} />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-center">
              Easy Returns
            </Card.Subtitle>
            <Card.Text className="text-center">
              30-day money-back guarantee on all purchases.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
}
export default Whyus;
