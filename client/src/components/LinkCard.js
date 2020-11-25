/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

export const LinkCard = ({link}) => {
    return(
        <>
        <h2>Link</h2>
        <p>Shortened link: <a href={link.to} target="_blank" rel="noopener norefferer">{link.to}</a></p>
        <p>From: <a href={link.from} target="_blank" rel="noopener norefferer">{link.from}</a></p>
        <p>Number of clicks: <strong>{link.clicks}</strong></p>
        <p>Creation date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    );
};

