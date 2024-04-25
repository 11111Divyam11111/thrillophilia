import React, { useEffect } from "react";
import fb from "../assests/footer/fb.png";
import insta from "../assests/footer/insta.png";
import x from "../assests/footer/x.png";
import linkedin from "../assests/footer/linkedin.png";
import yt from "../assests/footer/yt.png";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Footer() {
    useEffect(()=>{
        AOS.init({
          duration:2500
        })
    },[])
  return (
    <div className="flex justify-center" data-aos="slide-up">
      <div className="flex flex-col items-center gap-10">
        <div>
          <h1 className="text-3xl">Thrillophilia</h1>
        </div>
        <div className="flex md:gap-10 gap-0 justify-center">
          <img src={fb} alt="fb" width={50} height={50} />
          <img src={insta} alt="insta" width={50} height={50} />
          <img src={x} alt="x" width={50} height={50} />
          <img src={linkedin} alt="linkedin" width={50} height={50} />
          <img src={yt} alt="yt" width={50} height={50} />
        </div>
        <div>
            <p className="font-semibold">© 2024 Thrillophilia.com All rights reserved.</p>
        </div>
        <div className="w-3/5 text-center">
            <p className="text-xs">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
        </div>
      </div>
    </div>
  );
}
