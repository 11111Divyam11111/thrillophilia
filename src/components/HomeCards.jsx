import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeCards() {
  useEffect(()=>{
    AOS.init({
      duration:1500
    })
  },[])
  return (
    <>
      <div className="flex justify-center mb-20" data-aos="zoom-in">
        <div className="flex flex-col justify-center text-left w-4/5">
          <div className="border-b-2 w-56 border-orange-400">
            <h1 className="text-2xl">Explore the Offers</h1>
          </div>
          <div className="carousel carousel-end rounded-box mt-10 gap-y-10 flex-col md:flex-row ">
            <div className="carousel-item md:w-1/3 cursor-pointer relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1690749740487-01bbb8e51e71?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Drink"
                className="opacity-40"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-0 p-3 w-full text-center">
                <div className="flex justify-between text-white">
                  <p className="text-md">6D 7N</p>
                  <p>✨5(1.1k)</p>
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-lg ">Beach Party With boating</p>
                  <p>New York 🎀</p>
                </div>
                <div className="line3"></div>
                <div className="flex align-middle">
                  <div className="flex w-1/2 align-middle">
                    <p className="flex items-center  text-orange-400">
                      Price : ₹45,000
                    </p>
                  </div>
                  <div className="flex w-1/2 align-middle">
                    <button className="btn btn-info w-full text-white">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item md:w-1/3 cursor-pointer relative ">
              <img
                src="https://images.unsplash.com/photo-1625882980548-95107c94163f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Drink"
                loading="lazy"
                className="opacity-40"
              />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-0 p-3 w-full text-center">
                <div className="flex justify-between text-white">
                  <p className="text-md">6D 7N</p>
                  <p>✨5(1.1k)</p>
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-lg ">Beach Party With boating</p>
                  <p>New York 🎀</p>
                </div>
                <div className="line3"></div>
                <div className="flex align-middle">
                  <div className="flex w-1/2 align-middle">
                    <p className="flex items-center  text-orange-400">
                      Price : ₹45,000
                    </p>
                  </div>
                  <div className="flex w-1/2 align-middle">
                    <button className="btn btn-info w-full text-white">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item md:w-1/3 cursor-pointer relative">
              <img
                src="https://images.unsplash.com/photo-1516739711484-6f80025660c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Drink"
                loading="lazy"
                className="opacity-40"
              />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-0 p-3 w-full text-center">
                <div className="flex justify-between text-white">
                  <p className="text-md">6D 7N</p>
                  <p>✨5(1.1k)</p>
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-lg ">Beach Party With boating</p>
                  <p>New York 🎀</p>
                </div>
                <div className="line3"></div>
                <div className="flex align-middle">
                  <div className="flex w-1/2 align-middle">
                    <p className="flex items-center  text-orange-400">
                      Price : ₹45,000
                    </p>
                  </div>
                  <div className="flex w-1/2 align-middle">
                    <button className="btn btn-info w-full text-white">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item md:w-1/3 cursor-pointer relative ">
              <img
                src="https://images.unsplash.com/photo-1625882980548-95107c94163f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Drink"
                loading="lazy"
                className="opacity-40"
              />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-0 p-3 w-full text-center">
                <div className="flex justify-between text-white">
                  <p className="text-md">6D 7N</p>
                  <p>✨5(1.1k)</p>
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-lg ">Beach Party With boating</p>
                  <p>New York 🎀</p>
                </div>
                <div className="line3"></div>
                <div className="flex align-middle">
                  <div className="flex w-1/2 align-middle">
                    <p className="flex items-center  text-orange-400">
                      Price : ₹45,000
                    </p>
                  </div>
                  <div className="flex w-1/2 align-middle">
                    <button className="btn btn-info w-full text-white">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item md:w-1/3 cursor-pointer relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1690749740487-01bbb8e51e71?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Drink"
                className="opacity-40"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-0 p-3 w-full text-center">
                <div className="flex justify-between text-white">
                  <p className="text-md">6D 7N</p>
                  <p>✨5(1.1k)</p>
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-lg ">Beach Party With boating</p>
                  <p>New York 🎀</p>
                </div>
                <div className="line3"></div>
                <div className="flex align-middle">
                  <div className="flex w-1/2 align-middle">
                    <p className="flex items-center  text-orange-400">
                      Price : ₹45,000
                    </p>
                  </div>
                  <div className="flex w-1/2 align-middle">
                    <button className="btn btn-info w-full text-white">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item md:w-1/3 cursor-pointer relative">
              <img
                src="https://images.unsplash.com/photo-1516739711484-6f80025660c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Drink"
                loading="lazy"
                className="opacity-40"
              />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-0 p-3 w-full text-center">
                <div className="flex justify-between text-white">
                  <p className="text-md">6D 7N</p>
                  <p>✨5(1.1k)</p>
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-lg ">Beach Party With boating</p>
                  <p>New York 🎀</p>
                </div>
                <div className="line3"></div>
                <div className="flex align-middle">
                  <div className="flex w-1/2 align-middle">
                    <p className="flex items-center  text-orange-400">
                      Price : ₹45,000
                    </p>
                  </div>
                  <div className="flex w-1/2 align-middle">
                    <button className="btn btn-info w-full text-white">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line2"></div>
    </>
  );
}
