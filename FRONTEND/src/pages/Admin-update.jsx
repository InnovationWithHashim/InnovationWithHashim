import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth  } from "../store/Auth";
import "./adminupdate.css";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Navigate } from 'react-router-dom';

export const AdminUpdate = () => {
  const params = useParams();
  const { authorizationToken ,API} = useAuth(); 
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const getSingleUserData = async () => {
    try {
      // Remove the "Bearer " prefix from the token if it's present
      const token = authorizationToken.replace("Bearer ", "");
      console.log(token);

      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // Ensure Bearer is added here
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setData(userData);
        console.log(userData);

      } else {
        console.error("Unable to fetch user data", response.statusText);
      }
    } catch (error) {
      console.error("Unable to fetch user data", error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, [params.id, authorizationToken]); // Added dependencies to ensure the effect runs when these values change

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = authorizationToken.replace("Bearer ", "");

      const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Ensure Bearer is added here
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("User data updated successfully");
        toast.success("User data updated successfully");
        return <Navigate to="/admin/users" />;


      } else {
        toast.error("User data not updated successfully");
      }
      
    } catch (error) {
      console.error("Unable to update user data", error);
    }
  };

  return (
    <>
    <section className="admin-update-container">
      <h1>user <span>update</span></h1>
      
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            name="username"
            value={data.username}
            onChange={handleInput}
            autoCapitalize="off"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            value={data.email}
            onChange={handleInput}
          />
          <input
            type="number"
            placeholder="Your Phone Number"
            required
            name="phone"
            value={data.phone}
            onChange={handleInput}
          />
          <button type="submit">Update</button>
        </form>
      </section>
    </>
  );
}
