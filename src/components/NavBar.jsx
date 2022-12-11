import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const theme = createTheme({
  palette: {
    buttons: {
      main: 'white',
      contrastText: 'black',
    },
    navyBlue: {
      main: '#00008B'
    },
    black: {
      main: 'black'
    },
    white: {
      main: 'white'
    },
    grey: {
      main: '#5A5A5A'
    }
  },
});

function ResponsiveAppBar(props) {
  const { colourful, setColourful } = props

  const handleChange = (event) => {
    setColourful(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="black" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div style={{
              margin: 'auto',
            }}>
              <Button
                className="navButtons"
                size="large"
                startIcon={<HomeIcon />}
                sx={{
                  ':hover': {
                    bgcolor: 'rgb(43, 40, 40)',
                    transitionDuration: '0.2s'
                  },
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3
                }}
              >
                <a href="#home" style={{textDecoration: 'none'}}>
                  <Typography style={{ color: 'white', fontWeight: '500', fontSize: '20px' }}>
                    HOME
                  </Typography>
                </a>
              </Button>
              <Button
                className="navButtons"
                size="large"
                startIcon={<EmojiPeopleIcon />}
                sx={{
                  ':hover': {
                    bgcolor: 'rgb(43, 40, 40)',
                    transitionDuration: '0.2s'
                  },
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3
                }}
              >
                <a href="#introduction" style={{textDecoration: 'none'}}>
                  <Typography style={{ color: 'white', fontWeight: '500', fontSize: '20px' }}>
                    INTRODUCTION
                  </Typography>
                </a>
              </Button>
              <Button
                className="navButtons"
                size="large"
                startIcon={<WorkHistoryIcon />}
                sx={{
                  ':hover': {
                    bgcolor: 'rgb(43, 40, 40)',
                    transitionDuration: '0.2s'
                  },
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3
                }}
              >
                <a href="#experience" style={{textDecoration: 'none'}}>
                  <Typography style={{ color: 'white', fontWeight: '500', fontSize: '20px' }}>
                    EXPERIENCE
                  </Typography>
                </a>
              </Button>
              <Button
                className="navButtons"
                size="large"
                startIcon={<ContactPageIcon />}
                sx={{
                  ':hover': {
                    bgcolor: 'rgb(43, 40, 40)',
                    transitionDuration: '0.2s'
                  },
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3
                }}
              >
                <a href="#contact" style={{textDecoration: 'none'}}>
                  <Typography style={{ color: 'white', fontWeight: '500', fontSize: '20px' }}>
                    CONTACT
                  </Typography>
                </a>
              </Button>
              <FormControlLabel control={<Switch checked={colourful} onChange={handleChange} name="Colours!"/>}
              label="Colours!"
              style={{color: "white"}}/>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;