import { useState } from "react";
import MyContext from "./myContext";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, signOut  } from "firebase/auth";

const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [products, setProducts] = useState([]);

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log("user logged in successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

   
  };
   const logout = () => {
      signOut(auth)
        .then(() => {
          setUser(null);
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(err);
          // An error happened.
        });
    };

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        productName,
        setProductName,
        productCategory,
        setProductCategory,
        productDesc,
        setProductDesc,
        productPrice,
        setProductPrice,
        productUrl,
        setProductUrl,
        products,
        setProducts,
        loginUser,
        confirmPassword,
        setConfirmPassword,
        logout,
        // Add your context values here
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
