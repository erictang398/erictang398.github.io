import './animation.css'
import React, { useState } from 'react';
import { Typography } from '@mui/material';

const Animation = () => {
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })

    return (
        <div className="animation">
            <div className="name">
                <span className="lineUp" style={{
                    color: 'white',
                    fontSize: '80px',
                    }}>
                    <b>ERIC TANG</b>
                </span>
                <br/>
                <span className="lineUpOne" style={{
                    color: '#D6D5D5',
                    fontSize: '30px',
                    }}>
                    SOFTWARE DEVELOPER BASED IN TORONTO
                </span>
                <br/>
                <span className="lineUpTwo" style={{
                    color: '#D6D5D5',
                    fontSize: '30px',
                    }}>
                    STUDYING AT THE UNIVERSITY OF WATERLOO
                </span>
            </div>
            <div className="box">
            <ul>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li><li></li>
            </ul>
            </div>
            <div className="cursor"
                style={{
                    left: cursorX + 'px',
                    top: cursorY + 'px',
                }}
            >
            </div>
            <div className="down-arrow"></div>
            <Typography style={{
                right: '1%',
                bottom: '1%',
                position: 'absolute',
                zIndex: '5',
                color: 'white'
            }}>
                BUILT USING REACT
            </Typography>
        </div>
    )
}

export default Animation;