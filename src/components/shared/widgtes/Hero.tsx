import Image from "next/image";
import React from "react";
import Wrapper from "../Wrapper";


const Hero = () => {
  return (
    <section className='bg-gradient-to-t from-slate-400 to-rose-600 shadow-10 pt-24  '>
      <Wrapper>
        <div className="flex  items-center justify-center py-10  flex-col sm:flex-row md:flex-row lg:flex-row " >
        
          <div className=" flex-1 text-start lg:text-center">
            <h1 className="text-6xl font-serif font-bold mb-5  ">hello world</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum, accusamus quidem blanditiis repudiandae natus tenetur esse odio, provident quibusdam non ut magni consequatur culpa. Atque obcaecati deserunt dolorem eaque?</p></div>
          <div className="flex-1 mt-10  sm:mt-0 md:mt-0 lg:mt-0 sm:ml-28  md:ml-24 lg:ml-42 "><Image className="rounded-lg" src={"/pics43.jpg"} alt='computor' width={390} height={150}/></div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
