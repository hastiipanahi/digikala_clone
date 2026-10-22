import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Category/Action";
import { useEffect } from "react";

const Category = () => {
    const dispatch=useDispatch()
    const{category}=useSelector((state)=>state.category)
    const fetchCategory=async()=>{
        try {
            const data = await fetch("http://localhost:3000/category");
            const res=await data.json()
            dispatch(setCategory(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchCategory()
    },[])
    return (
      <a
        href="
      "
      >
        <div className="flex justify-center gap-14 pt-8">
          {category?.map((item) => {
            return (
              <div className="" key={item.id}>
                <img className="md:w-20 "  src={item.img} alt="" />
                <h5 className="mt-4 md:text-[16px] text-[12px] text-zinc-900">{item.text}</h5>
              </div>
            );
          })}
          <div>
            <div className="w-20 h-20 rounded-full bg-red-100 flex justify-center items-center gap-1">
              <span className="w-2 h-2 bg-zinc-800 rounded-full"></span>
              <span className="w-2 h-2 bg-zinc-800 rounded-full"></span>
              <span className="w-2 h-2 bg-zinc-800 rounded-full"></span>
            </div>
            <h5 className="mr-6 mt-2">بیشتر</h5>
          </div>
        </div>
      </a>
    );
}
 
export default Category;