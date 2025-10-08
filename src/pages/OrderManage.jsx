import { Container, Form } from "react-bootstrap";
import NavbarHeader from "../components/navbar";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function OrderManage() {
  return (
    <div>
      <NavbarHeader />
      <div className="bg-light pb-5">
        <Container>
          <h3 className="pt-4">Order Management</h3>
          <p className="pb-3 text-muted">Track and manage customer orders</p>
          <div className="bg-white border p-3 d-flex flex-row rounded">
            <span className="pe-3 pt-1">Filter by status:</span>
            <Form.Select aria-label="Default select example" className="w-auto">
              <option>Price Range</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <span className="px-3 pt-1">Total Orders 0</span>
            <span className="pt-1">Showing 0</span>
          </div>
          <div className="bg-white border rounded mt-3 p-3">
            <span><FontAwesomeIcon icon={faCartShopping} /> Orders (0)</span>
            <div className="d-flex flex-column align-items-center mt-5 pb-5 text-secondary">
                <span><FontAwesomeIcon icon={faCartShopping} /></span>
                <span>No orders found</span>
                <span>Orders will appear here when customers place them</span>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default OrderManage;
