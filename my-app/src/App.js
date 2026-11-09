import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import Home from "./components/Home";
import React from "react";
import ViewStudent from "./components/ViewStudent";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/view/:id" element={<ViewStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;