import React, { useState } from "react";
import { uploadFile } from "react-s3";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
window.Buffer = window.Buffer || require("buffer").Buffer;

//====================== s3 upload ======================================
const S3_BUCKET = "lemoncord";
const REGION = "us-east-1";
// const ACCESS_KEY = ACCESS KEYS WITHHELD FOR SECURITY PURPOSES. RE-INSERT THE KEYS WHEN IT IS TIME FOR APPLICATION TESTING AND DEVELOPMENT
// const SECRET_ACCESS_KEY 
const DIRECTORY = "songs";

const config = {
  bucketName: S3_BUCKET,
  dirName: DIRECTORY,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

const S3Upload = () => {
  //========================= s3 file state ====================================
  const [selectedFile, setSelectedFile] = useState(null);
  //========================= mongoDB upload states ===========================
  const [name, setName] = useState("");
  const [bucket, setBucket] = useState("");
  const [key, setKey] = useState("");
  const [location, setLocation] = useState("");

  //============================ s3 upload handlers ===================================
  const handleFileInput = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = async (file) => {
    const newObj = {
        name: name,
        bucket: bucket,
        key: key,
        location: location
    }
    uploadFile(file, config)
      .then((data) => {
        console.log(data);
        setBucket(data.bucket);
        console.log(bucket);
        setKey(data.key);
        console.log(key);
        setLocation(data.location);
        console.log(location);
      })
      .catch((err) => console.error(err));
    
    fetch("http://localhost:4002/api/v2/endPoints/new/audio/637cde3874714cf3d1357643", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObj)
    })
    .then((data)=>console.log(data))
  };

  
  //================================= mongoDB api POST call ===============================

  return (
    <div style={{
        alignItems: "center",
        justifyContent: "center"
    }}>
      <div>React S3 File Upload</div>
      <br />
      <TextField label="Song name" />
      <Button variant="contained" component="label">
        Select File to Upload
        <input type="file" hidden onChange={handleFileInput} />
      </Button>
      <Button variant="contained" component="label" onClick={() => handleUpload(selectedFile)}>
        Upload Song
      </Button>
    </div>
  );
};

export default S3Upload;
