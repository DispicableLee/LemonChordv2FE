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
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//===================== drawer dependancies =============================
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//============ importing component routes ===============================
import lemonChord from "./Components/styling/1036.png";
import PlaylistList from "./Components/PlaylistList";
import ProfilePlaylists from "./Components/ProfilePlaylists";
import HomeFeed from "./Components/Pages/HomeFeed";
import NewUser from "./Components/Pages/NewUser";
import SignIn from "./Components/SignIn";
import S3Upload from "./Components/Pages/S3Upload";
import Profile from "./Components/Pages/Profile";

function App() {
  const profileUrl = localStorage.image;
  const navigate = useNavigate();
  const [displayedSongs, setDisplayedSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
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
  useEffect(() => {
    fetch("http://localhost:4002/api/v2/endPoints/search/all/songs")
      .then((res) => res.json())
      .then((json) => {
        setDisplayedSongs(json);
      });

    fetch("http://localhost:4002/api/v2/endPoints/search/all/playlists")
      .then((r) => r.json())
      .then((json) => {
        setPlaylists(json);
      });
  }, []);

  //========================== handle delete playlist ======================
function handleDeletePlaylist(id){
  console.log(id)
  const updatedPlaylistList = playlists.filter((pList)=>!(pList._id==id))
  setPlaylists(updatedPlaylistList)
}
  //========================= drawer theme =============================
  const drawerWidth = 240;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  //======================= reload page upon sign in ==================
  function pageReload(){
    console.log("reloading")
    window.location.reload()
  }

  return (
    <div>
      <AppBar
        position="static"
        style={{
          backgroundColor: "rgb(27, 162, 177)",
          color: "rgb(226, 226, 226)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              style={{
                maxHeight: 40,
                cursor: "pointer",
              }}
              src={lemonChord}
              onClick={!open ? handleDrawerOpen : handleDrawerClose}
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* ================= setting up ul with links ==================== */}
            </Box>
            {/* ======================== nav menu options =========================================== */}

            {localStorage.id ? 
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={profileUrl} />
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
             : 
              <SignIn pageReload={pageReload} />
            }
          </Toolbar>
        </Container>
        {/* =============== drawer ================== */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {/* ========= drawer links ===================== */}
            <ListItem>
              <ListItemButton>
                <Link to="/">Home Feed</Link>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/new-song">Upload a song</Link>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/new-user">Create an account!</Link>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/playlistsList">Playlists</Link>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>

        {/* ====================== setting up routes =========================== */}
      </AppBar>
      <Routes>
        <Route
          path="/"
          element={
            <HomeFeed
              setDisplayedSongs={setDisplayedSongs}
              displayedSongs={displayedSongs}
              setPlaylists={setPlaylists}
              playlists={playlists}
            />
          }
        />
        <Route path="/new-user" element={<NewUser />} />
        <Route
          path="new-song"
          element={
            <S3Upload
              setDisplayedSongs={setDisplayedSongs}
              displayedSongs={displayedSongs}
            />
          }
        />
        <Route
          path="/playlistsList"
          element={<PlaylistList playlists={playlists} handleDeletePlaylist={handleDeletePlaylist}/>}
        />
        <Route path="/profilePlaylists" element={<ProfilePlaylists />} />
        <Route path="/signin" element={<SignIn pageReload={pageReload}/>} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
