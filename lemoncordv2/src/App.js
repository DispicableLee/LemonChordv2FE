import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Button } from "@mui/material";
import { Routes, Route, Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
//===================== drawer dependancies =============================
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//============ importing component routes ===============================
import lemonChord from './Components/styling/1036.png'
import PlaylistList from "./Components/PlaylistList";
import HomeFeed from "./Components/Pages/HomeFeed";
import NewUser from "./Components/Pages/NewUser";
import SignIn from './Components/SignIn'
// import S3Upload from "./Components/Pages/S3Upload";
import Profile from "./Components/Pages/Profile";

function App() {
  const navigate = useNavigate()
  const [displayedSongs, setDisplayedSongs] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  //================= open/close nav menu =============================
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
//=================================== api calls for songs and playlists ====================================
    useEffect(()=>{
        fetch("http://localhost:4002/api/v2/endPoints/search/all/songs")
        .then((res)=> res.json())
        .then((json) => {
          setDisplayedSongs(json)}
          )
        
        fetch("http://localhost:4002/api/v2/endPoints/search/all/playlists")
        .then((r)=>r.json())
        .then((json)=>{
            setPlaylists(json)
        })

    },[])

  return (
    <div>
      <AppBar position="static" 
        style={{
          backgroundColor: 'rgb(27, 162, 177)',
          color: "rgb(226, 226, 226)"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              style={{
                maxHeight: 40,
                cursor: 'pointer'
              }}
              src={lemonChord}
              
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LemonChord
            </Typography>
              
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex",  }  }}>
              {/* ================= setting up ul with links ==================== */}
              <ul
                sx={{display: "inline"}}
                style={{
                  display: "inline",
                  listStyleType: "none"
                }}
                >
                <li>
                  <Link to="/">Home Feed</Link>
                </li>
                {/* <li>
                  <Link to="/new-song">Upload a song</Link>
                </li> */}
                <li>
                  <Link to="/new-user">Create an account!</Link>
                </li>
              </ul>
            </Box>
{/* ======================== nav menu options =========================================== */}
            <Box sx={{ flexGrow: 0 }}>
                <SignIn/>
              
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/1c/53/c5/1c53c5b3f3c6e788bfd32f2b4d54ed59.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  <Link to="/Profile">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  </Link>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        {/* ====================== setting up routes =========================== */}
      </AppBar>
      <Routes>
        <Route path="/" element={<HomeFeed setDisplayedSongs={setDisplayedSongs} displayedSongs={displayedSongs}/>}/>
        <Route path="/new-user" element={<NewUser />}/>
        {/* <Route path="new-song" element={<S3Upload />}/> */}
        <Route path="/playlistsList" element={<PlaylistList playlists={playlists}/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/Profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
