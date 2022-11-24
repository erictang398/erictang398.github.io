import React, { useState } from 'react';
import Introduction from './introduction.jsx'
import Projects from './project.jsx'
import Contact from './contact.jsx'

const Body = (props) => {
    const {colourful} = props

    return (
        <div className="main" style={{
            backgroundColor: `${colourful ? "#8BC6EC" : "#EFEFEF"}`,
            backgroundImage: `${colourful ? "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)" : "none"}`
        }}>
            <Introduction/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Body;