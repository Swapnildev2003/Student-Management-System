import { useState } from "react";
import "./App.css";
import TeacherPanel from "./pages/teacher/SideBar";
import StudentPanel from "./pages/student/SideBar";
import AdminPanel from "./pages/Admin/AdminPanel";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/LoginSignup"
import Teachers from "./pages/Admin/pages/Teachers"

function App() {
  return (
    <>
      <div>
        {/* <TeacherPanel /> */}
        {/* <AdminPanel /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AdminPanel />} />
            <Route path="/dashboard" element={<StudentPanel />} />
            <Route path="/teachers" element={<Teachers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
