import axios from "axios";

import {Component} from "react"


class ListData extends Component{
    constructor(){
        super()
            this.state={
                List:[]
            
        }
    }
    
    fetchData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            this.setState({List:res.data})
        })
        .catch((error)=>console.log(error))
    }



    render(){
        return(
            <>
            <button onClick={this.fetchData}>Click Here for Fetch Data</button>
            
            <div>
                {
                    this.state.List.map((eachObject)=>{
                        return(
                            
                            <ol key={eachObject.id}>
                                
                                    <li>{eachObject.id}</li>
                                    <li>{eachObject.title}</li>
                                    <li>{eachObject.price}</li>
                                    <li>{eachObject.rating.count}</li>
                                
                            </ol>
                            
                            
                            
                        )
                    })
                }
            </div>
            </>
        )
    }
}
export default ListData