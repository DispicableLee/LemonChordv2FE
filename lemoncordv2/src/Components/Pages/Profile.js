import React from "react";
import { useNavigate } from "react-router-dom";
import UserData from "../UserData";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Button, cardActionAreaClasses, CardMedia } from "@mui/material";
import { useState, useEffect } from "react";
import SongList from "../SongList";
import Streamer from "../Streamer";

export default function Profile() {
  const callId = localStorage.id;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [postedSongs, setPostedSongs] = useState([]);
  const [playlists, setPlaylists] = useState([])
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [src, setSrc] = useState("");

  //================================= useEffect ====================================================
  useEffect(() => {
    // ======================= fetching user data ========================================
    fetch(`http://localhost:4002/api/v2/endPoints/search/users/${callId}`)
      .then((r) => r.json())
      .then((json) => {
        setUsername(json.userName);
        setFullName(json.fullName);
        setPassword(json.password);
        setEmail(json.email);
        setImage(json.image);
      });
    //============================ fetching user songs ==========================================
    fetch(
      `http://localhost:4002/api/v2/endPoints/search/all/usersongs/${callId}`
    )
      .then((r) => r.json())
      .then((json) => {
        setPostedSongs(json);
      });
    //===================== fetching all playlists ====================================
      fetch(`http://localhost:4002/api/v2/endPoints/search/all/playlists`)
      .then(setPlaylists)
    //======================== fetching user Playlists ===============================
    fetch(
      `http://localhost:4002/api/v2/endPoints/search/all/playlists/${callId}`
    )
      .then((r) => r.json())
      .then(setUserPlaylists);
  }, []);

  function getSrc(location) {
    console.log(location);
    setSrc(location);
  }
  //========================== handleDeleteSong ==========================================
  function handleDeleteSong(id) {
    const sUpdated = postedSongs.filter((song) => song.id != id);
    setPostedSongs(sUpdated);
  }

  const navigate = useNavigate();

  function logOut() {
    UserData.signOut();
    navigate("/");
  }
  return (
    <div>
      <Card
        style={{
          maxWidth: "75%",
          height: "500px",
          margin: "auto",
        }}
      >
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title={username}
          subheader={fullName}
        />
        <CardMedia
          component="img"
          image={image}
          alt="Paella dish"
          height="500"
        />
      </Card>
      <SongList
        displayedSongs={postedSongs}
        getSrc={getSrc}
        handleDeleteSong={handleDeleteSong}
      />
      <Streamer src={src} />
      <aside
        style={{
          float: "right",
        }}
      >
        <Button variant="contained" onClick={logOut}>
          Log Out
        </Button>
      </aside>
    </div>
  );
}
