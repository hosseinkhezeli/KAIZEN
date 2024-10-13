'use client';
import React from 'react';


const Cards = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div
            style={{
                backgroundColor: 'black',
                height: '50%',
                padding: 24,
                width: '50%',
            }}
        ></div>
    );
};

export default Cards;
