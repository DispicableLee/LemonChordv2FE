import React from "react";
import LikedSongs from "./LikedSongs";

export default function LikedSongsList({likedSongs, getSrc, handleDeleteSong, setPlaylists ,playlists}) {
  const renderedLikes = likedSongs.map((song) => {
    return (
      <LikedSongs
        key={song._id}
        id={song._id}
        songName={song.name}
        location={song.location}
        likes={song.likes}
        getSrc={getSrc}
        handleDeleteSong={handleDeleteSong}
        setPlaylists={setPlaylists}
        playlists={playlists}
      />
    );
  });
  return (
    <div>
        {renderedLikes}
    </div>);
}
