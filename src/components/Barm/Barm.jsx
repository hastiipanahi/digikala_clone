import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBarm } from "../Redux/Barm/Action";

const Barm = () => {
    const dispatch=useDispatch()
    const{barm}=useSelector((state)=>state.barm)
    const fetchBarm=async()=>{
        try {
            const data = await fetch("http://localhost:3000/barm");
            const res=await data.json()
            dispatch(setBarm(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchBarm()
    },[])
    return ( <div className="flex justify-center gap-3 md:hidden bg-zinc-200 pt-2 ">
        {barm.map((item)=>{
            return (
              <div className="" key={item.id} >
                <div className="w-16 h-16 rounded-[10px] bg-white ">
                  <img className="w-10 mr-3" src={item.img} alt="" />
                  <h6 className="text-[12px] flex justify-center">{item.text}</h6>
                </div>
              </div>
            );
        })}
    </div> );
}
 
export default Barm;