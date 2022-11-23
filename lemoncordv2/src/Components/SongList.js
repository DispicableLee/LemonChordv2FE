import React from "react";
import { useState } from "react";
import Song from './Song'

export default function SongList({displayedSongs, setSongSrc}){
    const toBeRendered = displayedSongs.displayedSongs
    console.log(toBeRendered)
    const renderedSongs = toBeRendered.map((s)=>{
        return (
            <Song
             songName={s.name}
             location={s.location}
             likes={s.likes}
             setSongSrc={setSongSrc}
            />
        )
    })
    return (
        <div>
        {renderedSongs}
        </div>
    )
}