import { useDispatch, useSelector } from "react-redux";
import { setShegeftmobile } from "../Redux/Shegeftmobile/Action";
import { useEffect } from "react";
import Image from "../../images/svg/percent.svg"
import Image1 from "../../images/svg/shgeft2.svg"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Shegeftmobile = () => {
    const dispatch=useDispatch()
    const{shegeftmobile}=useSelector((state)=>state.shegeftmobile)
    const fetchShegeftmobile=async()=>{
        try {
            const data = await fetch("http://localhost:3000/shegeftmobile");
            const res=await data.json()
            dispatch(setShegeftmobile(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchShegeftmobile()
    },[])
    return (
      <div className="w-full h-96 bg-red-700 gap-8 md:hidden block">
        <div className="flex gap-2 pt-3 justify-center ">
          <img className="w-10" src={Image} alt="" />
          <img className="w-20" src={Image1} alt="" />
          <div className="flex gap-1.5">
            <div className="w-7 h-7 bg-white flex justify-center items-center rounded-[7px]">
              03
            </div>
            <span className="text-white">:</span>
            <div className="w-7 h-7 bg-white flex justify-center items-center rounded-[7px]">
              20
            </div>
            <span className="text-white">:</span>
            <div className="w-7 h-7 bg-white flex justify-center items-center rounded-[7px]">
              06
            </div>
          </div>
          <div className="flex gap-1 text-white mr-10">
            <h6>همه</h6>
            <i className="fa fa-chevron-left mt-1"></i>
          </div>
        </div>
        <div className="mo">
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={3}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {shegeftmobile.map((item)=>{
                return <SwiperSlide className="bg-white mt-9" key={item.id}>
                    <div className="">
                        <img src={item.img} alt="" />
                        <h6 className="mt-2 line-clamp-2">{item.text}</h6>
                        <div className="flex gap-2 pt-2">
                            <h6 className="w-10 h-7 rounded-[10px] text-white bg-red-600">{item.text1}</h6>
                            <h6>{item.text2}</h6>
                        </div>
                        <h6>{item.text3}</h6>
                    </div>

                </SwiperSlide>;
              })}
              
            </Swiper>
          </>
        </div>
      </div>
    );
}
 
export default Shegeftmobile;