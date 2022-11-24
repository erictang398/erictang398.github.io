import React from 'react';
import './body.css'
import Introduction from './introduction.jsx'
import Projects from './project.jsx'

const Body = () => {
    return (
        <div className="main">
            <Introduction/>
            <Projects/>
            <div className="contact">
                contact
            </div>
        </div>
    )
}

export default Body;