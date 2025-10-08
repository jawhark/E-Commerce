import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";

function Welcome() {
  let navigate = useNavigate();
  return (
    <Container>
    <div className="text-center my-5 mb-5">
      <h1 className="my-5 mb-3">Welcome to Our E-Commerce Store!</h1>
      <p className="text-inrem my-4 text-secondary">Discover amazing products at great prices. Fast shipping, secure checkout, and excellent customer service.</p>
       <Button onClick={()=>{navigate(`/all-products`)}} variant="primary">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Button>
        <Button onClick={()=>{navigate(`/all-products`)}} variant="light" className="mx-3">View Products</Button>
    </div>
    </Container>
  );
}
export default Welcome;