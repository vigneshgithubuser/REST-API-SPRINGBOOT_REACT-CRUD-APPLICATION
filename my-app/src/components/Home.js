import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/student");
    setStudents(result.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    loadStudents(); 
  };

  return (
    <center>
    <div className="container">
      <h2 className="text-center">Student List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Student</Link>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th className="text-center">Student ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Reg No</th>
            <th className="text-center">Department</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.id} className="text-align:center;">
              <td className="text-center">{stu.id}</td>
              <td className="text-center">{stu.stu_name}</td>
              <td className="text-center">{stu.stu_reg}</td>
              <td className="text-center">{stu.stu_dept}</td>
              <td className="text-center">
                <Link to={`/view/${stu.id}`} className="btn btn-info btn-sm me-2 ">
                  View
                </Link>
                <Link to={`/edit/${stu.id}`} className="btn btn-warning btn-sm me-2 ">
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm "
                  onClick={() => deleteStudent(stu.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      </center>
  );
}

export default Home;

