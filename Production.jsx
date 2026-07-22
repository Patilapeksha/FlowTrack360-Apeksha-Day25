import React from "react";
import "./Production.css";

function Production() {
  const employees = [
    {
      id: 1,
      name: "Apeksha",
      department: "Developer",
    },
    {
      id: 2,
      name: "Rahul",
      department: "Testing",
    },
    {
      id: 3,
      name: "Sneha",
      department: "HR",
    },
  ];

  return (
    <div className="container">
      <h1>Employee Management</h1>

      <div className="employee-list">
        {employees.map((employee) => (
          <div className="card" key={employee.id}>
            <h2>{employee.name}</h2>
            <p>Department: {employee.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Production;