import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navlinkData = [
  {
    text: 'About',
    href: '#about'
  },
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
  const { window, components } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navlinkData.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text} sx={{ color: '#03045E' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'block' }}>
      <AppBar 
        component="nav"
        position='static'
        elevation={0}
        sx={{ backgroundColor: '#D6EFFB' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}> 
          <Box>
            <Typography
              variant='h5'
              color='#03045E'
              fontWeight={700}
            >
              HC
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navlinkData.map((item) => (
              <Button href={item.href} key={item.text} sx={{ color: '#03045E' }}>
                <Typography variant='button' fontWeight={600}>{item.text}</Typography>
              </Button>
            ))}
          </Box>
          <IconButton
            aria-label="open drawer"
            edge='end'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, marginRight: '-8px' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor='right'
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