import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./Components/UserCard";
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
        setError("Something went wrong while fetching data.", err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="dashboard">
      <h1>API Dashboard</h1>

      {loading && <p className="message">Loading data...</p>}

      {error && <p className="message error">{error}</p>}

      <div className="card-container">
        {!loading &&
          !error &&
          users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}

export default App;
