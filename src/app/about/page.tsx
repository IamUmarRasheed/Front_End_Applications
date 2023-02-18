"use client ";
import Home from "@/views/Home";
import Cards from "@/views/homepage/Cards";
import TOP from "@/views/homepage/TOP";

import React from "react";
import Instructor from "@/views/Instructor";

export default function page() {
  return (
    <>
    <Home src='./metver34.png'   alt='metvers image' title="Hello Meta"/>
      <TOP />
      <Cards />
      <Instructor/>
      
    </>
  );
}
