import React,{useState} from "react"


const EmployeesData=()=>{
   const[employees,setemployees]= useState([
        {
            id:1,
        name:"pagillabrahma",
        address:"hyderabad"
        },
        {
            id:2,
            name:"Dheeraj",
            address:"suryapet"
        }
    ])

    //for adding employees
    const HandlerAddEmp=()=>{
        const newEmployee={

            name:`Employee ${employees.length+1}`
        }
        setemployees([...employees,newEmployee])
    }


    // for deletimg employees
    const HandlerDelete=(id)=>{
         let deleteEmployees=employees.filter((each)=>each.id!==id)
         setemployees(deleteEmployees)
    }   
     return(
        <>
        <h1>Employess Data</h1>
        <button onClick={HandlerAddEmp}>Add Employees</button>
        <ul>
            {
                employees.map((eachPerson)=>{
                    return(
                        <div key={employees.id}>
                            <li>{eachPerson.name}</li>
                            <button onClick={()=>HandlerDelete(eachPerson.id)}>Delete Employees</button>
                        </div>
                    )
                })
            }
        </ul>
        </>
    )



}
export default EmployeesData



