import React from "react";
import {ThemeProvider } from "@mui/material";
import AudioPlayer from "material-ui-audio-player";
import {streamTheme} from './styling/Themes'

export default function Streamer() {

  return (
    <div>
      <ThemeProvider>
        <AudioPlayer 
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            download={true}
            />
      </ThemeProvider>
    
    </div>
  );
}
