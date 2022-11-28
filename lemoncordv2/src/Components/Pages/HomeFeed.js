import React from "react";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import SongList from "../SongList";
import Streamer from '../Streamer'

export default function HomeFeed(){
//=================== setting displayed songs ====================================
    const [displayedSongs, setDisplayedSongs] = useState([])
//===================== fetching songs to display ===========================
    useEffect(()=>{
        fetch("http://localhost:4002/api/v2/endPoints/search/all/songs")
        .then((res)=> res.json())
        .then(setDisplayedSongs)
        console.log(displayedSongs)

    },[])
    return (
        <Card sx={{ maxWidth: "100%" }}>
        <CardContent>
            <Streamer/>
            <br/>
          <Typography gutterBottom variant="h5" component="div">
            Your Home Feed
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All songs from all our delicious Users!
          </Typography>
        </CardContent>
        <SongList displayedSongs={displayedSongs}/>
      </Card>
    )
}