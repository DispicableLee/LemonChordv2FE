import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import Playlist from "./Playlist";
import Streamer from "./Streamer";
import { Link } from "react-router-dom";

export default function PlaylistList({ playlists, handleDeletePlaylist }) {
  //================= getsrc===========================

  const [src, setSrc] = useState("");
  function getSrc(location) {
    setSrc(location);
  }
  const renderedPlaylists = playlists.map((playlist) => {
    return (
      <Playlist
        key={playlist._id}
        id={playlist._id}
        image={playlist.image}
        likes={playlist.likes}
        name={playlist.name}
        songs={playlist.songs}
        getSrc={getSrc}
        handleDeletePlaylist={handleDeletePlaylist}
      />
    );
  });
  return (
    <Box>
      <Box style={{
        padding: 10
      }}>
        <Link to="/">HomeFeed</Link>
      </Box>
      <Card       
        style={{
          maxHeight: 1000,
          overflow: "auto",
          margin: 'auto'
        }}>
        {renderedPlaylists}
      </Card>
      <Streamer src={src} />
    </Box>
  );
}
