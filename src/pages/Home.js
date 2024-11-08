import React from "react";
import Banner from "../components/Banner";
import "./Home.scss";
import Cards from "../components/Cards";
import Tags from "../components/TagsLogement";

const Home = () => {
    return (
        <div className="home">
            <Banner page="home" text="Chez vous, partout et ailleurs"/>
            <Cards />
        </div>
    );
};

export default Home;