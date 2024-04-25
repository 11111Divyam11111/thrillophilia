import React, { useEffect } from "react";
import owl from "../assests/icons/owl.svg";
import star from "../assests/icons/star4.png";
import star6 from "../assests/icons/star6.png";
import google from "../assests/icons/google.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/rating.css"

export default function Rating() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    })
  },[])
  return (
    <div className="flex justify-center mb-10" data-aos="flip-down" >
      <div className="card md:max-w-fit w-full flex justify-between flex-col md:flex-row max-h-fit">
        <div className="card-body flex flex-row text-white gap-4 " >
          <img src={owl} alt="owl" width={50} height={50} style={{color:'orange'}}/>
          <div className="flex flex-col">
            <h4>4.5/5</h4>
            <p>Trip Advisor</p>
          </div>
        </div>
        <div className="card-body flex flex-row  text-white"  >
          <img className="card-title" src={star} alt="star" width={50}/>
          <div className="flex flex-col">
            <h4>4.7/5</h4>
            <p>Trust Pilot</p>
          </div>
        </div>
        <div className="card-body flex flex-row  text-white"  >
          <img className="card-title" src={google} alt="owl" width={50} height={50}/>
          <div className="flex flex-col">
            <h4>4.5/5</h4>
            <p>Google</p>
          </div>
        </div>
        <div className="card-body flex flex-row  text-white" >
          <img className="card-title" src={star6} alt="owl" width={50}/>
          <div className="flex flex-col">
            <h4>4.5/5</h4>
            <p>Reviews.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}

