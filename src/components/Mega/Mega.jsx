import { useDispatch, useSelector } from "react-redux";
import { setMega } from "../Redux/Mega/Action";
import { useEffect } from "react";

const Mega = () => {
    const dispatch=useDispatch()
    const {mega}=useSelector((state)=>state.mega)
    const fetchMega=async()=>{
        try {
            const data = await fetch("http://localhost:3000/mega");
            const res=await data.json()
            dispatch(setMega(res))
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchMega()
    },[])
    return (
      <div className="md:flex justify-between mt-5 hidden">
        <div className="flex gap-3 mr-16">
          <div className="text-zinc-700 text-[15px] flex gap-1 relative group">
            <img src="" alt="" />
            <a href="">دسته بندی کالاها</a>
            <div className="w-300 h-300 bg-amber-500 absolute z-10 top-5 hidden group-hover:block">
              <div className="w-[20%] h-full bg-zinc-100">
                <div className="flex justify-center items-center pt-5 text-[18px] hover:bg-white w-full">
                  <a className="hover:text-red-600" href="">
                    موبایل
                  </a>
                  <div className="w-[80%] h-full absolute left-0 top-0 bg-white flex justify-around pr-7 pt-16">
                    <div className="flex gap-2">
                      <span className="w-0.5 h-7 bg-red-600"></span>
                      <div className="leading-11">
                        <h6 className="">انتخاب موبایل</h6>
                        <div>
                          <div>
                            <a href="">گوشی آیفون</a>
                          </div>
                          <div>
                            <a href="">گوشی آیفون</a>
                          </div>
                          <div>
                            <a href="">گوشی آیفون</a>
                          </div>
                          <div>
                            <a href="">گوشی آیفون</a>
                          </div>
                        </div>
                      </div>
                      <i className="fa fa-chevron-left mt-3"></i>
                    </div>

                    <div className="flex gap-2">
                      <span className="w-0.5 h-7 bg-red-600"></span>
                      <div className="leading-11">
                        <h6 className="">گوشی بر اساس قیمت</h6>
                        <div>
                          <div>
                            <a href="">گوشی از 5 میلیون</a>
                          </div>
                          <div>
                            <a href="">گوشی از 7میلیون</a>
                          </div>
                          <div>
                            <a href="">گوشی از 15 میلیون</a>
                          </div>
                          <div>
                            <a href="">گوشی از 20 میلیون</a>
                          </div>
                        </div>
                      </div>
                      <i className="fa fa-chevron-left mt-3"></i>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-0.5 h-7 bg-red-600"></span>
                      <div className="leading-11">
                        <h6 className="">لوازم جانبی موبایل</h6>
                        <div>
                          <div>
                            <a href="">شارژر</a>
                          </div>
                          <div>
                            <a href="">گلس</a>
                          </div>
                          <div>
                            <a href="">کابل</a>
                          </div>
                          <div>
                            <a href="">شارژرفندکی</a>
                          </div>
                        </div>
                      </div>
                      <i className="fa fa-chevron-left mt-3"></i>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-0.5 h-7 bg-red-600"></span>
                      <div className="leading-11">
                        <h6 className=""></h6>
                        <div>
                          <div>
                            <a href="">داغ ترین ها</a>
                          </div>
                          <div>
                            <a href="">سامسونگ 17</a>
                          </div>
                          <div>
                            <a href="">نوکیا 12</a>
                          </div>
                          <div>
                            <a href="">آلکاتل 23</a>
                          </div>
                        </div>
                      </div>
                      <i className="fa fa-chevron-left mt-3"></i>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center pt-5 text-[18px] hover:bg-white w-full">
                  <a className="hover:text-red-600" href="">
                    لوازم تحریر
                  </a>
                </div>
                <div className="flex justify-center items-center pt-5 text-[18px] hover:bg-white w-full">
                  <a className="hover:text-red-600" href="">
                    لپ تاپ
                  </a>
                </div>
                <div className="flex justify-center items-center pt-5 text-[18px] hover:bg-white w-full">
                  <a className="hover:text-red-600" href="">
                    کالای دیجیتال
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-zinc-500 text-[15px] flex gap-1">
            <img src="" alt="" />
            <a href="">شگفت انگیزها</a>
          </div>
          <div className="text-zinc-500 text-[15px] flex gap-1">
            <img src="" alt="" />
            <a href="">سوپرمارکت</a>
          </div>
          <div className="text-zinc-500 text-[15px] flex gap-1">
            <img src="" alt="" />
            <a href="">طلا و نقره دیجیتال</a>
          </div>
          <div className="text-zinc-500 text-[15px] flex gap-1">
            <img src="" alt="" />
            <a href="">پرفروش ترین ها</a>
          </div>
          <div className="text-zinc-500 text-[15px] flex gap-1">
            <img src="" alt="" />
            <a href="">دیجی استایل</a>
          </div>
          <div className="text-zinc-500 text-[15px] flex gap-1">
            <img src="" alt="" />
            <a href="">در دیجی کالا بفروشید</a>
          </div>
        </div>
        <div className="w-40 h-10 bg-red-50 text-amber-600 flex justify-center items-center ml-10 rounded-[15px] mb-4">
          <img src="" alt="" />
          <h6>انتخاب آدرس</h6>
        </div>
      </div>
    );
}
 
export default Mega;