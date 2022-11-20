import React, { useState } from "react";
import { uploadFile } from "react-s3";
import Box from '@mui/material/Box';
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = "lemoncord";
const REGION = "us-east-1";
const ACCESS_KEY = "AKIA4KLDG37L4QIFD3FO";
const SECRET_ACCESS_KEY = "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";
const DIRECTORY = "songs";

const config = {
  bucketName: S3_BUCKET,
  dirName: DIRECTORY,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

const S3Upload = () => {
//===================== file upload to s3============================
  const [selectedFile, setSelectedFile] = useState(null);
//====================== setting form data for use with mongoDb ===========================
    const [name, setName] = useState("")
    const [bucket, setBucket] = useState("")
    const [location, setLocation] = useState("")
    const [key, setKey] = useState("")

  const handleFileInput = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then((data) => {console.log(data)})
      .catch((err) => console.error(err));
  };

  return (
    <div>
        <Box>
      <div>React S3 File Upload</div>
      <form>
        <input 
            type="file" 
            onChange={handleFileInput} 
            />
        <button 
            onClick={() => handleUpload(selectedFile)}
            >
          {" "}
          Upload to S3
        </button>
      </form>
      </Box>
    </div>
  );
};

export default S3Upload;
