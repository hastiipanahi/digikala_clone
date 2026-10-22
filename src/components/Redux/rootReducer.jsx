import { combineReducers } from "redux";
import ReducerMenu from "./Menu/Reducermenu";
import ReducerLogo from "./Logo/ReducerLogo";
import ReducerSlider from "./Slider/ReducerSlider";
import ReducerCategory from "./Category/ReducerCategory";
import ReducerShegeft from "./Shegeft/ReducerShegeft";
import ReducerPicture from "./Picture/ReducerPicture";
import ReducerAdres from "./Adres/ReducerAdres";
import ReducerProduct from "./Product/ReducerProduct";
import ReducerVitamin from "./Vitamin/ReducerVitamin";
import ReducerFinal from "./Final/ReducerFinal";
import ReducerToeter from "./Toeter/ReducerToeter";
import ReducerDonload from "./Donload/ReducerDonload";
import ReducerZed from "./Zed/ReducerZed";
import ReducerBarm from "./Barm/ReducerBarm";
import ReducerShearchmo from "./Searchmo/ReducerSearchmo";
import ReducerShegeftmobile from "./Shegeftmobile/ReducerShegeftmobile";
import ReducerAdresmobile from "./Adresmobile/ReducerAdresmobile";
import ReducerVitaminmobile from "./Vitaminmobile/ReducerVitaminmobile";
import ReducerFinalmobile from "./Finalmobile/ReducerFinalmobile";
import ReducerMega from "./Mega/ReducerMega";










const rootReducer=combineReducers({
    menu:ReducerMenu,
    logo:ReducerLogo,
    slider:ReducerSlider,
    category:ReducerCategory,
    shegeft:ReducerShegeft,
    picture:ReducerPicture,
    adres:ReducerAdres,
    product:ReducerProduct,
    vitamin:ReducerVitamin,
    final:ReducerFinal,
    toeter:ReducerToeter,
    donload:ReducerDonload,
    zed:ReducerZed,
    barm:ReducerBarm,
    searchmo:ReducerShearchmo,
    shegeftmobile:ReducerShegeftmobile,
    adresmobile:ReducerAdresmobile,
    vitaminmobile:ReducerVitaminmobile,
    finalmobile:ReducerFinalmobile,
    mega:ReducerMega
    
    
    
    
    
    
    
})
export default rootReducer