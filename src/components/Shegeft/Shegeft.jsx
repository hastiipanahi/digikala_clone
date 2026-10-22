import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import{setShegeft} from "../Redux/Shegeft/Action"
import Image from "../../images/svg/percent.svg"
import Image1 from "../../images/svg/shgeft2.svg"

const Shegeft = () => {
  const dispatch=useDispatch()
  const{shegeft}=useSelector((state)=>state.shegeft)
  const fetchShegeft=async()=>{
    try {
      const data = await fetch("http://localhost:3000/shegeft");
      const res=await data.json()
      dispatch(setShegeft(res))

    } catch (error) {
      console.log(error.message);
      
    }
  }
  useEffect(()=>{
    fetchShegeft()
  },[])
  return (
    <div className="w-full h-120 pt-8 flex md:block hidden relative left-20">
      <div className="w-64 h-112 p-20 bg-red-500 mr-32 rounded-tr-lg rounded-br-lg">
        <img className="w-10 mr-8" src={Image} alt="" />
        <img className="w-80 mt-6" src={Image1} alt="" />
        <div className="flex gap-1 mt-6">
          <span className="w-8 h-8 flex justify-center items-center bg-white rounded-[8px]">
            12
          </span>
          <span className="text-white">:</span>
          <span className="w-8 h-8 flex justify-center items-center bg-white rounded-[8px]">
            09
          </span>
          <span className="text-white">:</span>
          <span className="w-8 h-8 flex justify-center items-center bg-white rounded-[8px]">
            19
          </span>
        </div>
        <a
          href=""
          className="flex gap-2 mt-6 justify-center items-center w-36 h-14 rounded-[8px] bg-white ml-8"
        >
          <h5 className="text-zinc-600">مشاهده همه</h5>
          <i className="fa fa-arrow-left text-zinc-600"></i>
        </a>
      </div>
      <div className="w-[80%] h-full bg-red-500  ml-20 relative bottom-112 right-96">
        <div className="nn">
          <Swiper
            slidesPerView={6}
            spaceBetween={3}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {shegeft.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <a href="">
                    <div className="bg-white p-5 mt-5 ">
                      <img
                        className="w-[30px] h-[30px]"
                        src={item.img}
                        alt=""
                      />
                      <h5 className="line-clamp-2">{item.text}</h5>
                      <div className="flex gap-1">
                        <div className="w-10 h-10 rounded-2xl flex justify-center items-center mt-3 mr-16 bg-red-500 text-white">
                          {item.text1}
                        </div>
                        <h5 className="mt-5">{item.text2}</h5>
                      </div>
                      <div className="mr-20 mt-3">
                        <h5>{item.text3}</h5>
                        
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Shegeft;
