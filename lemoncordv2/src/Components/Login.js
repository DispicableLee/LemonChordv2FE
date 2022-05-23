import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../Components/styles/splashPage.css';
import logo from './images/limeWireLogo.png';
import Button from '@mui/material/Button';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return ( 

    <div>
            <div className="split left">
                <div className="centered">
                    <img src={logo}/>
                </div>
            </div>

            <div className="split right">
                <div className="centered">
                    <h2>LemonCord</h2>
                    <Button href ="/api/auth/login" className="loginB" variant="outlined">Log In</Button>
                </div>
            </div>
    </div>
    
  )
};

export default Login;