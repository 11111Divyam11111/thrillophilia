import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeContent() {
  useEffect(()=>{
    AOS.init({
      duration:1500
    })
  },[])
  return (
    <div  data-aos="slide-up" className="home-mid flex justify-center w-full md:w-full">
      <div className="text-white text-center w-full flex flex-col gap-y-2 justify-center">
        <h2 className="text-2xl">
          Its your Life make it <span className="text-orange-400">Large</span>
        </h2>
        <h1 className="text-5xl font-bold">
          <span className="text-orange-400">Explore World</span> with us
        </h1>
        <div className="line bg-orange-400 h-0.5 justify-self-center" />
        <div className="flex gap-10 justify-center"> {/* Adjusted here */}
          <button className="btn glass bg-orange-400 text-white">Discover</button>
          <button className="btn btn-outline btn-accent">Connect</button>
        </div>
      </div>
    </div>
  );
}
