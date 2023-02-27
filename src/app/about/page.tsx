"use client ";
import Home from "@/components/Home";
import Cards from "@/views/About/Cards";
import TOP from "@/views/About/TOP";

import React from "react";
import Instructor from "@/components/Instructor";

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
