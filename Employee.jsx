import React,  { useState} from "react";
import "./Employee.css";

const employeeNames = [
    "Priya",
    "Rahul",
    "Ram",

];

function Employee() {
const [employees, setEmployees] = useState([
    {
       id: 1,
       name: "Apeksha ",
       department: "Developer",
       attendance : "Absent",
    },
     {
       id: 2,
       name: "Shweta ",
       department: "Testing",
       attendance : "Present",
    },
]);

const [search, setSearch] = useState("");
const addEmployee = () => {
    const newEmployee = {
        id : employees.length+1,
        name : employeeNames[employees.length % employeeNames.length],
        department : "Developer",
        attendance : "Present",
    };
    setEmployees([...employees, newEmployee]);
};
const editEmployee = (id) => {
    const updatedEmployees = employees.map((employee) =>
        employee.id === id
    ? {
        ...employee,
        department: "Testing",
    }
    :employee
    );

setEmployees(updatedEmployees);
};
const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(
     (employee) =>     employee.id !== id  
    );
    setEmployees(updatedEmployees);
};
const filteredEmployees = employees.filter((employee) => 
    employee.name.toLowerCase().includes(search.toLowerCase())
);
const presentEmployees = employees.filter( (employee) => employee.attendance === "Present").length;

const absentEmployees = employees.filter( (employee) => employee.attendance === "Absent").length;
return(
    <div className="container">
        <h1> Employee Management </h1>
        <div className="Dashboard">
            <div className="box">
                <h3> Total Employees</h3>
                <p> {employees.length}</p>
            </div>

            <div className="box">
                <h3>Present </h3>
                <p>{presentEmployees}</p>
            </div>

             <div className="box">
                <h3>Absent </h3>
                <p>{absentEmployees}</p>
            </div>
        </div>

        <input
        type="text"
        placeholder="Search employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={addEmployee} > Add Employee</button>

        <div className="employee-list">
        {filteredEmployees.map((employee) => (
            <div key={employee.id}
        className="card">
            <h2>{employee.name}</h2>
            <p>Department: {employee.department} </p>
            <p>Attendance : {employee.attendance}</p>

            <button onClick={() => deleteEmployee(employee.id)} >
                Delete
            </button>
            </div>

        ))}
    </div>

    </div>
);
}

export default Employee;