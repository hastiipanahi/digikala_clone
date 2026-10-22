import { useDispatch, useSelector } from "react-redux";
import { setVitamin } from "../Redux/Vitamin/Action";
import { useEffect } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Vitamin = () => {
    const dispatch=useDispatch()
    const{vitamin}=useSelector((state)=>state.vitamin)
    const fetchVitamin=async()=>{
        try {
            const data = await fetch("http://localhost:3000/vitamin");
            const res=await data.json()
            dispatch(setVitamin(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchVitamin()
    },[])
    return (
      <div className="w-full h-140 relative bottom-40 md:block hidden">
        <div className="w-[80%] h-full mx-auto border border-red-100 rounded-[13px]">
          <div className="p-5">
            <h2 className=" text-[27px]">ویتامین ها و مواد معدنی</h2>
          </div>
          <div className="flex justify-between p-5 ">
            <h6>بر اساس سلیقه شما</h6>
            <a href="" className="w-30 h-10 bg-red-100 flex gap-1 justify-center items-center rounded-2xl">
                <h5>مشاهده همه</h5>
                <i className="fa fa-chevron-left"></i>
            </a>
          </div>
          <div className="ff">
             <Swiper
                          slidesPerView={7}
                          spaceBetween={13}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                          {vitamin.map((item)=>{
                            return (
                              <SwiperSlide key={item.id} className="border border-red-100 rounded-[8px] mx-7">
                                <a href="">
                                    <img src={item.img}
                                     alt="" />
                                     <h5 className="line-clamp-2 mt-2 text-zinc-600 leading-7">{item.text}</h5>
                                     <div className="flex gap-1 pt-5 pr-5">
                                        <div className="w-15 h-7 bg-red-500 text-white rounded-2xl">{item.text1}</div>
                                        <h5>{item.text2}</h5>
                                     </div>
                                     <div className="flex gap-1 pt-2 pr-10">
                                        <h5>{item.text3}</h5>
                                          
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
}
 
export default Vitamin;