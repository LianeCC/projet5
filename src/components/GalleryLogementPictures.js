import React from 'react';
import './GalleryLogementPictures.scss';

const GalleryLogementPictures = ({ pictures }) => {
    return (
        <div className="gallery">
            {pictures.map((picture, index) => (
                <img key={index} src={picture} alt={`Illustration du logement ${index + 1}`} className="gallery-image" />
            ))}
        </div>
    );
};

export default GalleryLogementPictures;