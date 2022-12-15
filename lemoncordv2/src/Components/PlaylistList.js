import React from "react";
import { useState, useEffect } from "react";
import Playlist from './Playlist'
import Streamer from "./Streamer";

export default function PlaylistList({playlists}){
//================= getsrc===========================
    const [src, setSrc] = useState("")
    function getSrc(location){
      console.log(location)
      setSrc(location)
    }
    const renderedPlaylists = playlists.map((playlist)=>{
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
        )
    })
    return (
        <div 
            style={{
                overflow: 'auto'
            }}
        >
            {renderedPlaylists}
            <Streamer src={src}/>
        </div>
    )
}