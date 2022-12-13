import React from "react";
import { useState } from "react";
import Song from './Song'

export default function SongList(displayedSongs){
    const toBeRendered = displayedSongs.displayedSongs
    console.log(toBeRendered)
    const renderedSongs = toBeRendered.map((s)=>{
        return (
            <Song
             key={s.id}
             id={s.id}
             songName={s.name}
             location={s.location}
             likes={s.likes}
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