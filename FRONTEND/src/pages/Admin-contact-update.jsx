import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/Auth";
import "./adminupdate.css";
import { Navigate } from "react-router-dom";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const AdminContactUpdate = () => {
  const params = useParams();
  const { authorizationToken ,API } = useAuth(); // Assuming this returns the full "Bearer <token>"
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const getSingleContactData = async () => {
    try {
      const token = authorizationToken.replace("Bearer ", "");

      const response = await fetch(`${API}/api/admin/contacts/${params.id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // Ensure Bearer is added here
        },
      });

      if (response.ok) {
        const contactData = await response.json();
        setData(contactData);
      } else {
        console.error("Unable to fetch contact data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  useEffect(() => {
    getSingleContactData();
  }, [params.id, authorizationToken]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = authorizationToken.replace("Bearer ", "");

      const response = await fetch(`${API}/api/admin/contacts/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Ensure Bearer is added here
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Contact data updated successfully");
        return <Navigate to="/admin/contacts" />;
      } else {
        toast.error("Contact data not updated successfully");
      }
    } catch (error) {
      console.error("Error updating contact data:", error);
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
          <textarea
            placeholder="Your Message"
            required
            name="message"
            value={data.message}
            onChange={handleInput}
          />
          <button type="submit">Update</button>
        </form>
      </section>
    </>
  );
};
