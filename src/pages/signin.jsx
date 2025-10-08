import NavbarHeader from "../components/navbar";
import Footer from "../components/footer";
import { Alert, Button, Card, Form } from "react-bootstrap";
import MyContext from "../Context/myContext";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";


function Signin() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { loginUser, user } = useContext(MyContext);

  const handleDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.type]: e.target.value
    });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if( !formData.email || !formData.password ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      loginUser(formData.email, formData.password);
      if(user){
        navigate("/");
      }
    }catch (error) {
      console.log(error.message);
    }
  }
  
  return (
    <div>
      <NavbarHeader />
      <div className="d-flex justify-content-center align-items-center m-3 p-3">
        <Card className="p-4 w-25">
          <p className="m-0 text-center">Sign in to your account</p>
          <p className="mb-3 text-muted text-center">
            Enter your email and password to access your account
          </p>
          <Form className="mt-2 d-flex flex-column">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Email address</Form.Label>
              <Form.Control 
              onChange={(e) => {handleDataChange(e)}}
              type="email" 
              placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control 
              type="password" 
              onChange={(e) => {handleDataChange(e)}}
              placeholder="Password" />
            </Form.Group>
            <Button 
            variant="dark" 
            onClick={(e) => {handleLogin(e)}}
            type="submit">
              Submit
            </Button>
          </Form>
          <p className="background my-3 text-center">
            <span>Don`t have an account?</span>
          </p>
          <Button variant="outline-secondary" type="submit">
            Create new account
          </Button>
          <Alert className="my-3" variant="success">
            Demo Credentials: <br /> Admin: admin@ecommerce.com / admin123
          </Alert>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
export default Signin;
