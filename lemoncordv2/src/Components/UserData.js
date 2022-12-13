var UserData = (function () {
  //================= data ==========================
  var iD = "";
  var userName = "";
  var passWord = "";
  var eMail = "";
  var fullName = "";
  var iMage = "";

  //======================= get data =========================

  var getId = () => {
    return iD;
  };
  var getUsername = () => {
    return userName;
  };

  var getPassword = ()=>{
    return passWord
  }
  var getEmail = () => {
    return eMail;
  };

  var getName = () => {
    return fullName;
  };
  var getImage = () => {
    return iMage;
  };
  //======================= set data ==========================

  var setId = (id)=>{
    iD = id
    localStorage.setItem("id", iD)
  }
  var setUsername = (username) => {
    userName = username;
    localStorage.setItem("username", userName);
  };

  var setPassword = (password)=>{
    passWord = password
    localStorage.setItem("password", passWord)
  }
  var setName = function (name) {
    fullName = name;
    // Also set this in cookie/localStorage
    localStorage.setItem("name", fullName);
  };

  var setEmail = (email)=>{
    eMail = email
    localStorage.setItem("email", eMail)
  }

  var setImage = (image)=>{
    iMage = image
    localStorage.setItem(iMage)
  }

  var signOut=()=>{
    localStorage.clear()
  }

  return {
    getId: getId,
    setId: setId,

    getUsername: getUsername,
    setUsername: setUsername,

    getPassword: getPassword,
    setPassword: setPassword,

    getEmail: getEmail,
    setEmail: setEmail,

    getName: getName,
    setName: setName,

    getImage: getImage,
    setImage: setImage,

    signOut: signOut
  };
})();

export default UserData;
