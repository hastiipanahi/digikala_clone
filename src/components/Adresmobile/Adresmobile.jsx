import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { setAdresmobile } from "../Redux/Adresmobile/Action";
import { useEffect } from "react";
import Image from "../../images/svg/airplane.svg";

const Adresmobile = () => {
  const dispatch = useDispatch();
  const { adresmobile } = useSelector((state) => state.adresmobile);
  const fetchAdresmobile = async () => {
    try {
      const data = await fetch("http://localhost:3000/adresmobile");
      const res = await data.json();
      dispatch(setAdresmobile(res));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchAdresmobile();
  }, []);
  return (
    <div className="w-full bg-amber-50 mt-6 md:hidden block">
      <div className="flex gap-1.5 pr-5">
        <img src={Image} alt="" />
        <h6 className="text-[20px] font-bold ">ارسال 3 ساعته فروشنده</h6>
      </div>
      <div className="bg-amber-100 w-[90%] mr-6 rounded-[9px]">
        <h6 className="pr-10 font-extrabold mt-5">برای بررسی امکان ارسال، آدرس را انتخاب کنید.</h6>
        <div className="flex gap-1.5 pt-4 pr-60 text-amber-800">
          <h6 className="">انتخاب آدرس</h6>
          <i className="fa fa-chevron-left mt-2"></i>
        </div>
      </div>
      <div className="ad">
        <Swiper
          slidesPerView={2}
          spaceBetween={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {adresmobile.map((item)=>{
            return (
              <SwiperSlide className="relative bottom-16">
                <img src={item.img} alt="" />
                <div>
                  <h6 className="line-clamp-2 mt-64 w-40">{item.text}</h6>
                </div>
                <div className="flex gap-1 mt-90 mr-12">
                  <h6 className="w-12 h-7 bg-red-500 rounded-[20px] flex justify-center items-center">{item.text1}</h6>
                  <h6>{item.text2}</h6>
                </div>
                <h6 className="mt-105 mr-24">{item.text3}</h6>
              </SwiperSlide>
            );
          })}
          
        </Swiper>
      </div>
    </div>
  );
};

export default Adresmobile;
