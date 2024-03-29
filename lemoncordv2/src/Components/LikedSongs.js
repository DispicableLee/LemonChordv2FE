import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { Button } from "@mui/material";
import PlaylistAddTo from './PlaylistAddTo'

export default function LikedSongs({key, id, songName, location, likes, getSrc, handleDeleteSong, playlists}) {
const callId = localStorage.id
const [likeCount, setLikeCount] = useState(likes.length)
  //=================== hover state setting =========================
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  //======================== card styling ==================================
  const cardStyle = {
    backgroundColor: "#E2E2E2",
    color: "#253237",
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: "30px",
    width: 450,
    height: 100,
    borderRadius: "0px 0px 0px 30px",
    borderBottom: isHover ? " 2px solid #253237 " : "1px solid #253237",
  };
//=========================== playSong function =============================
function playSong(x){
  getSrc(x)
}
//====================== like song function =============================
function likeUnlike(){
  console.log(id)
  console.log(callId)
  fetch(`http://localhost:4002/api/v2/endPoints/like/song/${id}/${callId}`, {
    method: "PUT"
  })
  .then((r)=>r.json())
  .then((json)=>{
    console.log(json.likes.length)
    setLikeCount(json.likes.length)
  })
}


  return (
    <div>
      <Divider />
      <Card
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent>
        <IconButton 
          style={{
            float: 'left'
          }}
          aria-label="play/pause" 
          onClick={() => playSong(location)}>
          <PlayArrowIcon />
        </IconButton>
          <Typography color="white" gutterBottom>
            {songName}
            <br />
            {likeCount} 
            <FavoriteIcon onClick={likeUnlike}/>
          </Typography>

        </CardContent>
        <Box sx={{width: 300}}/>
        <PlaylistAddTo playlists={playlists} id={id}/>

      </Card>
      <Divider />
    </div>
  );
}
