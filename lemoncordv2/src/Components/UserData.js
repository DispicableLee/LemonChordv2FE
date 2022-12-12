var UserData = (function() {
  var id = "";
  var userName = "";
  var email = "";
  var fullName = "";
  var image = "";


//======================= get data =========================

var getId = ()=>{
    return id;
}
var getUsername = ()=>{
    return userName;
}
var getEmail = ()=>{
    return email;
}

var getName = () =>{
  return fullName;    
};
  var getImage = ()=>{
    return image
  }
//======================= set data ==========================
  var setName = function(name) {
    fullName = name;     
    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName
  }

})();

export default UserData;