import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [student, setStudent] = useState({
    stu_name: "",
    stu_reg: "",
    stu_dept: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/student", student);
    navigate("/"); 
  };

  return (
    <div className="container mt-4">
      <h2>Add Student</h2>
      <form onSubmit={saveStudent}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="stu_name"
            className="form-control"
            value={student.stu_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Reg No</label>
          <input
            type="text"
            name="stu_reg"
            className="form-control"
            value={student.stu_reg}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Department</label>
          <select
            name="stu_dept"
            className="form-control"
            value={student.stu_dept}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="MECHANICAL">MECHANICAL</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="BIOMEDICAL">BIOMEDICAL</option>
          </select>
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}

export default AddStudent;