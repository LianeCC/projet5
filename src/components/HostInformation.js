import React from 'react';
import './HostInformation.scss';

const HostInformation = ({ host }) => {
    return (
        <div className="host-info">
            <img src={host.picture} alt={host.name} className="host-picture" />
            <p>{host.name}</p>
        </div>
    );
};

export default HostInformation;