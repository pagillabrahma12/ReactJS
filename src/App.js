

import './App.css';
import EmployeesData from './Components/Functional-Components/UseState/Task.js';


import UseStateEx1 from "./Components/Functional-Components/UseState/UseStateEx-1.js";
import UseStateEx2 from './Components/Functional-Components/UseState/UseStateEx-2.js';
import UseStateEx3 from './Components/Functional-Components/UseState/UseStateEx-3.js';
import UseStateTable from './Components/Functional-Components/UseState/UseStateshowinTable.js';



function App(){
  return( 
    <div>
      <UseStateTable/>
      <EmployeesData/>
     <UseStateEx1/>
    <UseStateEx2/>
    <UseStateEx3/>

    </div>


  )
}
export default App