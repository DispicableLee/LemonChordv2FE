import React from "react";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Routes, Route, Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import SongList from "../SongList";
import Streamer from '../Streamer'
import PlaylistList from '../PlaylistList'
import { Box } from "@mui/system";

export default function HomeFeed(){
//=================== setting displayed songs ====================================
    const [displayedSongs, setDisplayedSongs] = useState([])
    const [src, setSrc] = useState("")
//===================== fetching songs to display ===========================
    useEffect(()=>{
        fetch("http://localhost:4002/api/v2/endPoints/search/all/songs")
        .then((res)=> res.json())
        .then((data) => setDisplayedSongs(data))
    },[])
    console.log(displayedSongs)

    function getSrc(location){
      console.log(location)
      setSrc(location)
    }
    return (
      <div>
        <Card sx={{ 
          maxWidth: "100%",
          padding: 6
          }}>
            <Box
              style={{
                padding: 10
              }}
            >
              <Link to="/playlistsList">Playlists</Link>
            </Box>
        <CardContent>
            <br/>
          <Typography gutterBottom variant="h5" component="div">
            Your Home Feed
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All songs from all our delicious Users!
          </Typography>
        </CardContent>
        <SongList displayedSongs={displayedSongs} getSrc={getSrc}/>
            <Streamer src={src}/>
      </Card>
        </div>
    )
}