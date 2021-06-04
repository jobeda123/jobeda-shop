import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import loading from '../../images/loading.gif';


const WomenClothingPage = () => {
    const [womenProduct, setWomenProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
            .then(res => res.json())
            .then(data => setWomenProduct(data))
    }, [])

    // console.log(womenProduct);

    return (
        <div>
            <Header></Header>
            <section className="my-5 container">
                <p className="sectionTitle">Women's Clothing</p>
                { womenProduct.length? <div className="sectionFlashSale">
                    <div className="row">
                        {
                            womenProduct.map(card =>
                                <ProductCard data={card} key={card.id}></ProductCard>)
                        }
                    </div>
                </div>
                : <img style={{width:"150px"}} src={loading} alt="" /> }
            </section>
        </div>
    );
};

export default WomenClothingPage;