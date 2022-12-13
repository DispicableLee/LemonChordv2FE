import React from "react";
import { useNavigate } from "react-router-dom";
import UserData from "../UserData";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";

export default function Profile(){
    const navigate = useNavigate()
    console.log(localStorage.email)
    console.log(localStorage.username)
    console.log(localStorage.password)
    console.log(localStorage.email)
    console.log(localStorage.name)
    console.log(localStorage.image)

    function logOut(){
        UserData.signOut()
        navigate("/")
    }
    return (
        <div>
        <h1>
            hi
            {localStorage.username}
                 
        </h1>
        <h1>
            
            {localStorage.email}
                 
        </h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
            R
          </Avatar>
        }
        title={localStorage.username}
        subheader={localStorage.name}
      />
      <CardContent>

      </CardContent>
    </Card>
    <aside style={{
        float: 'right'
    }}>
        <Button
            variant="contained"
            onClick={logOut}
        >
            Log Out
        </Button>
    </aside>
        </div>
    )
}