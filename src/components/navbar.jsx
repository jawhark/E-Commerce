import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import MyContext from "../Context/myContext";

function NavbarHeader() {
  let navigate = useNavigate();
let [searchQuery, setSearchQuery] = useState("");

const { user, email, logout } = useContext(MyContext);

const handleSearch = (e) => {
  if(e.key === 'Enter'){
    e.preventDefault();
    if(searchQuery.trim() !== ""){
    navigate(`/all-products`);}
  }
};
const userLoggedIn = user !== null;
const isAdmin = email === "admin@ecommerce.com";

  return (
    <>
      <Navbar className="bg-body-tertiary p-1 mt-0 mb-0 extra shadow-sm position-sticky top-0 z-3" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"  className="me-auto d-flex m-2" >
            <span className="logo"><FontAwesomeIcon icon={faCube} size="2x" className="me-2" /></span>
            <span className="logo">E-Commerce</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form
              className="d-flex mx-auto flex-grow-1 justify-content-center"
              style={{ maxWidth: "500px" }}
            >
              <InputGroup className="w-100 search-bar rounded-3">
                <InputGroup.Text className="border-0" id="basic-addon1">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="shadow-none border-0"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </InputGroup>
            </Form>
            <Nav className="ms-auto">
              <Button className="me-3" variant="light" onClick={()=>navigate('/all-products')}>
                Products
              </Button>
              
                <Button className="me-3" variant="light" onClick={()=>navigate('/dashboard')}>
                  Dashboard
                </Button>
             
              {!userLoggedIn && (<Button className="me-3" variant="light" onClick={()=>navigate('/signin')}>
                Login
              </Button>)}
              {!userLoggedIn && (<Button className="me-3" variant="dark" onClick={()=>navigate('/signup')}>
                Sign Up
              </Button>)}
              {userLoggedIn && (
                <Button variant="dark" onClick={()=> {logout(); navigate("/");}}>Logout</Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;
