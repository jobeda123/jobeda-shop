import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import loading from '../../images/loading.gif';


const ElectronicsPage = () => {
    const [electronicsProduct, setElectronicsProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(data => setElectronicsProduct(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <section className="my-5 container">
                <p className="sectionTitle">Electronics</p>
                {
                   electronicsProduct.length? <div className="sectionFlashSale">
                    <div className="row">
                        {
                            electronicsProduct.map(card =>
                                <ProductCard data={card} key={card.id}></ProductCard>)
                        }
                    </div>
                </div>
                : <img style={{width:"150px"}} src={loading} alt="" /> 
                }
            </section>
        </div>
    );
};

export default ElectronicsPage;