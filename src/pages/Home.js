import React from 'react';
import Banner from "../components/Banner";
import "./Home.scss";
import Cards from '../components/Cards';
import homeBanner from "../images/image-banner-home.png";

const Home = () => {
    return (
        <div className="home">
            <Banner backgroundImage={homeBanner} text="Chez vous, partout et ailleurs" />
            <Cards />
        </div>

       
    );
};

export default Home;