import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Donnees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setEmployees(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.email} - {emp.company.name} - {emp.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Donnees;
