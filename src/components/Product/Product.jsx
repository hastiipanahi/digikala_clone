import { useDispatch, useSelector } from "react-redux";
import{setProduct} from "../Redux/Product/Action"
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

const Product = () => {
    const dispatch=useDispatch()
    const{product}=useSelector((state)=>state.product)
    const fetchProduct=async()=>{
        try {
            const data = await fetch("http://localhost:3000/product");
            const res=await data.json()
            dispatch(setProduct(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    return (
      <div className="w-full h-200  md:block hidden">
        <div className="w-[80%] h-full  mx-auto">
          <div>
            <h5 className="text-[30px] mr-16">دسته بندی ها</h5>
          </div>
          <div className="rr pr-16 pt-10">
            <Swiper
              slidesPerView={9}
              spaceBetween={1}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {product.map((item)=>{
                return (
                  <SwiperSlide key={item.id}>
                    <div>
                      <div>
                        <img src={item.img} alt="" />
                        <h5>{item.text}</h5>
                      </div>
                      <div className="mt-7">
                        <img src={item.img1} alt="" />
                        <h5>{item.text1}</h5>
                      </div>
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
 
export default Product;