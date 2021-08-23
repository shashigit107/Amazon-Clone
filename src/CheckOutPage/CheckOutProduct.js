import React from "react"
import { useStateValue } from "../StateProvider"
import "./CheckOutProduct.css"

function CheckOutProduct({ id,title, image, price, rating }) {
    const [{basket},dispatch]=useStateValue();
    const RemoveBtnHandler=()=>{
        dispatch({
            type:"remove_From_basket",
            id:id
        })

    }
    return (
        <>
            <div className="checkoutProduct">
                <img src={image} alt="image not found" />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    

                    <p className="Checkoutproduct__price">
                        <small>Rs</small>
                        <strong>{price}</strong>
                    </p>

                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_, i) => {
                            return <p>⭐</p>
                        })}
                    </div>
                    <button onClick={RemoveBtnHandler}>Remove From Basket</button>
                </div>
            </div>
        </>
    )
}
export default CheckOutProduct;