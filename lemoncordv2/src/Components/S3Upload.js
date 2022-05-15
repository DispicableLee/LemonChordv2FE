import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;


const S3_BUCKET ='lemoncord';
const REGION ='us-east-1';
const ACCESS_KEY ='AKIA4KLDG37L2LDDWZGM';
const SECRET_ACCESS_KEY ='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';
const DIRECTORY = "peter123"

const config = {
    bucketName: S3_BUCKET,
    dirName: DIRECTORY,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const S3Upload = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        console.log(e.target.files)
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
}

export default S3Upload;