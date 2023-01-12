import React from "react";
import { useState, useEffect } from "react";
import Playlist from "./Playlist";

export default function ProfilePlaylists({ playlists, getSrc }) {
  console.log(playlists)
  //================= getsrc===========================
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
      <div       
        style={{
          maxHeight: 1000,
          overflow: "auto",
        }}>
        {renderedPlaylists}
      </div>
    </div>
  );
}
