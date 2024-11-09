import React from "react";
import Hero from "./Hero/Hero";
import Build from "./Build/Build";
import A2d from "./A2d/A2d";
import UserReview from "./UserReview/UserReview";
import About from "./About/About";
import Footer from "./Footer/Footer";
// import { Form } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Hero />
      <Build />
      <A2d />
      <UserReview />
      <About />
      <Footer />
      {/* <Form /> */}
    </>
  );
};

export default Index;
