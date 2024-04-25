import React, { useEffect } from "react";
import love from "../assests/icons/love.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChoose() {
  useEffect(()=>{
    AOS.init({
      duration:2500
    })
  },[])
  return (
    <>
      <div className="flex justify-center" data-aos="fade-up">
        <div className="flex w-4/5 justify-around flex-col">
        <h1 className="text-3xl text-center">Why Choose Us?</h1>
          <div className="flex flex-col md:flex-row mt-10 gap-y-16">
            <div className="flex flex-col items-center">
              {" "}
              {/* Added items-center */}
              <img
                src="https://img.icons8.com/ios-filled/500/FAB005/novel--v1.png"
                width={100}
                height={100}
                alt="heart"
              />
              <div className="flex gap-1 flex-col text-center md:w-1/2 mt-3">
                <h3 className="font-semibold text-lg">10 Million+</h3>
                <p className="text-xs text-center">
                  Happy customers from 65+ countries all around.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              {" "}
              {/* Added items-center */}
              <img
                src="https://img.icons8.com/ios-filled/500/FAB005/features-list.png"
                width={100}
                height={100}
                alt="heart"
              />
              <div className="flex gap-1 flex-col text-center md:w-1/2 mt-3">
                <h3 className="font-semibold text-lg">4.6 / 5.0</h3>
                <p className="text-xs text-center">
                  Cumulative ratings of our trips across platforms.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              {" "}
              {/* Added items-center */}
              <img src={love} width={100} height={100} alt="heart" />
              <div className="flex gap-1 flex-col text-center md:w-1/2 mt-3">
                <h3 className="font-semibold text-lg">Curated with love</h3>
                <p className="text-xs text-center">
                  Expert-guided trips with meticulous planning.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              {" "}
              {/* Added items-center */}
              <img
                src="https://img.icons8.com/ios-filled/500/FAB005/hotline.png"
                width={100}
                height={100}
                alt="heart"
              />
              <div className="flex gap-1 flex-col text-center md:w-1/2 mt-3">
                <h3 className="font-semibold text-lg">24*7 Support</h3>
                <p className="text-xs text-center">
                  We are always there to help you pre, post and on the trip.
                </p>
              </div>
            </div>
            {/* Repeat the same structure for other items */}
          </div>
        </div>
      </div>
      <div className="line2"></div>
    </>
  );
}
