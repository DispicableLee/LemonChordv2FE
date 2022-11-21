import React from "react";
import { useState } from "react";
import Song from './Song'

export default function SongList(displayedSongs){
    const toBeRendered = displayedSongs.displayedSongs
    console.log(toBeRendered)
    return (
        <Song/>
    )
}