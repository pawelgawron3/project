import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Both fields are required!");
      return;
    }
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="App">
      <h1 className="login">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <div>
          <input type="submit" value="Log In" />
        </div>
      </form>
    </div>
  );
}
