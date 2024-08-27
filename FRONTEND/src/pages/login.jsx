import "./login.css";
import { useState } from "react";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const navigate = useNavigate();
  const { storeTokenInLS ,API } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json(); // Read the response body as JSON
      console.log(`response from server ${res_data.message} and ${res_data.extraDetails}`);

      if (response.ok) {
       
        storeTokenInLS(res_data.token);
        toast.success("login Successful");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="login">
        <div className="login-img">
          <img src="./images/login-1.jpeg" alt="Picture of Login" />
        </div>
        <div className="login-container">
          <h1>
            log <span>in</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              required
              name="email"
              value={user.email}
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Your Password"
              required
              name="password"
              value={user.password}
              onChange={handleInput}
            />
            <button type="submit">login</button>
          </form>
        </div>
      </section>
    </>
  );
};
