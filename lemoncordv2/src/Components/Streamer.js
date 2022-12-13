import React from "react";
import { useState } from "react";
import AudioPlayer from "material-ui-audio-player";

export default function Streamer(src) {

  return (
    <div style={{
      padding: 10
    }}>
      {/* <ThemeProvider> */}
        <AudioPlayer 
            src={src.src}
            download={true}
            autoplay= {true}
            />
      {/* </ThemeProvider> */}
    
    </div>
  );
}
