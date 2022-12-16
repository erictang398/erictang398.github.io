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

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

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

  const drawerWidth = 240;
  const navItems = ['Home', 'About', 'Contact'];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        NAVIGATE
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <ListItem>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <a href="#home" style={{textDecoration: 'none', margin: 'auto', color:'black'}}>
            <ListItemText primary="HOME" />
            </a>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <a href="#introduction" style={{textDecoration: 'none', margin: 'auto', color:'black'}}>
            <ListItemText primary="INTRODUCTION" />
            </a>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <a href="#experience" style={{textDecoration: 'none', margin: 'auto', color:'black'}}>
            <ListItemText primary="EXPERIENCE" />
            </a>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <a href="#contact" style={{textDecoration: 'none', margin: 'auto', color:'black'}}>
            <ListItemText primary="CONTACT" />
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem>
        <FormControlLabel control={<Switch checked={colourful} onChange={handleChange} name="Colours!"/>}
              label="Colours!"
              style={{color: "black", margin: 'auto'}}/>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{backgroundColor: 'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }}} style={{margin: 'auto'}}>
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
          </Box>

          {/* <box>
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
          </box> */}
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>

    // <ThemeProvider theme={theme}>
    //   <AppBar position="fixed" color="black" >
    //     <Container maxWidth="xl">
    //       <Toolbar disableGutters>
    //         <div style={{
    //           margin: 'auto',
    //         }}>
              // <Button
              //   className="navButtons"
              //   size="large"
              //   startIcon={<HomeIcon />}
              //   sx={{
              //     ':hover': {
              //       bgcolor: 'rgb(43, 40, 40)',
              //       transitionDuration: '0.2s'
              //     },
              //     borderRadius: 4,
              //     marginLeft: 3,
              //     marginRight: 3
              //   }}
              // >
              //   <a href="#home" style={{textDecoration: 'none'}}>
              //     <Typography style={{ color: 'white', fontWeight: '500', fontSize: '20px' }}>
              //       HOME
              //     </Typography>
              //   </a>
              // </Button>
              // <Button
              //   className="navButtons"
              //   size="large"
              //   startIcon={<EmojiPeopleIcon />}
              //   sx={{
              //     ':hover': {
              //       bgcolor: 'rgb(43, 40, 40)',
              //       transitionDuration: '0.2s'
              //     },
              //     borderRadius: 4,
              //     marginLeft: 3,
              //     marginRight: 3
              //   }}
              // >
              //   <a href="#introduction" style={{textDecoration: 'none'}}>
              //     <Typography style={{ color: 'white', fontWeight: '500', fontSize: '20px' }}>
              //       INTRODUCTION
              //     </Typography>
              //   </a>
              // </Button>
              // <Button
              //   className="navButtons"
              //   size="large"
              //   startIcon={<WorkHistoryIcon />}
              //   sx={{
              //     ':hover': {
              //       bgcolor: 'rgb(43, 40, 40)',
              //       transitionDuration: '0.2s'
              //     },
              //     borderRadius: 4,
              //     marginLeft: 3,
              //     marginRight: 3
              //   }}
              // >
              //   <a href="#experience" style={{textDecoration: 'none'}}>
              //     <Typography style={{ color: 'white', fontWeight: '500', fontSize: '20px' }}>
              //       EXPERIENCE
              //     </Typography>
              //   </a>
              // </Button>
              // <Button
              //   className="navButtons"
              //   size="large"
              //   startIcon={<ContactPageIcon />}
              //   sx={{
              //     ':hover': {
              //       bgcolor: 'rgb(43, 40, 40)',
              //       transitionDuration: '0.2s'
              //     },
              //     borderRadius: 4,
              //     marginLeft: 3,
              //     marginRight: 3
              //   }}
              // >
              //   <a href="#contact" style={{textDecoration: 'none'}}>
              //     <Typography style={{ color: 'white', fontWeight: '500', fontSize: '20px' }}>
              //       CONTACT
              //     </Typography>
              //   </a>
              // </Button>
              // <FormControlLabel control={<Switch checked={colourful} onChange={handleChange} name="Colours!"/>}
              // label="Colours!"
              // style={{color: "white"}}/>
    //         </div>
    //       </Toolbar>
    //     </Container>
    //   </AppBar>
    // </ThemeProvider>
  )
}

export default ResponsiveAppBar;