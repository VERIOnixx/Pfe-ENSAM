import React, { useState } from "react";
import axios from "axios";
import "./AddUser.css";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users", user);
      setMessage(`User ${response.data.name} added successfully!`);
      setUser({ name: "", email: "", phone: "", company: "" });
    } catch (error) {
      console.error("Error adding user:", error);
      setMessage("Error adding user.");
    }
  };

  return (
    <div className="add-user-container">
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Company:
          <input
            name="company"
            type="text"
            value={user.company}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add User</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddUser;
