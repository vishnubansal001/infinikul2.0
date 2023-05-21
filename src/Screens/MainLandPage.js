import React from "react";
import LandingPage from "../Components/LandingPage";
import CoursesSection from "../Components/CoursesSection";
import Footer from "../Components/Footer";
import Creator from "../Components/Creator";

export const MainLandPage = () => {
  return (
    <div>
      <LandingPage />
      <CoursesSection />
      <Creator />
      <Footer />
    </div>
  );
};
