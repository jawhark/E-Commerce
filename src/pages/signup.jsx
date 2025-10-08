import NavbarHeader from "../components/navbar";
import Footer from "../components/footer";
import { Button, Card, Form } from "react-bootstrap";
import { useContext } from "react";
import MyContext from "../Context/myContext";
import { useNavigate } from "react-router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";



function Signup() {

    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const navigate = useNavigate();
  const {user, loginUser, setUser} = useContext(MyContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log("User created:", userCredential.user);
      alert("User signed up successfully!");
      navigate("/dashboard");
    }
  } catch (error) {
    console.log("Signup error:", error.message);
    alert(error.message);
  }
};



  return (
    <div>
      <NavbarHeader />
      <div className="d-flex justify-content-center align-items-center m-3 p-3">
        <Card className="p-4 w-25">
          <p className="m-0 text-center">Create your account</p>
          <p className="mb-3 text-muted text-center">
            Sign up to start shopping with us
          </p>
          <Form className="mt-4 d-flex flex-column m-2">
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control 
              type="text" 
              name="username"
              placeholder="Enter your fullname" 
              onChange={(e) => {handleChange(e)}}
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Email address</Form.Label>
              <Form.Control 
              type="email" 
              name="email"
              placeholder="Enter email"
              onChange={(e) => {handleChange(e)}}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control 
              type="password" 
              name="password"
              placeholder="Password" 
              onChange={(e) => {handleChange(e)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label className="fw-semibold"> Confirm Password</Form.Label>
              <Form.Control 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              onChange={(e) => {handleChange(e)}}
              />
            </Form.Group>
            <Button variant="dark" onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </Form>
          <p className="background my-3 text-center">
            <span>Already have an account?</span>
          </p>
          <Button variant="outline-secondary" type="submit">
            Sign in instead
          </Button>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
export default Signup;
