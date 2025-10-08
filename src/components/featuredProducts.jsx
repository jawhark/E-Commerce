import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

function FeaturedProducts() {
  let navigate = useNavigate();
  const products = [
    {
      id: 1,
      productUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      productName: "Wireless Bluetooth Headphones",
      productCategory: "Electronics",
      productDesc:
        "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
      productPrice: "$99.99",
      productRating: "(4.5)",
    },
    {
      id: 2,
      productUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      productName: "Running Shoes",
      productCategory: "Sprots",
      productDesc:
        "Comfortable running shoes with advanced cushioning technology.",
      productPrice: "$79.99",
      productRating: "(4.5)",
    },
    {
      id: 3,
      productUrl:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
      productName: "Yoga Mat",
      productCategory: "Sports",
      productDesc: "Non-slip yoga mat made from eco-friendly materials.",
      productPrice: "$39.99",
      productRating: "(4.5)",
    },
  ];

  return (
    <div className="bg-light">
      <Container>
        <div className="text-center p-5">
          <h1>Featured Products</h1>
          <p>Check out our most popular items</p>
        </div>
        <div className="d-flex justify-content-center mx-auto flex-wrap">
          {products.map((items, id) => (
            <Row>
              <Col>
                <Card
                  className="m-2 product-card"
                  key={items.id}
                  style={{ width: "25rem" }}
                >
                  <Card.Img variant="top" src={products[id].productUrl} />
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title className="fw-light text-dark">{products[id].productName}</Card.Title>
                      <div>
                        <Card.Subtitle className="bg-light rounded p-1">
                          {products[id].productCategory}
                        </Card.Subtitle>
                      </div>
                    </div>
                    <Card.Text className="fw-light">{products[id].productDesc}</Card.Text>
                    <div className="d-flex justify-content-between p-3 card-bottom">
                      <div className="d-flex flex-column align-items-left">
                        <strong>{products[id].productPrice}</strong>
                        <span className="text-muted mx-0">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="star-icon"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="star-icon"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="star-icon"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="star-icon"
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="star-icon"
                          />
                          {products[id].productRating}
                        </span>
                      </div>
                      <div>
                        <Button variant="light" className="p-1 m-1">
                          View
                        </Button>
                        <Button variant="dark" className="p-1 m-1">
                          <FontAwesomeIcon icon={faCartShopping} />
                          Add
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-center p-5">
          <Button onClick={()=>navigate('/all-products')} variant="light">View All Products</Button>
        </div>
      </Container>
    </div>
  );
}
export default FeaturedProducts;
