import axios from "axios";
import { Component } from "react";



class MyTable extends Component{
    constructor(){
        super()
        this.state={
            List:[]
        }
    }

    FetchApi=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            this.setState({List:res.data})

        })
        .catch((error)=>console.log(error))
    }

render(){
    return(
        <>
       <button onClick={this.FetchApi}>Click Here To Fetch Data</button> 
        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th>ZIPCODE</th>
            </tr>
            
                {
                    this.state.List.map((each)=>{
                        return(
                    
                  <tr key={each.id}>
                  <td>{each.id}</td>
                  <td>{each.name}</td>
                  <td>{each.email}</td>
                  <td>{each.address.city}</td>
                  <td>{each.address.zipcode}</td>
                    
                    </tr>
                    
                    
                        )
                    })
                }
        
        </table>

        </>
    )
}
}
export default MyTable
