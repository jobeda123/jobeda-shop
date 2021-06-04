import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './MostPopularProduct.css';

const MostPopularProduct = () => {
    const [mostPopularProduct, setMostPopularProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(data => setMostPopularProduct(data))
    }, [])

    //console.log(mostPopularProduct);

    return (
        <section className="my-5 container">
            <p className="sectionTitle">Most Popular Products</p>
            <div className="sectionFlashSale">
                <div className="row">
                    {
                        mostPopularProduct.map(card =>
                            <ProductCard data={card} key={card.id}></ProductCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MostPopularProduct;