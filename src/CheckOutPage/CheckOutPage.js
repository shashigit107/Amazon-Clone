import React from "react"
import { useStateValue } from "../StateProvider"
import CheckOutProduct from "./CheckOutProduct"


function CheckOutPage(){
    const[{basket}]=useStateValue();
    return(
        <>
        {basket.length===0?
        (<div>
            <h2>Hey.....!😭   Your Cart is Empty  </h2>
        </div>):
        ( basket.map((para)=>{
            return<CheckOutProduct 
             id={para.id}
            title={para.title}
            image={para.image}
            price={para.price}
            rating={para.rating} />
        }))}
        </>
    )
}
export default CheckOutPage;