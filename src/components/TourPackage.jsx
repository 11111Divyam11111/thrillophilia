import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TourPackage() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    })
  },[])
  return (
    <>
    <div className="flex justify-center rounded-sm text-white " data-aos="flip-down">
      <div className="card md:max-w-fit flex flex-col justify-between w-4/5 mt-10 p-5  bg-orange-400">
        <h1 className="text-xl font-semibold text-center">
          Our Tour Packages | Upto 50% Off April Mega SALE
        </h1>
        <div className="flex flex-col md:flex-row gap-5 p-2 mt-5 ">
          <button className="btn btn-outline  text-white">Domestic Tours</button>
          <button className="btn btn-outline  text-white">International Tours</button>
          <button className="btn btn-outline  text-white">Educational Tours</button>
          <button className="btn btn-outline  text-white">Religious Tours</button>
          <button className="btn btn-outline  text-white">Destination Wedding</button>
          <button className="btn btn-outline  text-white">Support</button>
        </div>
      </div>
    </div>
    <div className="line2"></div>
    </>
  );
}
