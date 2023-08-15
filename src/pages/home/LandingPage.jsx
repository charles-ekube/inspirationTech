import React, { useState } from "react";
import Navigation from "../../widgets/Navigation";
import Hero from "../../components/home/Hero";
import Stacks from "../../components/home/Stacks";
import CourseInfoModal from "../../components/home/CourseInfoModal";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Navigation />
      <Hero />
      <Stacks open />
      <button onClick={openModal}>Open Modal</button>
    </>
  );
};

export default LandingPage;
