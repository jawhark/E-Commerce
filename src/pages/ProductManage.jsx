import { Button, Container, Form, InputGroup, Table } from "react-bootstrap";
import Footer from "../components/footer";
import NavbarHeader from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faEdit,
  faMagnifyingGlass,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ProductManage() {
  const [showOverlay, setShowOverlay] = useState(false);
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
      productStock: "50",
      productFeatured: "Featured",
      productInStock: "In Stock",
    },
    {
      id: 2,
      productUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      productName: "Wireless Bluetooth Headphones",
      productCategory: "Electronics",
      productDesc:
        "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
      productPrice: "$99.99",
      productRating: "(4.5)",
      productStock: "50",
      productFeatured: "Featured",
      productInStock: "In Stock",
    },
  ];
  return (
    <>
      <NavbarHeader />
      <div className="bg-light m-0 pb-5">
        <Container>
          <div className="d-flex pt-3 justify-content-between">
            <div>
              <h3>Product Managemet</h3>
              <p className="text-muted">Manage your product inventory</p>
            </div>
            <div>
              <Button variant="dark" onClick={() => setShowOverlay(true)}>
                <FontAwesomeIcon icon={faPlus} /> Add Product
              </Button>
            </div>
          </div>
          <div>
            {showOverlay && (
              <div className="d-flex justify-content-center align-items-center z-3 position-absolute bottom-0 top-0 start-0 end-0 bg-light bg-opacity-75">
                <div
                  className="bg-white border p-3 rounded shadow-sm"
                  style={{ width: 500 }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <span className="fw-bold">Add new product</span>
                      <span className="text-muted">
                        Create a product for your store
                      </span>
                    </div>
                    <Button
                      variant="none"
                      onClick={() => setShowOverlay(!showOverlay)}
                      className=""
                    >
                      X
                    </Button>
                  </div>
                  <div className="pt-3">
                    <div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label">
                        Product Name:
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Apple Iphone..."
                      />
                    </div>
                    <div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label">
                        Price:
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="100"
                      />
                    </div>
                    <div class="mb-2">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Description:
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label">
                        Product Url:
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="https://example.com/apple-iphone.jpg"
                      />
                    </div>
                    <div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label">
                        Category:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Electronics"
                      />
                    </div>
                    <div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label">
                        Stock Quantity:
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="50"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Featured
                      </label>
                    </div>
                    <Button className="mt-2" variant="dark">
                      Add Product
                    </Button>
                    <Button className="mt-2 mx-2" variant="outline-secondary" onClick={() => setShowOverlay(!showOverlay)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white border d-flex rounded p-3">
            <div className="w-100 mx-3">
              <Form>
                <InputGroup className="w-100 search-bar rounded-3">
                  <InputGroup.Text className="border-0" id="basic-addon1">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </InputGroup.Text>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="shadow-none border-0 bg-light"
                  />
                </InputGroup>
              </Form>
            </div>
            <div className="w-100 mx-3">
              <Form.Select
                aria-label="Default select example"
                className="w-100 bg-light"
              >
                <option>Sort by Name (A to Z)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
          <div className="bg-white p-3 mt-5 rounded border">
            <div>
              <p>
                <FontAwesomeIcon icon={faCube} /> Products (6){" "}
              </p>
            </div>
            <div className="w-100">
              <Table className="overflow-auto" responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((items, id) => (
                    <tr>
                      <td className="d-flex">
                        <div>
                          <img
                            src={products[0].productUrl}
                            style={{ width: 60 }}
                            alt={products[0].productName}
                            className="rounded me-3"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span>{products[0].productName}</span>
                          <span className="text-muted">
                            {products[0].productDesc}
                          </span>
                        </div>
                      </td>
                      <td>{products[0].productCategory}</td>
                      <td>{products[0].productPrice}</td>
                      <td>{products[0].productStock}</td>
                      <td>
                        {products[0].productFeatured}{" "}
                        {products[0].productInStock}
                      </td>
                      <td>
                        <Button className="p-1 m-1">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button className="p-1 m-1 ">
                          <FontAwesomeIcon icon={faTrash} />{" "}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ProductManage;
