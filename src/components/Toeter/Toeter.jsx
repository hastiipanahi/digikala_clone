import { useDispatch, useSelector } from "react-redux";
import { setToeter } from "../Redux/Toeter/Action";
import { useEffect } from "react";

const Toeter = () => {
    const dispatch=useDispatch()
    const{toeter}=useSelector((state)=>state.toeter)
    const fetchToeter=async()=>{
        try {
            const data = await fetch("http://localhost:3000/toeter");
            const res=await data.json()
            dispatch(setToeter(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchToeter()
    },[])
    return ( 
        <div className="md:block hidden relative bottom-28">
            {toeter.map((item)=>{
                return (
                  <div className="flex justify-between mt-12">
                    <a href="" className="leading-10 mr-14">
                      <h3 className="text-[20px] text-zinc-900">{item.text}</h3>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text1}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text2}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text3}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text4}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text5}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text6}
                      </h6>
                    </a>
                    <a href="" className="leading-10">
                      <h3 className="text-[20px] text-zinc-900">
                        {item.text7}
                      </h3>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text8}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text9}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text10}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text11}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text12}
                      </h6>
                    </a>
                    <a href="" className="leading-10">
                      <h3 className="text-[20px] text-zinc-900">
                        {item.text13}
                      </h3>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text14}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text15}
                      </h6>
                      <h6 className="text-zinc-700 text-[20px]">
                        {item.text16}
                      </h6>
                    </a>
                    <div className="ml-10 leading-14">
                      <h3 className="text-[20px] text-zinc-900">
                        {item.text17}
                      </h3>
                      <a href="" className="flex gap-4">
                        <img src={item.img} alt="" />
                        <img src={item.img1} alt="" />
                        <img src={item.img2} alt="" />
                        <img src={item.img3} alt="" />
                        <img src={item.img4} alt="" />
                      </a>
                      <h3 className=" text-[20px] text-zinc-900">
                        {item.text18}
                      </h3>
                      <div className="flex gap-5  ">
                        <div className="w-70 h-15 bg-zinc-300 flex items-center text-zinc-400 rounded-2xl pr-4">
                          <h5>{item.text19}</h5>
                        </div>
                        <div className="w-15 h-15 text-white bg-zinc-200 flex justify-center items-center rounded-2xl">
                          <h5>{item.text20}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
        </div>
     );
}
 
export default Toeter;
