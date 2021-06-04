import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import FlashSaleData from '../../components/FlashSale/FlashSaleData';
import Header from '../../components/Header/Header';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import HowToOrderFromUs from '../../components/HowToOrderFromUs/HowToOrderFromUs';
import MostPopularProduct from '../../components/MostPopularProduct/MostPopularProduct';


const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <HeaderMain></HeaderMain>
            <FlashSaleData></FlashSaleData>
            <MostPopularProduct></MostPopularProduct>
            <HowToOrderFromUs></HowToOrderFromUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default HomePage;