import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export default function Song({key, id, songName, location, likes, getSrc, handleDeleteSong}) {
const callId = localStorage.id
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
    backgroundColor: "rgb(27, 162, 177)",
    color: "rgb(226, 226, 226)",
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: "30px",
    width: 700,
    border: isHover ? " 2px solid rgb(76, 146, 148) " : "rgb(0, 191, 255)",
    overflow: 'auto'
  };
//=========================== playSong function =============================
function playSong(x){
  getSrc(x)
}
//========================== delete song function ===========================
function handleDelete(){
  console.log(id)
  fetch(`http://localhost:4002/api/v2/endPoints/delete/${id}/${callId}`, {
    method: "DELETE",
  })
  .then((r)=>r.json())
  .then(()=>{handleDeleteSong(id)})
}

  return (
    <div>
      <Divider />
      <Card
        sx={{ 
            width: "100%",
            height: 100
        
        }}
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
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
          <Typography color="white" gutterBottom>
            {songName}
            <br />
            {likes.length} Likes
          </Typography>

        </CardContent>
        <Box sx={{width: 300}}/>
        <IconButton onClick={handleDelete}>
          <DeleteIcon/>
        </IconButton>
      </Card>
      <Divider />
    </div>
  );
}
