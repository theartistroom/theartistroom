import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const pages = [
  { label: 'Book Now', path: '/payment' },
  { label: 'Stays', path: '/stay' }
];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleNavigate = (path) => {
        setAnchorElNav(null);
        navigate(path);
    };



    return (
        <AppBar 
          position="static" 
          color='transparent'
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease'
          }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        src="/assets/images/theartistroomlogo.png"
                        alt="The Artist Room Logo"
                        style={{
                            height: 70,
                            marginRight: 12,
                            borderRadius: 12,
                            backgroundColor: '#fff',
                            padding: 8,
                            boxShadow: '0 4px 15px rgba(212, 85, 145, 0.15)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                          }}
                    />
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 700,
                            color: '#D45591',
                            textDecoration: 'none',
                        }}
                    >
                    <b>The Artist Room</b>
                    </Typography>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 500,
                            color: '#D45591',
                            textDecoration: 'none',
                        }}
                    >
                        The Artist Room
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={() => setAnchorElNav(null)}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.label} onClick={() => handleNavigate(page.path)}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', }}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                onClick={() => handleNavigate(page.path)}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    backgroundColor: '#D45591',
                                    margin: '0px 10px',
                                    fontWeight: 700,
                                    borderRadius: 2,
                                    px: 3,
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    "&::before": {
                                      content: '""',
                                      position: 'absolute',
                                      top: 0,
                                      left: '-100%',
                                      width: '100%',
                                      height: '100%',
                                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                      transition: 'left 0.3s ease'
                                    },
                                    "&:hover": {
                                        backgroundColor: "#D45591",
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 8px 20px rgba(212, 85, 145, 0.4)',
                                        "&::before": {
                                          left: '100%'
                                        }
                                    }
                                }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
