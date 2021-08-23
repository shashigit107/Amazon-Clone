import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { useStateValue } from './StateProvider';
import CheckOutPage from './CheckOutPage/CheckOutPage';


function Header() {
    const[{basket}]=useStateValue();
    console.log(basket);
    return (
        <nav className="header">
            <Link>
                <img className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__SearchInput" />
                <SearchIcon className="header_SearchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="optionLineOne">hello</span>
                        <span className="optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="optionLineOne">Return</span>
                        <span className="optionLineTwo">order</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="optionLineOne">Your</span>
                        <span className="optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <AddShoppingCartIcon/>
                         <span className="header__optionLinetwo header__basketCount">{basket.length}</span> 
                        
                     </div>
                </Link>

            </div> 

        </nav>
    )
}

export default Header
