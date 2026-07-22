import React, { useState } from "react";
import "./Attendance.css";

function Attendance() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Apeksha",
      status: "Present",
    },
    {
      id: 2,
      name: "Rahul",
      status: "Absent",
    },
    {
      id: 3,
      name: "Sneha",
      status: "Present",
    },
  ]);

  const [search, setSearch] = useState("");

  const changeAttendance = (id) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id
        ? {
            ...employee,
            status:
              employee.status === "Present"
                ? "Absent"
                : "Present",
          }
        : employee
    );

    setEmployees(updatedEmployees);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const presentCount = employees.filter(
    (employee) => employee.status === "Present"
  ).length;

  const absentCount = employees.filter(
    (employee) => employee.status === "Absent"
  ).length;

  return (
    <div className="container">
      <h1>Attendance Module</h1>

      <div className="dashboard">
        <div className="box">
          <h3>Total Employees</h3>
          <p>{employees.length}</p>
        </div>

        <div className="box">
          <h3>Present Today</h3>
          <p>{presentCount}</p>
        </div>

        <div className="box">
          <h3>Absent Today</h3>
          <p>{absentCount}</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="employee-list">
        {filteredEmployees.map((employee) => (
          <div className="card" key={employee.id}>
            <h2>{employee.name}</h2>

            <p>Status: {employee.status}</p>

            <button
              onClick={() =>
                changeAttendance(employee.id)
              }
            >
              Mark Attendance
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;