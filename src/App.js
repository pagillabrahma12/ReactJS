
//import ButtonComponent from "./Components/Functional-Components/Button/Button-Component"
//import OrderList from "./Components/Functional-Components/list/OrderList/Order-List"

import './App.css';
import MyYoutube from './Components/Functional-Components/ImageComponent/YoutubeComponent/YoutubeSubscribe.js';


import MyBrahma from './Components/Functional-Components/ImageComponent/brahma.js';
import Mycomponent from "./Components/Functional-Components/ImageComponent/image.js";


function App(){
  return( 
    <div>

     <Mycomponent title="Brahma"/>
    <MyBrahma name="PagillaBrahma"/>
    <MyYoutube/>
    </div>


  )
}
export default App