import { setSearchmo } from "../Redux/Searchmo/Action";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Searchmo = () => {
    const dispatch=useDispatch()
    const{searchmo}=useSelector((state)=>state.searchmo)
    const fetchSearchmo=async()=>{
        try {
            const data = await fetch("http://localhost:3000/searchmo");
            const res=await data.json()
            dispatch(setSearchmo(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
       fetchSearchmo()
    },[])
    return ( <div className="bg-zinc-200 fixed z-10 w-full ">
        {searchmo.map((item)=>{
            return (
              
              <div className="md:hidden ">
                
                <div className="flex justify-center gap-7  ">
                  <div className="w-52 h-10 bg-white flex gap-2 justify-center items-center mt-5 rounded-[13px] ">
                    <i className="fa fa-search text-zinc-400"></i>
                    <div className="flex gap-0.5">
                      <h6 className="text-[12px] text-zinc-400">{item.text}</h6>
                      <h6 className="text-[12px] text-red-500">{item.text1}</h6>
                    </div>
                    <img className="mt-4 mr-6" src={item.img} alt="" />
                  </div>
                  <div className="w-12 h-12 mt-4 rounded-full bg-white flex justify-center items-center">
                    <i className="fa fa-bell-o"></i>
                  </div>
                </div>
                
                <div className="flex gap-1 mr-14 mt-2 text-amber-800 ">
                  <i className="fa fa-map-marker mt-1"></i>
                  <h6>{item.text2}</h6>
                  <i className="fa fa-chevron-down mt-1 "></i>
                </div>
              </div>
              
            );
        })}
    </div> );
}

export default Searchmo;