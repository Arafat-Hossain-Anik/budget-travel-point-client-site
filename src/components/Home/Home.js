import React from 'react';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Blog from '../Extra/Blog';
import WhyUs from '../Extra/WhyUs'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <WhyUs></WhyUs>
            <AboutUs></AboutUs>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;