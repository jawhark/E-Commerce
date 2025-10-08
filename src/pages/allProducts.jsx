import {
  Container,
  Form,
  InputGroup,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import NavbarHeader from "../components/navbar";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function AllProducts() {
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
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
    <div>
      <NavbarHeader />
      <div className="bg-light">
      <Container>
        <h3>All Products</h3>
        <p>Browse our complete collection of products</p>
        <div className="productSearch d-flex mx-auto justify-content-center bg-white rounded shadow-sm">
          <Form
            className="d-flex mx-auto justify-content-center m-2"
            style={{ minWidth: "500px" }}
          >
            <InputGroup className="w-100 search-bar rounded-3 bg-light">
              <InputGroup.Text className="border-0" id="basic-addon1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="shadow-none border-0"
              />
            </InputGroup>
          </Form>
          <Form.Select aria-label="Default select example" className="m-2">
            <option>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example" className="m-2">
            <option>Price Range</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example" className="m-2">
            <option>Sort by Name (A to Z)</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <p className="my-3">Showing 6 of 6 products</p>
        <div className="d-flex justify-content-start mx-auto flex-wrap">
          {products.map((items, id) => (
            <Row>
              <Col className="sm=true">
                <Card
                  className="mx-2 my-3 product-card"
                  key={items.id}
                  style={{ width: "19rem" }}
                >
                  <Card.Img variant="top" src={products[id].productUrl} />
                  <Card.Body>
                    <div className="d-flex flex-column my-1">
                        <div className="my-2">
                      <Card.Subtitle className="bg-light rounded p-1 w-50 text-left">
                        {products[id].productCategory}
                      </Card.Subtitle>
                      </div>
                      <Card.Title className="fw-light text-dark">
                        {products[id].productName}
                      </Card.Title>
                      <Card.Text className="fw-light">
                      {products[id].productDesc}
                    </Card.Text>
                    </div>
                    
                    <div className="d-flex flex-column justify-content-between p-3 card-bottom">
                      <div className="d-flex justify-content-between my-2">
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
                      <div className="d-flex justify-content-between">
                        <Button variant="light" className="p-1 m-0">
                          View details
                        </Button>
                        <Button variant="dark" className="p-1 m-1">
                          <FontAwesomeIcon icon={faCartShopping} />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
      <Footer />
      </div>
    </div>
  );
}
export default AllProducts;
