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
import { setVitaminmobile } from "../Redux/Vitaminmobile/Action";
import { useEffect } from "react";

const Vitaminmobile = () => {
  const dispatch = useDispatch();
  const { vitaminmobile } = useSelector((state) => state.vitaminmobile);
  const fetchVitaminmobile = async () => {
    try {
      const data = await fetch("http://localhost:3000/vitaminmobile");
      const res = await data.json();
      dispatch(setVitaminmobile(res));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchVitaminmobile();
  });
  return (
    <div className="mt-10 mr-6 md:hidden block">
      <div className="flex gap-12">
        <h5 className="font-bold">ویتامین ها و مواد معدنی</h5>
        <div className="flex gap-1">
          <h5>مشاهده همه</h5>
          <i className="fa fa-chevron-left mt-2"></i>
        </div>
      </div>
      <div>
        <h6 className="text-zinc-500 mt-2">بر اساس سلیقه شما</h6>
      </div>
      <div className="vi">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {vitaminmobile.map((item)=>{
            return (
              <SwiperSlide className="">
                <div className="">
                  <img className="" src={item.img} alt="" />
                  <h6 className="w-36 line-clamp-2 text-[14px]">{item.text}</h6>
                  <div className="flex gap-1 mt-3 text-[14px]">
                    <h6 className="w-10 h-6 bg-red-600 rounded-2xl flex justify-center items-center text-white mr-10">{item.text1}</h6>
                    <h6>{item.text2}</h6>
                  </div>
                  <h6 className="mr-10 text-[14px]">{item.text3}</h6>
                </div>
              </SwiperSlide>
            );
          })}
         
        </Swiper>
      </div>
    </div>
  );
};

export default Vitaminmobile;
