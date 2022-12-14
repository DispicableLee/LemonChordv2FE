import React from "react";
import { useState } from "react";
import Song from './Song'

export default function SongList({displayedSongs, getSrc, handleDeleteSong}){

    const renderedSongs = displayedSongs.map((s)=>{
        return (
            <Song
             key={s.id}
             id={s._id}
             songName={s.name}
             location={s.location}
             likes={s.likes}
             getSrc={getSrc}
             handleDeleteSong={handleDeleteSong}
            />
        )
    })
    return (
        <div style={{
            padding: 10,
            float: 'left'
        }}>
        {renderedSongs}
        </div>
    )
}