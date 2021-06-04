import React, { useEffect, useState } from 'react';
import FlashSaleCard from '../../components/FlashSaleCard/FlashSaleCard';
import './FlashSaleData.css';


const FlashSale = () => {

    const [flashSaleData, setFlashSaleData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(res => res.json())
            .then(data => setFlashSaleData(data))
    }, [])

    console.log(flashSaleData);

    return (
        <section className="my-5 container">
            <p className="sectionTitle">Flash Sale</p>
            <div className="sectionFlashSale">
                <div className="row">
                    {
                        flashSaleData.map(card =>
                            <FlashSaleCard data={card} key={card.id}></FlashSaleCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FlashSale;