import React from 'react';
import Banner from "../components/Banner";
import "./Apropos.scss"
import aproposBanner from '../images/image-banner-apropos.png';


const Apropos = () => {
    return (
        <div className="a-propos">
            <Banner backgroundImage={aproposBanner} text="À propos de nous" />
        </div>
    );
};

export default Apropos;
