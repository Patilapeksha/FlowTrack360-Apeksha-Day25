import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [employees] = useState([
    { id: 1, name: "Apeksha", status: "Present" },
    { id: 2, name: "Rahul", status: "Absent" },
    { id: 3, name: "Sneha", status: "Present" },
    { id: 4, name: "Arjun", status: "Present" }
  ]);

  const totalEmployees = employees.length;

  const presentEmployees = employees.filter(
    (employee) => employee.status === "Present"
  ).length;

  const absentEmployees = employees.filter(
    (employee) => employee.status === "Absent"
  ).length;

  const attendanceRate = Math.round(
    (presentEmployees / totalEmployees) * 100
  );

  return (
    <div className="container">
      <h1>Employee Dashboard</h1>

      <div className="dashboard">
        <div className="box">
          <h3>Total Employees</h3>
          <p>{totalEmployees}</p>
        </div>

        <div className="box">
          <h3>Present Today</h3>
          <p>{presentEmployees}</p>
        </div>

        <div className="box">
          <h3>Absent Today</h3>
          <p>{absentEmployees}</p>
        </div>

        <div className="box">
          <h3>Attendance Rate</h3>
          <p>{attendanceRate}%</p>
        </div>
      </div>

      <h2>Recent Activity</h2>

      <div className="activity">
        {employees.map((employee) => (
          <div key={employee.id} className="card">
            <h3>{employee.name}</h3>
            <p>{employee.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;