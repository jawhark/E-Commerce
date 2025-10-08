import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer";
import NavbarHeader from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRotateLeft,
  faCartShopping,
  faShieldHalved,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

function Product() {
  let viewProduct = {
    id: 1,
    productUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    productName: "Wireless Bluetooth Headphones",
    productCategory: "Electronics",
    productDesc:
      "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
    productPrice: "$99.99",
    productRating: "(4.5)",
  };
  return (
    <>
      <NavbarHeader />
      <div className="bg-light pb-5">
        <Container>
          <p className="py-2">product</p>
          <Button
            className="text-center fw-semibold p-2 mb-3"
            variant="outline-secondary"
          >
            <FontAwesomeIcon className="px-2" icon={faArrowLeft} />
            Back to Products
          </Button>
          <Row className="product-details mb-5">
            <Col className="w-50">
              <Card.Img className="rounded-3" src={viewProduct.productUrl} />
            </Col>
            <Col className="w-50 m-2">
              <span>{viewProduct.productCategory}</span>
              <h3>{viewProduct.productName}</h3>
              <span className="text-muted mx-0">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <span className="px-2">{viewProduct.productRating}</span>
                <span className="reviews">123 reviews</span>
              </span>
              <h1 className="mt-3">{viewProduct.productPrice}</h1>
              <hr />
              <h6>Description</h6>
              <p className="my-3 text-muted">{viewProduct.productDesc}</p>
              <hr />
              <div className="my-2 text-muted">
                Availabilty: <span>50 in stock</span>
              </div>
              <div>
                <p className="m-1 text-muted">Quantity</p>
                <Button variant="outline-secondary" className="mx-2 px-3 fw-bold">
                  -
                </Button>
                <span className="mx-3">1</span>
                <Button variant="outline-secondary" className="mx-2 px-3 fw-bold">
                  +
                </Button>
              </div>
              <Button className="w-100 my-3" variant="dark">
                <FontAwesomeIcon icon={faCartShopping} /> Add to Cart{" "}
                {viewProduct.productPrice}
              </Button>
              <div className="d-flex justify-content-between mt-3">
                <span><FontAwesomeIcon icon={faTruck} /> Free shipping over 50$</span>
                <span><FontAwesomeIcon icon={faShieldHalved} /> 1 year Waranty</span>
                <span><FontAwesomeIcon icon={faArrowRotateLeft} /> 30 days return</span>
              </div>
            </Col>
          </Row>
          <div className="mb-0">
            <h5 className="mb-5">Related Products</h5>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-start">
          <Card className="mx-3 mb-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={viewProduct.productUrl} />
            <Card.Body>
              <Card.Title>{viewProduct.productName}</Card.Title>
              <Card.Text>{viewProduct.productDesc}
              </Card.Text>
              <div className="d-flex justify-content-between p-0">
                <div>
              <Card.Text className="fw-bold font-large">{viewProduct.productPrice}</Card.Text></div>
              <Button className="fw-semibold px-3 py-0" variant="outline-secondary">View</Button>
              </div>
            </Card.Body>
          </Card>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
export default Product;
