import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    stu_name: "",
    stu_reg: "",
    stu_dept: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/student/${id}`).then((res) => {
      setStudent(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const updateStudent = async (e) => {
    e.preventDefault();
      await axios.put(`http://localhost:8080/student/${id}`, student,
        {
    headers: {
      "Content-Type": "application/json"
    }
  }
    );
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Student</h2>
      <form onSubmit={updateStudent}>
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
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;