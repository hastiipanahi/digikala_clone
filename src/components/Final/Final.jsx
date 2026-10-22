import { useDispatch, useSelector } from "react-redux";
import { setFinal } from "../Redux/Final/Action";
import { useEffect } from "react";

const Final = () => {
    const dispatch=useDispatch()
    const {final}=useSelector((state)=>state.final)
    const fetchFinal=async()=>{
        try {
            const data = await fetch("http://localhost:3000/final");
            const res=await data.json()
            dispatch(setFinal(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchFinal()
    },[])
    return (
      <div className="md:block hidden relative bottom-28">
        {final.map((item)=>{
            return (
            
              <div className="w-full ">
                <div className="flex justify-between p-12">
                  <img src={item.img} alt="" />
                  <a
                    href="#top"
                    className="flex gap-2 border border-zinc-300 justify-center items-center w-40 h-14 rounded-[8px]"
                  >
                    <h6>{item.text}</h6>
                  
                    <i className="fa fa-chevron-up"></i>
                  </a>
                </div>
                <div className="flex gap-5 pr-12">
                  <h6>{item.text1}</h6>
                  <span className="w-1 h-7 text-zinc-300"></span>
                  <h6>{item.text2}</h6>
                  <span className="w-1 h-7 text-zinc-300"></span>
                  <h6>{item.text3}</h6>
                </div>
                <div className="flex justify-around mt-12">
                  <a href="">
                    <img className="w-20" src={item.img1} alt="" />
                    <h5>{item.text4}</h5>
                  </a>
                  <a href="">
                    <img className="w-20" src={item.img2} alt="" />
                    <h5>{item.text5}</h5>
                  </a>
                  <a href="">
                    <img className="w-20" src={item.img3} alt="" />
                    <h5>{item.text6}</h5>
                  </a>
                  <a href="">
                    <img className="w-20" src={item.img4} alt="" />
                    <h5>{item.text7}</h5>
                  </a>
                  <a href="">
                    <img className="w-20" src={item.img5} alt="" />
                    <h5>{item.text8}</h5>
                  </a>
                </div>
              </div>
            );
        })}
      </div>
    );
}
 
export default Final;