import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className='CartWidget-container'>
            <Link to={`*`}> <AiOutlineShoppingCart />
            <i className="bi bi-2-circle"></i>  </Link>
        </div>
    )
};

export default CartWidget;