import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './MostPopularProduct.css';
import loading from '../../images/loading.gif';


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
            { mostPopularProduct.length? <div className="sectionFlashSale">
                <div className="row">
                    {
                        mostPopularProduct.map(card =>
                            <ProductCard data={card} key={card.id}></ProductCard>)
                    }
                </div>
            </div>
            : <img style={{width:"150px"}} src={loading} alt="" /> }
        </section>
    );
};

export default MostPopularProduct;