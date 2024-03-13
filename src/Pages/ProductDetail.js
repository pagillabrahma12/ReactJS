import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SpinnerEx from "../Components/Functional-Components/Spinners/Spinner"

const ProductDetail=()=>{
    const RouterInformation=useParams()
    const[product,setproduct]=useState({})
    useEffect(()=>{
        //fetch the data related to the product

fetchData()

    },[RouterInformation.id])

    const fetchData=()=>{
        axios.get(`https://fakestoreapi.com/products/${RouterInformation.id}`)
        .then(response=>{
            if(response.status===200){
               setproduct(response.data)
            }
        })
    }
return(
    <>
    {
        Object.keys(product).length>0
        ?
        <>
        <img src={product.image} width={200} height={200}/>
        <h2 style={{color:"red"}}>{product.price}</h2>
        <h4>{product.title}</h4>
        <h4>{product.description}</h4>
        </>
        :
        <SpinnerEx/>
    }
    </>
)
}
export default ProductDetail

//useParamas:it is a react router dom hook which collect the id / end point  from url