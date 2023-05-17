// import Cards from '@/components/Cards/Cards'
import Slider from '@/components/imagesSlider/Slider'
import Hero from '@/components/shared/widgtes/Hero'


import React from 'react'

export default function page() {
  return (
    <>
      {/* <Hero/>
    <Cards/> */}
      {/* <Slider/> */}

      <div className="flex-col sm:flex-row md:flex lg:flex ">
        <div className="quote">
          <p>
            “The success combination in business is: Do what you do better...
            and: do more of what you do.”
          </p>
          <span>- David J. Schwartz</span>
        </div>
        <div className="quote">
          <p className="changecolor">
            “Give out what you most want to come back.”
          </p>
          <span>- Robin Sharma</span>
        </div>
        <div className="quote">
          <p>
            “You don't have to be great at something to start, but you have to
            start to be great at something.”
          </p>
          <span>- Zig Ziglar</span>
        </div>
      </div>
   
    </>
  );
}
