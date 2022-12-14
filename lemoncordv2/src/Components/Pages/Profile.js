import React from "react";
import { useNavigate } from "react-router-dom";
import UserData from "../UserData";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Button, CardMedia } from "@mui/material";
import { useState, useEffect } from "react";

export default function Profile() {
    const callId = localStorage.id
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [image, setImage] = useState("")
    const [postedSongs, setPostedSongs] = useState([])
    const [postedPlaylists, setPostedPlaylists] = useState([])


    useEffect(()=>{
// ============================== fetching user data ========================================
        fetch(`http://localhost:4002/api/v2/endPoints/search/users/${callId}`)
        .then((r)=>r.json())
        .then((json)=>{
            console.log(json)   
            setUsername(json.userName)
            setFullName(json.fullName)
            setPassword(json.password)
            setEmail(json.email)
            setImage(json.image)
        })
//============================ fetching user songs ==========================================
        fetch(`http://localhost:4002/api/v2/endPoints/search/all/usersongs/${callId}`)
        .then((r)=>r.json())
        .then(console.log)

    }, [])
  const navigate = useNavigate();

  function logOut() {
    UserData.signOut();
    navigate("/");
  }
  return (
      <Card style={{ 
        maxWidth: "75%",
        maxHeight: "600px",
        margin: 'auto'

        }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title={username}
          subheader={fullName}
        />
        <CardContent
            style={{
                float: 'left'
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt="Paella dish"
                width="100"
            />
        </CardContent>
      <aside
        style={{
          float: "right",
        }}
      >
        <Button variant="contained" onClick={logOut}>
          Log Out
        </Button>
      </aside>
      </Card>
  );
}
