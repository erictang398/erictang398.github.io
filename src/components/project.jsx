import React, { useRef, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Monopoly from '../monopoly.jpg'
import imuppic from '../imup.PNG'
import './introduction.css'

const Projects = () => {
    const myRef = useRef()
    const [visible, setVisible] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])

    const imup = () => {
        return (
            <>
                <div style={{
                    position: 'relative',
                    justifyContent: 'center',
                }}>
                    <Typography variant="h2" style={{
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        color: 'grey',
                        textShadow: '2px 2px black',

                    }}>
                        IMUP
                    </Typography>
                    <img src={imuppic} style={{
                        height: '120px',
                        width: '130px',
                        left: `calc(50% - 65px)`,
                        position: 'relative'
                    }} />
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Image Uploading Website
                    </Typography>
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Built using HTML, CSS, JS, Firebase
                    </Typography>
                    <div style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        <Link rel="noopener noreferrer" target="_blank" href="https://github.com/SheepStar02/ImageUploader" style={{
                        }}>
                            Repository
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    const watopoly = () => {
        return (
            <>
                <div style={{
                    position: 'relative',
                    justifyContent: 'center',
                }}>
                    <Typography variant="h2" style={{
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        color: 'grey',
                        textShadow: '2px 2px black',

                    }}>
                        Watopoly
                    </Typography>
                    <img src={Monopoly}style={{
                        height: '120px',
                        width: '130px',
                        left: `calc(50% - 65px)`,
                        position: 'relative'
                    }} />
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Monopoly (the Waterloo version)
                    </Typography>
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Created using C++
                    </Typography>
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Various design patterns
                    </Typography>
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Memory management via vectors and smart pointers
                    </Typography>
                    <div style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        <Link rel="noopener noreferrer" target="_blank" href="https://github.com/erictang398/watopoly" style={{
                        }}>
                            Repository
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    const moreToCome = () => {
        return (
            <>
                <div style={{
                    position: 'relative',
                    justifyContent: 'center',
                }}>
                    <Typography variant="h2" style={{
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        color: 'grey',
                        textShadow: '2px 2px black',

                    }}>
                        More to come...
                    </Typography>
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Machine Learning Project Planned
                    </Typography>
                </div>
            </>
        )
    }

    return (
        <>
            <div ref={myRef} id="experience" style={{
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                borderBottom: `1px solid #D3D3D3`
            }}>
                <Typography className={`${visible ? "showTwo" : "hiddenTwo"}`} variant='h1' style={{
                    fontWeight: 'bold',
                    fontFamily: 'Abril Fatface',
                    marginBottom: '60px',
                    left: '15%',
                    top: '15vh',
                    position: 'relative',
                    maxWidth: '50%'
                }}>
                    Projects
                </Typography>
                <div className={`${visible ? "showTwo" : "hiddenTwo"}`} style={{
                    position: 'relative',
                    width: '75%',
                    margin: 'auto',
                    top: '20vh',
                    marginBottom: '30vh'
                }}>
                    <Grid container spacing={3}>
                        <Grid xs style={{
                            backgroundColor: 'white',
                            marginRight: '20px',
                            border: '2px solid #D3D3D3',
                        }}>
                            {imup()}
                        </Grid>
                        <Grid xs style={{
                            backgroundColor: 'white',
                            border: '2px solid #D3D3D3',
                        }}>
                            {watopoly()}
                        </Grid>
                        <Box width="100%" style={{marginBottom: '3vh'}}/>
                        <Grid xs style={{
                            backgroundColor: 'white',
                            marginRight: '20px',
                            border: '2px solid #D3D3D3',
                        }}>
                            {moreToCome()}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Projects