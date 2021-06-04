import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import loading from '../../images/loading.gif';


const MenClothingPage = () => {
    const [menProduct, setMenProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
            .then(res => res.json())
            .then(data => setMenProduct(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <section className="my-5 container">
                <p className="sectionTitle">Men's Clothing</p>
                {
                    menProduct.length? <div className="sectionFlashSale">
                    <div className="row">
                        {
                            menProduct.map(card =>
                                <ProductCard data={card} key={card.id}></ProductCard>)
                        }
                    </div>
                </div>
                : <img style={{width:"150px"}} src={loading} alt="" /> }
            </section>
        </div>
    );
};

export default MenClothingPage;