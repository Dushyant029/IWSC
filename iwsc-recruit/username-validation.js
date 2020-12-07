// Made by K. Dushyant Reddy RA1911033010029 CSE-SE 2nd Yr


function validateName(){
    var username = document.getElementById("username");
    if(username.value.length == ''){
        alert("Please enter username")
        return false;
    }else if (username.value.length < 5){
        alert("Username must be 5 char long")
        return false;
    }
        return true;
        
}