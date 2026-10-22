import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { setSlider } from "../Redux/Slider/Action";
const Slider = () => {
    const dispatch=useDispatch()
    const{slider}=useSelector((state)=>state.slider)
    const fetchSlider=async()=>{
        try {
            const data = await fetch("http://localhost:3000/slider");
            const res=await data.json()
            dispatch(setSlider(res))
        } catch (error) {
            console.log(error.messae);
            
        }
    }
    useEffect(()=>{
        fetchSlider()
    },[])
    return (
      <div className="ss md:h-auto h-72 md:mt-0  bg-zinc-200 md:p-0 p-3 ">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slider.map((item)=>{
            return <SwiperSlide key={item.id} className="mt-2 ">
                <img src={item.img} alt="" />

            </SwiperSlide>;
          })}
          
        </Swiper>
      </div>
    );
}
 
export default Slider;