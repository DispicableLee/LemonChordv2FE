import React, { useState } from "react";
import { uploadFile } from "react-s3";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
window.Buffer = window.Buffer || require("buffer").Buffer;

//====================== s3 upload ======================================
const S3_BUCKET = "lemoncord";
const REGION = "us-east-1";
const ACCESS_KEY = "blah"
//ACCESS KEYS WITHHELD FOR SECURITY PURPOSES. 
// RE-INSERT THE KEYS WHEN IT IS TIME FOR APPLICATION TESTING AND DEVELOPMENT
const SECRET_ACCESS_KEY = "blahblah"
const DIRECTORY = "songs";
const callId = localStorage.id
console.log(callId)

const config = {
  bucketName: S3_BUCKET,
  dirName: DIRECTORY,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

export default function S3Upload ({setDisplayedSongs, displayedSongs}){
  const navigate = useNavigate()
  //========================= s3 file state ====================================
  const [selectedFile, setSelectedFile] = useState(null);
  //========================= mongoDB upload states ===========================
  const [name, setName] = useState("");
  const [uploadBucket, setUploadBucket] = useState("");
  const [uploadKey, setUploadKey] = useState("");
  const [uploadLocation, setUploadLocation] = useState("");
  const [image, setImage] = useState("")

  //============================ s3 upload handlers ===================================
  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = async (file) => {
    uploadFile(file, config)
    .then((data)=>{
      console.log(data)
      console.log(data.bucket)
      console.log(data.key)
      console.log(data.location)
      const newObj = {
          name: name,
          bucket: data.bucket,
          key: data.key,
          location: data.location,
          likes: [],
          userId: callId,
          image: image,
          comments: []
      }
      console.log(newObj)
      fetch(`http://localhost:4002/api/v2/endPoints/new/audio/${callId}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newObj)
      })
      .then((r)=>r.json())
      .then((json)=>{
        console.log(json)
        setDisplayedSongs([...displayedSongs, json])
      })

    })
    .catch((err) => console.error(err));
    
    navigate("/")

  };

  
//========================================= mongoDB api POST call =============================================

  return (
    <div style={{
        alignItems: "center",
        justifyContent: "center"
    }}>
      <div>React S3 File Upload</div>
      <br />
      <TextField 
      label="Song name"
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField 
        label="image"
        onChange={(e)=>setImage(e.target.value)}
      />
      <Button 
        variant="contained" 
        component="label">
        Select File to Upload
        <input type="file" hidden onChange={handleFileInput} />
      </Button>
      <Button 
        variant="contained" 
        component="label" 
        onClick={() => handleUpload(selectedFile)}>
        Upload Song
      </Button>
    </div>
  );
};
