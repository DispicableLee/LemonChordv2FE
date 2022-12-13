import React from "react";
import { useState, useEffect } from "react";
import Playlist from './Playlist'

export default function PlaylistList(){
    const [playlists, setPlaylists] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4002/api/v2/endPoints/search/all/playlists")
        .then((r)=>r.json())
        .then((json)=>{
            setPlaylists(json)
        })
    }, [])
    console.log(playlists)

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