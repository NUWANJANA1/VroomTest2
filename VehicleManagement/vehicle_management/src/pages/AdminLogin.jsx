import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Normally, you would call your backend API here to validate the credentials
    // For now, let's assume we have hardcoded credentials
    if (username === "admin" && password === "password123") {
      // If login is successful, navigate to the vehicles page
      navigate("/admin");
    } else {
      // Display error message (if needed)
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    
    <div className="form-container col-md-3 offset-md-3 border rounded p-4 mt-10 shadow ">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
