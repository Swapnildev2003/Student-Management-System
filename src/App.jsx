import { useState } from "react";
import "./App.css";
import TeacherSideBar from "./pages/teacher/SideBar";
import StudentSideBar from "./pages/student/SideBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/LoginSignup"

function App() {
  return (
    <>
      <div>
        <TeacherSideBar />
        <BrowserRouter>
        <Routes>
        <Route path="/dashboard" element={<StudentSideBar />} />
        <Route path="/" element={<Login />} />
        
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
