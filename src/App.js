
//import ButtonComponent from "./Components/Functional-Components/Button/Button-Component"
//import OrderList from "./Components/Functional-Components/list/OrderList/Order-List"

import './App.css';
import MyCards from './Components/GetApi/Cards';
import ListData from './Components/GetApi/listData';
import MyTable from './Components/GetApi/tableApi';


function App(){
  return( 
    <div>
     <MyTable/>
     <ListData/>
     <MyCards/>
    </div>


  )
}
export default App