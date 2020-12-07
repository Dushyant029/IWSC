// Made by K. Dushyant Reddy RA1911033010029 CSE-SE 2nd Yr


function validatePassword(){
    var password = document.getElementById("password")
  , cpassword = document.getElementById("cpassword");
  if(password.value == '') {
    alert("Please enter password")
    return false;
  } else if(cpassword.value == ''){
    alert("Please enter confirm password")
    return false;
  } else if(password.value != cpassword.value){
      alert("Password didnt match")
      return false;
  } else
      alert("Success")
      return true;
}