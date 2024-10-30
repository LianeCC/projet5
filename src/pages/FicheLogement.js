import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import GalleryLogementPictures from "../components/GalleryLogementPictures";
import RatingStarChart from "../components/RatingStarChart";
import HostInformation from "../components/HostInformation";
import Collapse from "../components/Collapse";
import "./FicheLogement.scss";
import NotFound from "./NotFound";


const FicheLogement = () => {
    const { id } = useParams(); // hook de react-router-dom, récup id de l'url 

    const logement = logements.find(item => item.id === id); // parcoure le tbleau logement pr trouver l'item, dont l'id correspond à celui de lurl 

    if (!logement) {
        return <NotFound />;
    }

    return (
        <div className="logement-details">
            
            <GalleryLogementPictures pictures={logement.pictures} />

            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            
            <div className="tags">
                {logement.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>

            <RatingStarChart rating={logement.rating} />

            <HostInformation host={logement.host} />

            <div className="description-equipements-logement-details">
                <Collapse title="Description" content={logement.description} />
                <Collapse
                    title="Équipements"
                    content={logement.equipments.map((equipment, index) => (
                        <p key={index}>{equipment}</p>
                    ))}
                />
            </div>

        </div>
    );
};

export default FicheLogement;