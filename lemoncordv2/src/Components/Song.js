import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";

export default function Song({key, id, songName, location, likes, getSrc}) {
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
    width: 700,
    border: isHover ? " 2px solid rgb(76, 146, 148) " : "rgb(0, 191, 255)",
  };
//=========================== playSong function =============================
function playSong(x){
  getSrc(x)

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
        <IconButton aria-label="play/pause" onClick={() => playSong(location)}>
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
      </Card>
      <Divider />
    </div>
  );
}
