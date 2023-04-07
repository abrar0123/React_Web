import React from "react";
import Header from "../../components/header/header";
import Headersection from "../../components/headersection/headersection";
import Footer from "../../components/footer/footer";
import CourseSection from "../../components/courseSection/courseSection";
export default function mainpage() {
  return (
    <>
      <Header />
      <Headersection />
      <CourseSection />
      <Footer/>
    </>
  );
}
