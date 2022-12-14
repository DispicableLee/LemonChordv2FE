import React from "react";
import { useState, useEffect } from "react";
import Playlist from './Playlist'

export default function PlaylistList({playlists}){
    const renderedPlaylists = playlists.map((playlist)=>{
        return (
            <Playlist
                image={playlist.image}
                likes={playlist.likes}
                name={playlist.name}
                songs={playlist.songs}
            />
        )
    })
    return (
        <div>
            {renderedPlaylists}
        </div>
    )
}