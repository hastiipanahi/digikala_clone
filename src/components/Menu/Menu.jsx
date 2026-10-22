import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../Redux/Menu/Action";
import { useEffect } from "react";

const Menu = () => {
    const dispatch=useDispatch()
    const{menu}=useSelector((state)=>state.menu)
    const fetchMenu=async()=>{
        try {
            const data = await fetch("http://localhost:3000/menu");
            const res=await data.json()
            dispatch(setMenu(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchMenu()
    })
    return (
        <>
        <div className="md:block hidden">
            {menu?.map((item)=>{
                return (
                  <div className="" key={item.id}>
                    <img src={item.img} alt="" />
                  </div>
                );
            })}
        </div>
        </>
    )
}
 
export default Menu;