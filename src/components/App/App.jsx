import Adres from "../Adres/Adres";
import Adresmobile from "../Adresmobile/Adresmobile";
import Barm from "../Barm/Barm";


import Category from "../Category/Category";
import Donload from "../Donload/Donload";
import Final from "../Final/Final";
import Finalmobile from "../Finalmobile/Finalmobile";


import Logo from "../Logo/Logo";
import Mega from "../Mega/Mega";
import Menu from "../Menu/Menu";
import Picture from "../Picture/Picture";
import Product from "../Product/Product";
import Searchmo from "../Searchmo/Searchmo";

import Shegeft from "../Shegeft/Shegeft";
import Shegeftmobile from "../Shegeftmobile/Shegeftmobile";

import Slider from "../Slider/Slider";
import Toeter from "../Toeter/Toeter";
import Vitamin from "../Vitamin/Vitamin";
import Vitaminmobile from "../Vitaminmobile/Vitaminmobile";
import Zed from "../Zed/Zed";





const App = () => {
    return (
      <div className="">
        <Menu />
        <Barm />
        <Searchmo />

        <Logo />
        <Mega/>
        <Slider />
        <Shegeftmobile />

        <Category />
        <Shegeft />
        <Picture />
        <Adres />
        <Adresmobile />
        <Product />
        <Vitamin />
        <Vitaminmobile/>
        <Final />
        <Finalmobile/>
        <Toeter />
        <Donload />
        <Zed />
      </div>
    );
}
 
export default App;