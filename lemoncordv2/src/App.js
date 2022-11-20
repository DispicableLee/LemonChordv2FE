import S3Upload from './Components/S3Upload';
import Login from './Components/Login';
import Logout from './Components/Logout'
import Header from './Components/Header'
import {useState, useEffect} from 'react'
function App() {
  useEffect(()=>{
    fetch("http://localhost:4002/api/v2/endPoints/search/all/songs")
    .then((res)=>res.json())
    .then(console.log)

  }, [])
  return (
    <div>
        <Header/>
        {/* <Logout/> */}
        <S3Upload/>
        {/* <Login/> */}
    </div>
  );
}

export default App;
