import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";

export default function NewUser(signedIn) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  function newUser(e) {
    e.preventDefault();
    const newObj = {
      email: email,
      fullName: fullName,
      userName: username,
      postedSongs: [],
    };
    fetch("http://localhost:4002/api/v2/endPoints/new/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
    })
    .then((res)=>res.json())
    .then((json)=>signedIn(json))
  }
  return (
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
      <TextField
        id="filled-basic"
        label="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="username"
        variant="outlined"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <Button variant="contained" label="sign up" onClick={newUser}>Sign Up!</Button>
    </Box>
  );
}
