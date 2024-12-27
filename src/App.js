import React, { useState } from "react";
import "./App.css";
import forest from "./assets/Rectangle.png";
import amazon from "./assets/amazon_icon.png";
import tree from "./assets/tree.png";
import google from "./assets/googleIcon.png";
import FB from "./assets/FBIcon.png";
import remove from "./assets/remove.svg";

function App() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      errors.email = "The email field is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "The password field is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login Successful!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const InputField = ({ type, name, placeholder }) => (
    <div className="input-group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
      />
      {formErrors[name] && (
        <div className="error">
          <img src={remove} alt="error icon" />
          {formErrors[name]}
        </div>
      )}
    </div>
  );

  return (
    <div className="login-page">
      <img className="login-background-img" src={forest} alt="background" />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-amazon-div">
          <img className="login-amazon-img" src={amazon} alt="amazon logo" />
        </div>
        <div className="login-details-div">
          <h2>Login</h2>
          <img className="login-tree" src={tree} alt="tree logo" />
          <InputField type="email" name="email" placeholder="Email" />
          <InputField type="password" name="password" placeholder="Password" />
          <button className="signIn-btn"  type="submit">
            Sign In
          </button>
          <div className="extra-links">
            <a className="login-forgot" href="/forgot-password">
              Forgot Password?
            </a>
            <a className="login-signup" href="/signup">
              New User? Sign Up
            </a>
          </div>
          <p>or</p>
          <div className="social-login">
            <button>
              <img src={google} alt="google icon" />
              Continue with Google
            </button>
            <button className="button2">
              <img src={FB} alt="facebook icon" />
              Continue with Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
