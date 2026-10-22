import { useDispatch, useSelector } from "react-redux";
import { setDonload } from "../Redux/Donload/Action";
import { useEffect } from "react";

const Donload = () => {
    const dispatch=useDispatch()
    const {donload}=useSelector((state)=>state.donload)
    const fetchDonload=async()=>{
        try {
            const data = await fetch("http://localhost:3000/donload");
            const res=await data.json()
            dispatch(setDonload(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchDonload()
    })
    return ( 
        
        <div className="md:block hidden relative bottom-28">
            {donload.map((item)=>{
                return (
                  <div key={item.id} className="">
                    <div className="flex justify-between  h-24 mx-auto rounded-[9px] bg-blue-950 mt-12">
                      <div className="flex gap-2 pr-10 items-center">
                        <img className="w-15 h-15" src={item.img} alt="" />
                        <h3 className="text-white font-bold text-[28px]">
                          {item.text}
                        </h3>
                      </div>
                      <div className="flex gap-1.5">
                        <img src={item.img1} alt="" className="w-36" />
                        <img className="w-36" src={item.img2} alt="" />
                        <img className="w-36" src={item.img3} alt="" />
                        <img className="w-36" src={item.img4} alt="" />
                      </div>
                    </div>
                    <span className="w-300 h-32 bg-zinc-500 mt-72"></span>
                    <div className="flex gap-16">
                      <div className="w-345">
                        <h2 className="text-[30px] text-zinc-700 mt-10 mr-14">
                          {item.text1}
                        </h2>
                        <h6 className="text-zinc-600 mr-14 mt-3">
                          {item.text2}
                        </h6>
                      </div>
                      <div className="flex gap-3">
                        <div
                          className="w-36
                         h-36 p-3 border border-zinc-300 mt-10 rounded-[7px]"
                        >
                          <img className="w-24" src={item.img5} alt="" />
                        </div>
                        <div
                          className="w-36
                         h-36 p-3 border border-zinc-300 mt-10 rounded-[7px]"
                        >
                          <img className="w-24" src={item.img6} alt="" />
                        </div>
                        <div
                          className="w-36
                         h-36 p-3 border border-zinc-300 mt-10 rounded-[7px]"
                        >
                          <img className="w-24" src={item.img7} alt="" />
                        </div>
                        <div
                          className="w-36
                         h-36 p-3 border border-zinc-300 mt-10 rounded-[7px]"
                        >
                          <img className="w-24" src={item.img5} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 pr-14 text-blue-500">
                      <h5>{item.text3}</h5>
                      <i className="fa fa-chevron-left mt-2"></i>
                    </div>
                    <span className=""></span>
                    <h6 className="text-zinc-600 flex justify-center mt-10">{item.text4}</h6>
                  </div>
                );
            })}
        </div>
     );
}
 
export default Donload;