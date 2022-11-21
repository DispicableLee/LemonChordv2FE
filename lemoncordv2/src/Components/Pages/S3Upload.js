import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;

//====================== s3 upload ======================================
const S3_BUCKET ='lemoncord';
const REGION ='us-east-1';
const ACCESS_KEY ='AKIA4KLDG37LZHRZUQ7T';
const SECRET_ACCESS_KEY ='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';
const DIRECTORY = "songs"

const config = {
    bucketName: S3_BUCKET,
    dirName: DIRECTORY,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const S3Upload = () => {
//========================= s3 file state ====================================
    const [selectedFile, setSelectedFile] = useState(null);
//========================= mongoDB upload states ===========================
    const [name, setName]= useState("")
    const [bucket, setBucket]= useState("")
    const [key, setKey]= useState("")
    const [location, setLocation]= useState("")

//============================ s3 upload handlers ===================================
    const handleFileInput = (e) => {
        console.log(e.target.files)
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0]);
    }
    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => {
                console.log(data)
                setBucket(data.bucket)
                console.log(bucket)
                setKey(data.key)
                console.log(key)
                setLocation(data.location)
                console.log(location)
            })
            .catch(err => console.error(err))
    }
//================================= mongoDB api POST call ===============================
    // function mongoPost(e){
    //     e.preventDefault()
    //     fetch("")
    // }

    return <div>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
}

export default S3Upload;