"use client";
import React, { useState } from "react";

const About = ({ data }:any) => {
    
  console.log(data);
  const [activeTab, setActiveTab] = useState("soft");

  const setBg = (active: any) =>
    activeTab === active ? "bg-teal-600" : "bg-transparent";
    console.log(setBg)
  const setTabsAlignment = (tab:any) =>
    tab === "soft" ? "text-left" : "text-right ";

  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAlignment(
            el
          )} uppercase px-6 text-black  `}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex famly flex-col  content-start list-none py-4 gap-2 text-lg  ${
        activeTab === "soft" ? "items-start" : "items-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }:any , index:any) => (
        <li key={index} className=" famly">
        
          <span> {icon}</span> {text}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default About;
