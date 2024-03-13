import { useEffect, useState } from "react"
import Header from "../Components/Functional-Components/nav-bar/header"
import axios from "axios"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import SpinnerEx from "../Components/Functional-Components/Spinners/Spinner";
import "./HomeScreen.css"
const HomeScreen=()=>{
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                setdata(response.data)
            }
        })
        .catch(error=>console.log(error))
    },[])
    return(
     <>
    <Header/>

    <div className="MainStyle">
     {
        data.length>0
        ?
        data.map((each)=>{
            return(
                <>                        
                 <CustomCard data={each}/>
                 </>
            )
        })
        :
        <SpinnerEx/>
     }
     </div>
     </>
 
    ) 
 }
 export default HomeScreen;

 export function CustomCard(props) {
    const{data:{image,category,price,title,id}}=props

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} className="images"  />
      <Card.Body>
        <Card.Title className="prices">{price}</Card.Title>
        <Card.Text>
        {title}
        </Card.Text>
    <button >
        <Link className="colors" to={`/${category}/${id}`}>
        Navigate
        </Link>
    </button>
      </Card.Body>
    </Card>
    
  );
}
