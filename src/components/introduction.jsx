import React, { useRef, useEffect, useState } from 'react';
import './introduction.css'
import { Typography } from '@mui/material';
import waterloo from '../waterloo.png';
import uhndata from '../uhndata.png';
import rcmpiano from '../rcmpiano.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const Introduction = () => {
    const myRef = useRef()
    const [visible, setVisible] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])

    const schoolCard = () => {
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
                        textShadow: '2px 2px black'
                    }}>
                        Education
                    </Typography>
                    <img src={waterloo} style={{
                        borderRadius: '50px',
                        height: '100px',
                        width: '100px',
                        position: 'relative',
                        left: `calc(50% - 50px)`,
                    }} />
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        University of Waterloo mathematics student
                    </Typography>
                </div>
            </>
        )
    }

    const uhnCard = () => {
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
                        textShadow: '2px 2px black'
                    }}>
                        UHN Data Intern
                    </Typography>
                    <img src={uhndata} style={{
                        position: 'relative',
                        scale: '0.7',
                        height: '90px',
                        width: '270px',
                        left: `calc(50% - 135px)`,
                    }} />
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Software Developer internship at the University Health Network Data Team
                    </Typography>
                </div>
            </>
        )
    }

    const musicCard = () => {
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
                        Grade 10 Piano
                    </Typography>
                    <img src={rcmpiano} style={{
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
                        Played the piano for over 15 years, completed RCM Grade 10
                    </Typography>
                </div>
            </>
        )
    }

    return (
        <>
            <div style={{
                minHeight: '100vh',
                width: '100%',
                outline: '1px solid #D3D3D3',
                position: 'relative',
                borderBottom: '1px solid #D3D3D3'
            }}>
                <Typography className={`${visible ? "show" : "hidden"}`} variant='h1' style={{
                    fontWeight: 'bold',
                    fontFamily: 'Abril Fatface',
                    marginBottom: '60px',
                    left: '15%',
                    top: '15vh',
                    position: 'relative',
                    maxWidth: '50%'
                }}>
                    Hi I'm Eric
                </Typography>
                <div ref={myRef} style={{
                    position: 'relative',
                    width: '75%',
                    margin: 'auto',
                    top: '20vh',
                    marginBottom: '30vh'
                }}>
                    <Grid container spacing={3} className={`${visible ? "show" : "hidden"}`}>
                        <Grid xs style={{
                            backgroundColor: 'white',
                            marginRight: '20px',
                            border: '2px solid #D3D3D3',
                        }}>
                            {schoolCard()}
                        </Grid>
                        <Grid xs style={{
                            backgroundColor: 'white',
                            border: '2px solid #D3D3D3',
                        }}>
                            {uhnCard()}
                        </Grid>
                        <Grid xs style={{
                            backgroundColor: 'white',
                            marginLeft: '20px',
                            border: '2px solid #D3D3D3',
                        }}>
                            {musicCard()}
                        </Grid>
                        <Box width="100%" />
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Introduction