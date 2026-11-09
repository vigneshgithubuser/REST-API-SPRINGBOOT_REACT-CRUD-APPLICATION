import "../index.css";

import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";

function ViewStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/student/${id}`).then((res) => {
      setStudent(res.data);
    });
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Student Details</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>ID:</strong> {student.id}</li>
        <li className="list-group-item"><strong>Name:</strong> {student.stu_name}</li>
        <li className="list-group-item"><strong>Reg No:</strong> {student.stu_reg}</li>
        <li className="list-group-item"><strong>Department:</strong> {student.stu_dept}</li>
      </ul>
      <Link to="/" className="btn btn-secondary mt-3">Back</Link>
    </div>
  );
}

export default ViewStudent;