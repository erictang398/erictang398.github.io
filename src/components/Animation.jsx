import './Animation.css'
import React, {useState} from 'react';

const Animation = () => {
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })

    return (
        <div className="animation">
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
        </div>
    )
}

export default Animation;