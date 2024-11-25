import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./UserSearch.css";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
}, []);

  useEffect(() => {
    // Filter users based on the search term
    setFilteredUsers(
      users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        user.phone.includes(searchTerm)||
        user.company.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    );
  }, [searchTerm, users]);

  return (
    <div className="search-container">
      <h1>Rechercher un utilisateur</h1>
       <input
       type="text"
       placeholder="Rechercher un utilisateur..."
       value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
       />  
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Entreprise</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserSearch;
