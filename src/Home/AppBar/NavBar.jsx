import React from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";

const NavBar = ({ open, setOpen }) => {
  return (
    <Box
      sx={{ backgroundColor: 'white', paddingTop: '12px' }}
    >
      <AppBar
        component='nav'
        position='sticky'
        elevation={0}
        sx={{ backgroundColor: 'white' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant='h5'
            color='black'
            fontWeight={600}
            fontSize={{ xs: 18, sm: 18, md: 22 }}
            sx={{ borderBottom: '4px solid white' }}
          >
            HC
          </Typography>
          <Box display='flex' flexDirection='row' justifyContent='space-between'>
            {navlinkData.map((item, idx) => {
              return (
                <Box 
                  px='20px' 
                  key={idx}
                >
                  <Link 
                    href={item.href}
                    sx={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant='h5'
                      color='black'
                      fontSize={{ xs: 16, sm: 18, md: 22 }}
                      fontWeight={600}
                      sx={[
                        {"&:hover": {
                          borderBottom: '4px solid #FF6464',
                          color: '#FF6464'
                        }},
                        {
                          borderBottom: '4px solid white',
                        }
                      ]}
                    >
                      {item.text}
                    </Typography>
                  </Link>
                </Box>
              )
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;

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