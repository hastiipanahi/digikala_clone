import { useDispatch, useSelector } from "react-redux";
import { setFinalmobile } from "../Redux/Finalmobile/Action";
import { useEffect } from "react";

const Finalmobile = () => {
    const dispatch=useDispatch()
    const{finalmobile}=useSelector((state)=>state.finalmobile)
    const fetchFinalmobile=async()=>{
        try {
            const data = await fetch("http://localhost:3000/finalmobile");
            const res=await data.json()
            dispatch(setFinalmobile(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchFinalmobile()
    },[])
    return (
      <div className="">
        {finalmobile.map((item)=>{
          return (
            <div className="mt-10 md:hidden block">
              <div className="w-32 h-10 mx-auto bg-zinc-100 flex justify-center items-center gap-2 rounded-[22px]">
                <h6>{item.text}</h6>
                <i className="fa fa-chevron-up"></i>
              </div>
              <span></span>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    className="w-12 h-12 rounded-full bg-zinc-100 flex justify-center items-center mr-5 text-[14px] text-zinc-700 pt-3 pl-3"
                    src={item.img}
                    alt=""
                  />
                  <h6 className="text-[14px] text-zinc-500 mt-3">
                    {item.text1}
                  </h6>
                </div>
                <div className="w-16 h-10 rounded-full bg-zinc-100 flex justify-center items-center ml-5">
                  <h6>{item.text2}</h6>
                </div>
              </div>
              <div className="w-80 h-0.5 bg-zinc-100 mr-9 mt-2"></div>
              <div className="flex justify-between">
                <div className="flex gap-2 mr-7 mt-7">
                  <img
                    className="w-6 h-6 bg-zinc-300 flex justify-center items-center"
                    src={item.img1}
                    alt=""
                  />
                  <h6 className="text-[14px] text-zinc-400">{item.text3}</h6>
                </div>
                <div className="w-16 h-10 rounded-full bg-zinc-100 flex justify-center items-center mt-7 ml-5 ">
                  <h6>{item.text4}</h6>
                </div>
              </div>
              <div className="w-80 h-0.5 bg-zinc-100 mr-9 mt-3"></div>
              <div className="flex justify-between mr-5 mt-4">
                <h6 className="font-bold text-[16px] mr-3">{item.text5}</h6>
                <i className="fa fa-chevron-down ml-5"></i>
              </div>
              <div className="w-80 h-0.5 bg-zinc-100 mr-9 mt-3"></div>
              <div className="flex justify-between mt-4">
                <h6 className="font-bold text-[16px] mr-5">{item.text6}</h6>
                <i className="fa fa-chevron-down ml-5"></i>
              </div>

              <div className="w-80 h-0.5 bg-zinc-100 mr-9 mt-3"></div>
              <div className="flex justify-between mt-4">
                <h6 className="font-bold text-[16px] mr-3">{item.text7}</h6>
                <i className="fa fa-chevron-down ml-5"></i>
              </div>

              <div className="w-80 h-0.5 bg-zinc-100 mr-9 mt-3"></div>
              <div className="flex justify-between mt-4">
                <h6 className="font-bold text-[16px] mr-3">{item.text8}</h6>
                <i className="fa fa-chevron-down ml-5"></i>
              </div>
              <div className="w-80 h-0.5 bg-zinc-100 mr-9 mt-3"></div>
              <div>
                <h5 className="mt-3 mr-5">{item.text9}</h5>
                <h6 className="mr-5 line-clamp-2 mt-3">{item.text10}</h6>
              </div>
              <div className="flex gap-1 mt-3 mr-5">
                <h6 className="text-zinc-400">{item.text11}</h6>
                <i className="fa fa-chevron-left text-zinc-400 mt-2"></i>
              </div>
              <div className="w-80 h-0.5 bg-zinc-100 mr-9 mt-3"></div>
              <div className="flex justify-between">
                <div className="flex gap-1 mr-5 mt-3">
                  <img
                    className="w-6 h-6 bg-zinc-300 flex justify-center items-center"
                    src={item.img2}
                    alt=""
                  />
                  <h6 className="text-[16px] text-zinc-400">{item.text12}</h6>
                </div>
                <div className="w-16 h-8 rounded-full bg-zinc-100 flex justify-center items-center ml-5 mt-3">
                  <h6>{item.text13}</h6>
                </div>
              </div>
              <div className="w-80 h-0.5 bg-zinc-100 mr-9 mt-3"></div>
              <div className="flex gap-7 justify-center mt-3">
                <div>
                  <i className="fa fa-home "></i>
                  <h6 className="text-[14px] font-bold">{item.text14}</h6>
                </div>
                <div className="text-zinc-400 ">
                  <i className="fa fa-sitemap mr-4"></i>
                  <h6 className="text-[14px]">{item.text15}</h6>
                </div>
                <div className="text-zinc-400">
                  <i className="fa fa-shopping-cart mr-4"></i>
                  <h6 className="text-[14px]">{item.text16}</h6>
                </div>
                <div className="text-zinc-400">
                  <i className="fa fa-magnet mr-4"></i>
                  <h6 className="text-[14px]">{item.text17}</h6>
                </div>
                <div className="text-zinc-400">
                  <i className="fa fa-user-o mr-4"></i>
                  <h6 className="text-[14px]">{item.text18}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
}
 
export default Finalmobile;