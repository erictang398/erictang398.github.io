import React, { useRef, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Monopoly from '../monopoly.jpg'
import imuppic from '../imup.PNG'
import Language from '../language.jpg'
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
                        overflowWrap: 'anywhere'
                    }}>
                        IMUP
                    </Typography>
                    <img src={imuppic} style={{
                        height: '40%',
                        width: '40%',
                        left: `30%`,
                        position: 'relative',
                        marginTop: '2%',
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

    const languageRecognition = () => {
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
                        overflowWrap: 'anywhere'
                    }}>
                        Language Recognition
                    </Typography>
                    <img src={Language} style={{
                        height: '40%',
                        width: '40%',
                        left: `30%`,
                        marginTop: '2%',
                        position: 'relative'
                    }} />
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Language Recognition Model
                    </Typography>
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Starter ML project using the Multinomial Naive Bayes algorithm
                    </Typography>
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        96.4% accuracy recognizing
                    </Typography>
                    <div style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        <Link rel="noopener noreferrer" target="_blank" href="https://github.com/erictang398/language-recognition" style={{
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
                        overflowWrap: 'anywhere'
                    }}>
                        Watopoly
                    </Typography>
                    <img src={Monopoly}style={{
                        height: '40%',
                        width: '40%',
                        left: `30%`,
                        position: 'relative',
                        marginTop: '2%',
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
                        overflowWrap: 'anywhere'
                    }}>
                        More to come...
                    </Typography>
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        More advanced machine learning project planned
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
                <Typography className={`${visible ? "showTwo" : "hiddenTwo"}`} variant='h2' style={{
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
                            {languageRecognition()}
                        </Grid>
                        <Grid xs style={{
                            backgroundColor: 'white',
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