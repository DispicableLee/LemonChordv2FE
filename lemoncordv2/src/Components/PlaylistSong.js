import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function PlaylistSong({
  key,
  id,
  name,
  location,
  likes,
  getSrc,
}) {
  const callId = localStorage.id;
  //=================== hover state setting =========================
  // KEEP
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  //======================== card styling ==================================
  // KEEP
  const cardStyle = {
    backgroundColor: "",
    color: "#253237",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "30px",
    borderRadius: "0px 0px 0px 30px",
    width: 700,
    borderBottom: isHover ? " 2px solid #253237 " : "1px solid #253237",
    overflow: "auto",
  };
  //==================== playsong ================================
  function playSong(x) {
    console.log(x);
    getSrc(x);
  }
  return (
    <div>
      <br />
      <Card
        elevation={0}
        sx={{
          width: "100%",
          height: 50,
          padding: 3,
        }}
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconButton
          style={{
            float: "left",
          }}
          aria-label="play/pause"
          onClick={() => playSong(location)}
        >
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
        <Typography gutterBottom>
          {name}
          <br />
          {likes.length} Likes
        </Typography>
        <Divider />
        <CardContent></CardContent>
        <Box sx={{ width: 300 }} />
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <Divider />
      </Card>
    </div>
  );
}
