import { useEffect, useState } from "react"
import Header from "../Components/Functional-Components/nav-bar/header"
import axios from "axios"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import SpinnerEx from "../Components/Functional-Components/Spinners/Spinner";

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
     </>
 
    ) 
 }
 export default HomeScreen;


 export function CustomCard(props) {
    const{data:{image,category,description,title,id}}=props


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{width:100}} height={100}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
    <button >
        <Link style={{textDecoration:"none"}} to={`/${category}/${id}`}>
        Navigate
        </Link>
    </button>
      </Card.Body>
    </Card>
  );
}
