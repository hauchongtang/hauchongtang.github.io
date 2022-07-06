import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navlinkData = [
  {
    text: 'Experience',
    href: '#experience'
  },
  {
    text: 'Projects',
    href: '#projects'
  }
]

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'block', zIndex: 9999 }}>
      <AppBar 
        component="nav"
        position='static'
        elevation={0}
        sx={{ backgroundColor: '#212121' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}> 
          <Box>
            <Typography
              variant='h5'
              color='white'
              fontWeight={700}
            >
              HC
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
            {navlinkData.map((item) => (
              <Button href={item.href} key={item.text} sx={{ color: 'whitesmoke' }}>
                <Typography variant='button' fontWeight={600} fontSize={{ xs: 16, md: 18 }}>{item.text}</Typography>
              </Button>
            ))}
          </Box>
          <IconButton
            aria-label="open drawer"
            edge='end'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'none' }, marginRight: '-8px', color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;