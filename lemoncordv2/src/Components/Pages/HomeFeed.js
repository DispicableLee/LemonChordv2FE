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

export default function HomeFeed({setDisplayedSongs,displayedSongs, setPlaylists, playlists}){
//=================== setting displayed songs ====================================
    const [src, setSrc] = useState("")
//===================== fetching songs to display ===========================

    function getSrc(location){
      console.log(location)
      setSrc(location)
    }
//========================== handleDeleteSong ==========================================
function handleDeleteSong(id){
  const sUpdated = displayedSongs.filter((song)=>song._id=!id)
  setDisplayedSongs(sUpdated)
}
    return (
      <div>
        <Card sx={{ 
          maxWidth: "75%",
          margin: 'auto',
          padding: 6,
          backgroundColor: "#E2E2E2"
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
        <SongList 
          displayedSongs={displayedSongs} 
          getSrc={getSrc} 
          handleDeleteSong={handleDeleteSong}
          setPlaylists={setPlaylists}
          playlists={playlists}
          />
            <Streamer src={src}/>
      </Card>
        </div>
    )
}