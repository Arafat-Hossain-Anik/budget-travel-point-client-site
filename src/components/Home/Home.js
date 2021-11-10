import React from 'react';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Part1 from '../Extra/Part1';
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
            <Part1></Part1>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;