import React from "react";
import {ThemeProvider } from "@mui/material";
import AudioPlayer from "material-ui-audio-player";
import {streamTheme} from './styling/Themes'

export default function Streamer(songSrc) {

  return (
    <div>
      <ThemeProvider>
        <AudioPlayer 
            src={songSrc}
            download={true}
            />
      </ThemeProvider>
    
    </div>
  );
}
