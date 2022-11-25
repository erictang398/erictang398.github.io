import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <>
            <div id="contact" style={{
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                borderBottom: `1px solid #D3D3D3`,
                overflow: 'hidden'
            }}>
                <Typography variant='h2' style={{
                    fontWeight: 'bold',
                    fontFamily: 'Abril Fatface',
                    marginBottom: '60px',
                    left: '15%',
                    top: '15vh',
                    position: 'relative',
                    maxWidth: '50%'
                }}>
                    Contact me <EmailIcon fontSize='large' /> <GitHubIcon fontSize='large' /> <LinkedInIcon fontSize='large' />
                </Typography>
                <br />
                <Typography color="black" style={{ 
                    fontSize: '25px', 
                    marginTop: '50px', 
                    left: '15%', 
                    position: 'relative'}}>
                    Email: tangeric398@gmail.com
                </Typography>
                <br />
                <Typography style={{
                    fontSize: '25px', 
                    left: '15%', 
                    position: 'relative', 
                    color: 'black'
                }}>
                    Github: <Link rel="noopener noreferrer" target="_blank" href="https://github.com/erictang398" style={{
                    fontSize: '25px'}}> Click </Link>
                </Typography>
                <br />
                <Typography style={{
                    fontSize: '25px', 
                    left: '15%', 
                    position: 'relative', 
                    color: 'black'
                }}>
                    LinkedIn: <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/eric-tang-88746223a/" style={{
                    fontSize: '25px'}}> Click </Link>
                </Typography>
            </div>
        </>
    )
}

export default Contact