import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );

        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data", err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="LoadingContainer">
        <h2 className="center">Loading data Plese Wait...</h2>
      </div>
    );
  }

  if (error) {
    return <h2 className="center">{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Public API Data Viewer</h1>

      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>

            <p>Email: {user.email}</p>

            <p>City: {user.address.city}</p>

            <p>Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
