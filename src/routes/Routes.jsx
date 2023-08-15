import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/home/LandingPage";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import CourseDetails from "../pages/courses/CourseDetails";
import ApplyForm from "../pages/contact/ApplyForm";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="courseDetails" element={<CourseDetails />} />
      <Route path="apply" element={<ApplyForm />} />
    </Routes>
  );
};

export default RoutesContainer;
