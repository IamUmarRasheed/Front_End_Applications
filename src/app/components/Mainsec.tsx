import React from "react";

import Wrapper from "./Wrapper";
import About from "./About";
import { skills, perdata ,aboutMe  } from "../utils/data";
import { myhoby  } from "../utils/data";
export default function Mainsec({skills}:any) {
  const { edu, sec ,des} = perdata;
  const{title,body}=aboutMe
  const { title2,hoby}=myhoby
  return (
    <section className="bg-black pt-5">
      <Wrapper>
        <div className="flex flex-col   lg:flex-row gap-8 ">
          <div className="flex-1  rounded-lg h-max  px-10 bg-gradient-to-l from-slate-700 via-gray-500 to-slate-400">
            <div className="famly  mt-14  font-body">
              <h2 className="text-2xl font-bold  ">{title}</h2>
              <p className=" leading-6 text-lg  mt-5">{body[0]}</p>
              <p className=" pt-4 text-lg leading-6  ">{body[1]}</p>
            </div>
            <div className="font-body">
              <h2 className="text-2xl font-bold  pt-10   ">{sec}</h2>

              {edu.map((wal, i) => (
                <div key={wal.id} className=" famly  my-6 font-body ">
                  <h4 className=" text-xl font-semibold mb-2  ">{wal.high}</h4>
                  <p className="text-lg ">{wal.deg} </p>
                  <p className="text-lg">{wal.cgpa}</p>
                  <p className="text-lg">{wal.year}</p>
                  <br />
                  <h4 className="text-2xl font-bold mb-2 ">{wal.project}</h4>
                  <p className="text-xl font-semibold mb-2">{wal.title}</p>
                  <p className="text-lg">{des.hi}</p>
                  <p className="text-lg">{des.hi2}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex-1  h-max  bg-gradient-to-l from-slate-700 via-gray-500 to-slate-400  px-10 font-body rounded-lg p-10  ">
            <div className="pt-5 ">
              <About data={skills} />
            </div>
            <div className="pt-5  ">
              <h4 className="text-2xl font-bold text-black">{title2}</h4>
              <ul>
                {hoby.map((h, i) => (
                  <li key={i} className="text-lg">
                    {" "}
                    {h.dec}
                  </li>
                ))}
              </ul>
              <p className="text-lg"></p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
