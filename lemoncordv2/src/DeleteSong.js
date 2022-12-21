import { deleteFile } from 'react-s3';

var DeleteSong = (function(){
    const config = {
        bucketName: 'myBucket',
        dirName: 'school-documents',
        region: 'eu-west-1',
        accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
        secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
    }

    var deleteFile = (filename, config)
        .then(response => console.log(response))
        .catch(err => console.error(err))

    
    return {
        deleteFile: deleteFile
    }
});

export default DeleteSong

 
/* If the file that you want to delete it's in your bucket's root folder, don't provide any dirName in the config object */
 
//In this case the file that we want to delete is in the folder 'photos' that we referred in the config object as the dirName
 

 
 
