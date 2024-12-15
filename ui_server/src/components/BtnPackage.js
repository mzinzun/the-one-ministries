import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const btnPackage = (props) => {

    return (
        <>
            <Button data={{ className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }} />
            <Button data={{ className: 'newButton', url: "/", title: 'Home', li: [] }} />
            <Button data={{ className: 'newButton', url: "/", title: 'Log out' }} />
        </>
    )
}

export default btnPackage;