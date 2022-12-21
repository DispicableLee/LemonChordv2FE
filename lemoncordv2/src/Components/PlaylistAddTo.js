import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText"; 
import Typography from "@mui/material/Typography"; 
import { blue } from "@mui/material/colors";
const callId = localStorage.id;
//========================= dialog window=================================
function SimpleDialog(props) {
  const { onClose, selectedValue, open, setPlaylists, playlists, id } = props;
  const navigate = useNavigate()
  //============= add to playlist API call =================
  function addToPlaylist(playlistId) {
    fetch(
      `http://localhost:4002/api/v2/endPoints/add/song/${playlistId}/${id}`,
      {
        method: "POST",
      }
    );
    handleClose();
  }
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  //=============================== new playlist dialog-dialog ======================
  const [dialogOpen, setDialogOpen] = useState(false);
  //===================== new playlist states =======================
  const [playlistName, setPlaylistName] = useState("");
  const [playlistImage, setPlaylistImage] = useState("");

  const handleDialogClickOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  //====================== new playlist API call ====================
  function newPlaylist() {
    console.log(playlistName);
    console.log(playlistImage);
    console.log(id);
    const newObj = {
      name: playlistName,
      songs: [id],
      likes: [],
      userId: callId,
      image: playlistImage,
    };
    fetch(`http://localhost:4002/api/v2/endPoints/new/playlist/${callId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
    .then((r)=>r.json())
    .then((json)=>setPlaylists([...playlists, json]))
    handleClose()
  }

  return (
    // ================= add-to playlist dialog ===================
    <Dialog onClose={handleClose} open={open}>
      {/* ================= new playlist dialog ========================== */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Create a new Playlist!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Playlist Name"
            fullWidth
            variant="standard"
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Image URL"
            fullWidth
            variant="standard"
            onChange={(e) => setPlaylistImage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={newPlaylist}>Create Playlist!</Button>
        </DialogActions>
      </Dialog>
      <DialogTitle>Select playlist</DialogTitle>
      <List sx={{ pt: 0 }}>
        {playlists.map((playlist) => (
          <ListItem autoFocus key={playlist._id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={playlist.name}
              onClick={() => addToPlaylist(playlist._id)}
            />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={handleDialogClickOpen}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Create New Playlist" />
        </ListItem>
      </List>
    </Dialog>
  );
}
//============ refactor code above as const =====================================

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function PlaylistAddTo({ setPlaylists, playlists, id }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add To Playlist
      </Button>
      {open ? (
        <SimpleDialog
          open={open}
          onClose={handleClose}
          playlists={playlists}
          setPlaylists={setPlaylists}
          id={id}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
