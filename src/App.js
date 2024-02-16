
import ButtonComponent from "./Components/Functional-Components/Button/Button-Component"
import OrderList from "./Components/Functional-Components/list/OrderList/Order-List"
import Table from "./Components/Functional-Components/table/table.js"
import './App.css';
import UnorderList from "./Components/Functional-Components/list/UnorderList/Unorder-List.js";
//import TableData from "./Components/Functional-Components/TableProductInfo/Tables.js";
function App(){

  return(
    <div>
      <h1>Hello World</h1>

    <ButtonComponent/>
    <OrderList/> 
    <UnorderList/>
    
 <Table/> 
 {/* <TableData/> */}

{/* <Profile/> */}


    </div>
  )
}
export default App