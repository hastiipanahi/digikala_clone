import { useDispatch, useSelector } from "react-redux";
import { setZed } from "../Redux/Zed/Action";
import { useEffect } from "react";

const Zed = () => {
    const dispatch=useDispatch()
    const{zed}=useSelector((state)=>state.zed)
    const fetchZed=async()=>{
        try {
            const data = await fetch("http://localhost:3000/zed");
            const res=await data.json()
            dispatch(setZed(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchZed()
    },[])
    return (
      <div className="md:block hidden relative bottom-28">
        {zed?.map((item)=>{
            return (
              <div className="mt-10">
                <div className="flex">
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img1} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img2} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img3} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img4} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img5} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img6} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img7} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img8} alt="" />
                  </a>
                </div>
                <div className="flex">
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img9} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img10} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img11} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img12} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img13} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img14} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img15} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img16} alt="" />
                  </a>
                  <a
                    href=""
                    className="w-64 h-24 bg-zinc-200 border border-zinc-300 flex justify-center items-center"
                  >
                    <img className="w-44" src={item.img17} alt="" />
                  </a>
                </div>
              </div>
            );
        })}
      </div>
    );
}
 
export default Zed;