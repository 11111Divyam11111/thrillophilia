import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";
import img5 from "../assests/img5.jpg";
import img6 from "../assests/img6.jpg";

export default function HomeImage() {
   
    return (
        <Carousel showIndicators={false} showThumbs={false} interval={8000} transitionTime={1000} autoPlay={true} infiniteLoop={true} className='car' >
            <div >
                <img src='https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="1" className='img'/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={img2} alt="2" className='img'/>
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src={img3} alt="3" className='img'/>
                {/* <p className="legend">Legend 3</p> */}
            </div>
            <div>
                <img src={img4} alt="4" className='img'/>
                {/* <p className="legend">Legend 3</p> */}
            </div><div>
                <img src={img5} alt="5" className='img'/>
                {/* <p className="legend">Legend 3</p> */}
            </div><div>
                <img src={img6} alt="6" className='img'/>
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );
}
