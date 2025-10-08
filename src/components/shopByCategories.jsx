import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

function ShopByCategories() {
  return (
    <div className="bg-white">
      <Container className="p-5">
        <h2 className="text-center mb-4">Shop By Categories</h2>
        <p className="text-center my-3">Find exactly what you're looking for</p>
        
        <div >
          <Row className="d-flex justify-content-center">
            <Col>
            <a href="/all-products"> 
              <Card className="d-flex text-center m-2 p-4 category-card" style={{ width: '20rem' }}>
                <Card.Title>Electronics</Card.Title>
                <Card.Subtitle className="fw-light p-2">2 Products</Card.Subtitle>
                </Card>
            </a>
            </Col>
          
          <Col>
            <a href="/all-products"> 
              <Card className="d-flex text-center m-2 p-4 category-card" style={{ width: '20rem' }}>
                <Card.Title>Sports</Card.Title>
                <Card.Subtitle className="fw-light p-2">2 Products</Card.Subtitle>
                </Card>
            </a>
            </Col>
            <Col>
            <a href="/all-products"> 
              <Card className="d-flex text-center m-2 p-4 category-card" style={{ width: '20rem' }}>
                <Card.Title>Home</Card.Title>
                <Card.Subtitle className="fw-light p-2">2 Products</Card.Subtitle>
                </Card>
            </a>
            </Col>
            </Row>
        </div>
       
      </Container>
    </div>
  );
}
export default ShopByCategories;
