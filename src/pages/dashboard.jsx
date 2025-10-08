import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer";
import NavbarHeader from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChartArea, faCircleExclamation, faCog, faCube, faDollar, faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

function Dashboard() {
    let navigate = useNavigate();
  return (
    <>
    <NavbarHeader />
    <div className="bg-light m-0 p-0">
        <Container>
    <h3 className="pt-3">Admin Dashboard</h3>
    <p className="text-muted">Manage your e-commerce store</p>
    <Row lg={4} className="mb-3 pt-4">
        <Col>
            <Button variant="dark w-100" onClick={()=>navigate('/productmanage')}> <FontAwesomeIcon icon={faCube} /> Manage Products</Button>
        </Col>
        <Col>
            <Button variant="outline-secondary w-100"onClick={()=>navigate('/order-manage')}> <FontAwesomeIcon icon={faCartShopping} /> Manage Orders</Button>
        </Col>
        <Col>
            <Button variant="outline-secondary w-100" onClick={()=>navigate('/productmanage')}> <FontAwesomeIcon icon={faPlus} /> Add Product</Button>
        </Col>
        <Col>
            <Button variant="outline-secondary w-100"> <FontAwesomeIcon icon={faCog} /> Setting</Button>
        </Col>
    </Row>
    <Row lg={4}>
        <Col>
        <div className="w-100 bg-white rounded-3 my-3 p-4 border">
        <div className="d-flex justify-content-between">
            <span>Total Products</span>
            <span><FontAwesomeIcon className="text-muted" icon={faCube} /></span>
        </div>
        <div className="pt-5">
            <span>6</span><br />
            <span className="text-muted">0 low stock</span>
        </div>
        </div>
        </Col>
        <Col>
        <div className="w-100 bg-white rounded-3 my-3 p-4 border">
        <div className="d-flex justify-content-between">
            <span>Total Products</span>
            <span><FontAwesomeIcon className="text-muted" icon={faCartShopping} /></span>
        </div>
        <div className="pt-5">
            <span>6</span><br />
            <span className="text-muted">0 low stock</span>
        </div>
        </div>
        </Col>
        <Col>
        <div className="w-100 bg-white rounded-3 my-3 p-4 border">
        <div className="d-flex justify-content-between">
            <span>Total Products</span>
            <span><FontAwesomeIcon className="text-muted" icon={faDollar} /></span>
        </div>
        <div className="pt-5">
            <span>6</span><br />
            <span className="text-muted">0 low stock</span>
        </div>
        </div>
        </Col>
        <Col>
        <div className="w-100 bg-white rounded-3 my-3 p-4 border">
        <div className="d-flex justify-content-between">
            <span>Total Products</span>
            <span><FontAwesomeIcon className="text-muted" icon={faUsers} /></span>
        </div>
        <div className="pt-5">
            <span>6</span><br />
            <span className="text-muted">0 low stock</span>
        </div>
        </div>
        </Col>
    </Row>
    <Row lg={2}>
        <Col>
         <div className="w-100 bg-white rounded-3 my-3 p-4 border">
            <div><FontAwesomeIcon icon={faCartShopping} /> Recent Orders</div>
            <div className="pt-5 text-center text-muted">No orders yet</div>
         </div>
        </Col>
        <Col>
        <div className="w-100 bg-white rounded-3 my-3 p-4 border">
            <div><FontAwesomeIcon icon={faCircleExclamation} /> Low stock Alert</div>
            <div className="pt-5 text-center text-muted">All products are well listed</div>
         </div>
        </Col>
    </Row>
    <Row lg={1} className="pb-5">
        <Col>
        <div className="w-100 bg-white rounded-3 my-3 p-4 border">
            <div><FontAwesomeIcon icon={faChartArea} />  Quick Insights</div>
            <div className="pt-5 text-center d-flex align-center justify-content-around">
                <div>
                    <h4>$0.00</h4>
                    <span>Average Order Value</span>
                </div>
                <div>
                    <h4>0%</h4>
                    <span>Order Fulfillment Rate</span>
                </div>
                <div>
                    <h4>320</h4>
                    <span>Total Inventory</span>
                </div>
            </div>
         </div>
        </Col>
    </Row>
    </Container>
    </div>
    <Footer />
    </>
    
  );
}

export default Dashboard;