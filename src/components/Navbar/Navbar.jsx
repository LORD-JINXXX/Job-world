import * as React from 'react';

import './navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';



const Navbar = () => {

  const navigate = useNavigate();

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem onClick={()=>navigate('/')}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={()=>navigate('/find')}>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary={"Find a Job"} />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={()=>navigate('/post')}>
          <ListItemButton>
            <ListItemIcon>
              <PersonSearchIcon />
            </ListItemIcon>
            <ListItemText primary={"Post a Job"} />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              {
                isAuthenticated ?
                  <LogoutIcon /> :
                  <LoginIcon />
              }
            </ListItemIcon>
            {
              isAuthenticated ?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> :
                <button onClick={() => loginWithRedirect()}>Login</button>
            }
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <main className='navMain'>
      <nav className='navContainer'>
        <div className="container">
          <ul>
            <li className='lineone'></li>

            <li className="containerOne">
              <span><h2>Job</h2></span>
              <span><h2>World</h2></span>
            </li>

            <li className='linetwo'></li>

            <li className="containerTwo">
              <Link to="/" className='link'>Home</Link>
              <Link to="/find" className='link'>Find a Job</Link>
              <Link to="/post" className='link'>Post a Job</Link>
            </li>

            <li className='linethree'></li>

            <li className="containerThree">
              {
                isAuthenticated ?
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> :
                  <button onClick={() => loginWithRedirect()}>Login</button>
              }

            </li>

            <li className='linefour'></li>
            
            <li className='containerFour'>
              <React.Fragment>
                <MenuIcon onClick={toggleDrawer("right", true)} className='menuIcon' />

                <Drawer
                  anchor='right'
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  {list("right")}
                </Drawer>
              </React.Fragment>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  )
}

export default Navbar;