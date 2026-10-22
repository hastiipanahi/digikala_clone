import { useDispatch, useSelector } from "react-redux";
import { setAdres } from "../Redux/Adres/Action";
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



const Adres = () => {
    const dispatch=useDispatch()
    const{adres}=useSelector((state)=>state.adres)
    const fetchAdres=async()=>{
        try {
            const data = await fetch("http://localhost:3000/adres");
            const res=await data.json()
            dispatch(setAdres(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchAdres()
    },[])
    return (
      <div className="w-full h-150 mt-9 md:block hidden">
                <div className="w-[80%] h-full  mx-auto">
                  <div className="flex gap-2 p-4">
                    <img src="" alt="" />
                    <h5 className="font-bold text-[24px]">ارسال 3 ساعته فروشنده</h5>
                  </div>
                  <div className="flex justify-between p-10   h-10 bg-red-100 rounded-[8px] pt-3">
                    <h5 className="text-[18px]">برای بررسی امکان ارسال آدرس راانتخاب کنید</h5>
                    <div className="flex gap-1">
                      <h5 className="text-[18px] text-zinc-700">انتخاب آدرس</h5>
                      <i className="fa fa-chevron-left text-zinc-700 mt-2"></i>
                    </div>
                  </div>
        
              
                  <div className="ll relative bottom-28">
                    <Swiper
                      slidesPerView={6}
                      spaceBetween={2}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper"
                    >
                      {adres.map((item)=>{
                        return (
                          <SwiperSlide key={item.id} className="">
                            <img className="mb-5 w-8" src={item.img} alt="" />
                            <div className="pt-[300px] ">
                              <h5 className=" w-50 line-clamp-2">
                                {item.text}
                              </h5>
                            </div>
                            <div className="flex gap-1 mt-[410px] ">
                              <div className="w-12 text-white flex justify-center items-center rounded-[20px] h-10 bg-red-500 mr-20">
                                <h5>{item.text1}</h5>
                              </div>
                              <h5>{item.text2}</h5>
                            </div>
                            <div className="flex gap-2 pt-[500px]">
                              <h5 className="mr-48">{item.text3}</h5>
                              
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            );
        }
      
    

 
export default Adres;