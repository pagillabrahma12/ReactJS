import axios from "axios";
import { Component } from "react";


class MyCards extends Component{
    constructor(){
        super()
        this.state={
            Cards:[]

        }
    }
    FetchApiforCards=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            this.setState({Cards:res.data})
        })
        .catch((error)=>console.log(error))

                    }
            render(){
                return(
                    <>
                    <button onClick={this.FetchApiforCards}>Click Me Here To Fetch Data</button>
                        <div style={Cardsstyle}>
                            {
                                this.state.Cards.map((eachData)=>{
                                    return(
                                    <div style={Container}>
                                        <div key={eachData.id}>
                                            <img src={eachData.image} width={150} height={130} />
                                        </div>  
                                        <p>{eachData.id}</p>
                                        <p>{eachData.title}</p>
                                        <p>{eachData.category}</p>
                                       
                                        <p>{eachData.price}</p>



                                    </div>                                                                                                         
                                    )
                                })
                            }
                        </div>
                    </>
                )

                    }

}
export default MyCards
const Cardsstyle={
    width:"100%",
    height:"100%",
    display:"flex",
   flexWrap:"wrap",
   marigin:"auto",
   padding:"5px",
   gap:"10px"
}
const Container={
    width:"350px",
    height:"390px",
    border:"1px solid black",
    marigin:"auto",
    display:"flex",
     flexDirection: "column" ,
     alignItems:" center",
      justifyContent: "center"
  
  

   

}
