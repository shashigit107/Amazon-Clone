import React from "react"
import { useStateValue } from "../StateProvider"
import "./Product.css"
function Product({id,title,price,rating,image}){
    const[{},dispatch] = useStateValue();
  const  btnHandler=()=>{
       dispatch({
           type:"Add_To_basket",
           item:{
               id:id,
               title:title,
               image :image,
               price:price,
               rating:rating
           }
       })
    }
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_)=>{
                        return<p>⭐</p>
                    })}
                </div>
            </div>
            <img src={image} alt="not found"></img><br/>
            <button onClick={btnHandler}>Add to cart</button>
            
        </div>

    )
}
export default Product;