import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';


const JewelleryPage = () => {
    const [jewelleryProduct, setJewelleryProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(data => setJewelleryProduct(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <section className="my-5 container">
                <p className="sectionTitle">Jewellery</p>
                <div className="sectionFlashSale">
                    <div className="row">
                        {
                            jewelleryProduct.map(card =>
                                <ProductCard data={card} key={card.id}></ProductCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JewelleryPage;