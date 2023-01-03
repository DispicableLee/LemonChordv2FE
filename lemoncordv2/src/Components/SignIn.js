import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import UserData from "./UserData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
    const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleSignin(){
    console.log(username)
    console.log(password)
    fetch(`http://localhost:4002/api/v2/endPoints/search/user/${username}/${password}`)
    .then((r)=>r.json())
    .then((json)=>{     
      console.log(json)
      UserData.setId(json._id)        
      UserData.setUsername(json.userName)        
      UserData.setPassword(json.password)        
      UserData.setName(json.fullName)        
      UserData.setEmail(json.email)
      UserData.setImage(json.image)            
    })

    handleClose()
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id=""
              label="Username"
              type="username"
              fullWidth
              variant="standard"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSignin}>Sign In</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
