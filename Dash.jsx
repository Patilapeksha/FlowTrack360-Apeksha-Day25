import React from "react";

function Dash() {
  const totalEmployees = 25;
  const presentEmployees = 20;
  const absentEmployees = 5;
  const departments = 4;

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
          <h3>Departments</h3>
          <p>{departments}</p>
        </div>
      </div>

      <h2>Recent Activities</h2>

      <div className="activity">
        <div className="card">
          <h3>Apeksha</h3>
          <p>Checked in at 9:00 AM</p>
        </div>

        <div className="card">
          <h3>Rahul</h3>
          <p>Applied for leave</p>
        </div>

        <div className="card">
          <h3>Sneha</h3>
          <p>Marked attendance</p>
        </div>

        <div className="card">
          <h3>Arjun</h3>
          <p>Updated profile</p>
        </div>
      </div>
    </div>
  );
}

export default Dash;