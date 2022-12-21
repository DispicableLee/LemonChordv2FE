import React from "react";
import { useState, useEffect } from "react";
import Playlist from "./Playlist";
import Streamer from "./Streamer";
import { Link } from "react-router-dom";

export default function PlaylistList({ playlists }) {
  //================= getsrc===========================
  const [src, setSrc] = useState("");
  function getSrc(location) {
    console.log(location);
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
      />
    );
  });
  return (
    <div>
      <Link to="/">HomeFeed</Link>
      <div       
        style={{
          maxHeight: 1000,
          overflow: "auto",
        }}>
        {renderedPlaylists}
      </div>
      <Streamer src={src} />
    </div>
  );
}
