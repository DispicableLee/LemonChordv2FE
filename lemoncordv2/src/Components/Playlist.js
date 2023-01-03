import React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import PlaylistSong from "./PlaylistSong";
//====================================== handling playlist expanded list ==============================
const callId = localStorage.id
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Playlist({
  key,
  id,
  image,
  likes,
  name,
  songs,
  getSrc,
  handleDeleteSong,
  handleDeletePlaylist
}) {
  const [expanded, setExpanded] = useState(false);
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [playlistLikes, setPlaylistLikes]= useState(likes.length)
  //================================ fetching each song in playlist =====================================
  useEffect(() => {
    fetch(
      `http://localhost:4002/api/v2/endPoints/search/all/songs/playlist/${id}`
    )
      .then((r) => r.json())
      .then(setPlaylistSongs);
  }, []);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // =========== like/unliking playlist =========================
  function likeUnlikePlaylist(id){
    fetch(`http://localhost:4002/api/v2/endPoints/like/playlist/${id}/${callId}`, {
      method: "PUT"
    })
    .then((r)=>r.json())
    .then((json)=>{
      console.log(json.likes.length)
      setPlaylistLikes(json.likes.length)
    })
  }
  function handleDelete(){
    fetch(`http://localhost:4002/api/v2/endPoints/delete/playlist/${id}/${callId}`, {
      method: "DELETE"
    })
    .then((r)=>r.json())
    .then(handleDeletePlaylist(id))
  }

  //=========================== mapping out each fecthed song to the PlaylistSong component =============

  const renderedPlaylistSongs = playlistSongs.map((song) => {
    return (
      <PlaylistSong
        key={song._id}
        id={song._id}
        name={song.name}
        image={song.image}
        location={song.location}
        comments={song.comments}
        likes={song.likes}
        imageURL={song.image}
        getSrc={getSrc}
        handleDeleteSong={handleDeleteSong}
      />
    );
  });
  return (
    <Card
      sx={{
        maxWidth: "70%",
        backgroundColor: "white",
        margin: "auto",
        marginBottom: 2,
        padding: 2,
        overflow: 'auto'
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        }
        title={name}
        subheader=""
      />
      <CardMedia component="img" height="300" image={image} alt="Paella dish" />
      <CardContent></CardContent>
      <CardActions disableSpacing>
        {playlistLikes}
        <IconButton aria-label="add to favorites" onClick={()=>likeUnlikePlaylist(id)}>
          <FavoriteIcon/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{
          overflow: 'auto',
          maxHeight: '275px'
        }}>{renderedPlaylistSongs}</CardContent>
      </Collapse>
    </Card>
  );
}
