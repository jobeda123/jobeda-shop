import React from 'react';
import FlashSaleData from '../../components/FlashSale/FlashSaleData';
import Header from '../../components/Header/Header';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import MostPopularProduct from '../../components/MostPopularProduct/MostPopularProduct';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <HeaderMain></HeaderMain>
            <FlashSaleData></FlashSaleData>
            <MostPopularProduct></MostPopularProduct>
        </div>
    );
};

export default HomePage;