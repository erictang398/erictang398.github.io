import React from 'react';
import { isMobile } from 'react-device-detect';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Cube from './cube';

const Contact = () => {
    return (
        <>
            <div id="contact" style={{
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ 
                        zIndex: '2', flex: '1', left: '20%'}}>
                        <Typography variant='h2' style={{
                            fontWeight: 'bold',
                            fontFamily: 'Abril Fatface',
                            marginBottom: '20px',
                            left: '15%',
                            top: '15vh',
                            position: 'relative',
                            maxWidth: '50%',
                        }}>
                            Contact me
                        </Typography>
                        <Typography style={{
                            fontWeight: 'bold',
                            fontFamily: 'Abril Fatface',
                            marginBottom: '60px',
                            left: '15%',
                            top: '15vh',
                            position: 'relative',
                            maxWidth: '50%',
                        }}>
                        <EmailIcon fontSize='large' /> <GitHubIcon fontSize='large' /> <LinkedInIcon fontSize='large' />
                        </Typography>
                        <br />
                        <Typography color="black" style={{
                            fontSize: '25px',
                            marginTop: '50px',
                            left: '15%',
                            position: 'relative',
                            overflowWrap: 'anywhere',
                            marginRight: '15%'
                        }}>
                            tangeric398@gmail.com
                        </Typography>
                        <br />
                        <Typography style={{
                            fontSize: '25px',
                            left: '15%',
                            position: 'relative',
                            color: 'black'
                        }}>
                            <Link rel="noopener noreferrer" target="_blank" href="https://github.com/erictang398" style={{
                                fontSize: '25px'
                            }}> Github </Link>
                        </Typography>
                        <br />
                        <Typography style={{
                            fontSize: '25px',
                            left: '15%',
                            position: 'relative',
                            color: 'black'
                        }}>
                            <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/eric-tang-88746223a/" style={{
                                fontSize: '25px'
                            }}> LinkedIn </Link>
                        </Typography>
                    </div>
                    {/* <div style={{ width: '50%', height: '100%' }}> */}
                        <Cube style={{ right: '50%' }}/>
                    {/* </div> */}

                </div>
            </div>
        </>
    )
}

export default Contact