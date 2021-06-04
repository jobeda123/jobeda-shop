import { Button, Card } from 'react-bootstrap';
import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { title, image, price, id } = props.data;

    return (
        <div className="col-md-3 my-2">
            <div className="productCard">
                <img src={image} alt="Not Found" />
                <div>
                    <p style={{ fontSize: "1rem", padding: "5px 2px" }}>{title}</p>
                </div>
                <div className="d-flex mx-2 my-2">
                    <p className="productCardLower px-2">${price}</p>
                    <button className="cardBtn">Add To Card</button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;