import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import UserData from "../UserData";
import { useNavigate } from "react-router-dom";

export default function BasicTextFields() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [imageFile, setImageFile] = useState(null);




  const handleChange = function loadFile(e) {
    if (e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      let blob = fetch(file).then(r=>r.blob())
      console.log(blob)
      setImageFile(file);
    }
  };




//================= New User Creation ============================
  function newUser(e) {
    e.preventDefault();
    const newObj = {
      userName: username,
      password: password,
      email: email,
      fullName: fullName,
      image: imageFile,
      postedSongs: [],
      postedPlaylists: [],
    };
    fetch("http://localhost:4002/api/v2/endPoints/new/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setId(json._id);
      });
    UserData.setUsername(username);
    UserData.setPassword(password);
    UserData.setName(fullName);
    UserData.setEmail(email);
    UserData.setImage(imageFile);
    UserData.setId(id);
    navigate("/Profile");
  }
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          onChange={(e) => setFullName(e.target.value)}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="file"
          onChange={handleChange}
          id="upload"
          accept="image/*"
        />
        <label htmlFor="upload" type="file"/>
          <div>
            <img alt="uploadImage" src={imageFile} style={{
              maxHeight: 200,
              maxWidth: 200
            }}/>
          </div>
        <br />
        <Button variant="contained" label="sign up" onClick={newUser}>
          Sign Up!
        </Button>
      </Box>
    </div>
  );
}
