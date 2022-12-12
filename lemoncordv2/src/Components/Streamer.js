import React from "react";
import { useState } from "react";
import AudioPlayer from "material-ui-audio-player";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

export default function Streamer() {
  const [playReplay, setPlayReplay] = useState()

  return (
    <div 
      style={{
        borderTop: "1px solid #151515",
        borderRadius: "30px",
        padding: 30
      }}>
        <AudioPlayer
          elevation="0"
          displaySlider="true"
          volume="true"
          icons={{
            PlayIcon: PlayArrowRoundedIcon,
          }}
          variation="primary"
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          download={true}
        />
    </div>
  );
}
