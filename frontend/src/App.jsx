import { useState } from "react";
import "./App.css";
import TeacherPanel from "./pages/teacher/SideBar";
import StudentPanel from "./pages/student/SideBar";
import AdminPanel from "./pages/Admin/AdminPanel";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/LoginSignup"

function App() {
  return (
    <>
      <div>
        <TeacherPanel />
        <BrowserRouter>
        <Routes>
        <Route path="/dashboard" element={<StudentPanel />} />
        <Route path="/" element={<AdminPanel />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
