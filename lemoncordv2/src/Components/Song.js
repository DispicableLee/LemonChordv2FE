import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { border, style } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";

export default function Song({songName, location, likes, setSongSrc}) {
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
    display: "flex",
    fontSize: "30px",
    border: isHover ? " 2px solid rgb(76, 146, 148) " : "rgb(0, 191, 255)",
  };
//=========================== playSong function =============================
function playSong(e){
  e.preventDefault()
  fetch(`${location}`)
  .then(setSongSrc)
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
          <Typography color="white" gutterBottom>
            {songName}
            <br />
            {likes.length} Likes
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="white">
            adjective
          </Typography>
        </CardContent>
        <IconButton aria-label="play/pause" onClick={playSong}>
          <PlayArrowIcon 
            sx={{ height: 38, width: 38 }} />
        </IconButton>
      </Card>
      <Divider />
    </div>
  );
}
