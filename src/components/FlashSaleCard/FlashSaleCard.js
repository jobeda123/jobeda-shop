import React from 'react';
import './FlashSaleCard.css';

const ProductCard = (props) => {
    const { title, image, price, id } = props.data;

    const newPrice = (price - ((price*30)/100)).toFixed(2);

    return (
        <div className="col-md-3 my-2">
            <div className="productCard">
                <img src={image} alt="Not Found" />
                <div>
                    <p style={{ fontSize: "1rem", padding: "5px 2px" }}>{title}</p>
                </div>
                <div className="d-flex mx-2 my-2">
                    <p className="flashSalePriceDecrease px-4 pt-1">${price}</p>
                    <p className="flashSalePrice px-4">${newPrice}</p>
                </div>
                <button className="cardBtn">Add To Card</button>
            </div>
        </div>

    );
};

export default ProductCard;