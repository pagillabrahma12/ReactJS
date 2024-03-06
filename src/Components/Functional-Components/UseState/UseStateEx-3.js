import React,{ useState } from "react"

const UseStateEx3=()=>{
    const[fruits,setfruits]=useState(["apple","banana","grapes","kiwi"])
       
    //for addinng 
        const HandlerAdd=()=>{
        //if we want update state we should use only deep copying    
            let newState=[...fruits,"new fruits"]
            setfruits(newState)
        }
            //for deleting
        const HandlerDelete=(index)=>{
            console.log(index,fruits)
        }
    return(
        <div>
        <h2>Todo List</h2>
        <button onClick={HandlerAdd}>Add friuts</button>
        <ol>
        {
        fruits.map((eacItem,index)=>{
            return(
                <div key={index}>
                <li>{eacItem}</li>
                <button onClick={HandlerDelete}>Delete Friut</button>
              
                </div>
            )
        })
    }
    </ol>
        </div>
    )




}
export default UseStateEx3