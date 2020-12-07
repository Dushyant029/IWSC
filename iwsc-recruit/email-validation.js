// Made by K. Dushyant Reddy RA1911033010029 CSE-SE 2nd Yr


function validateEmail(){
    var email=document.getElementById("email").value;
    var atindex=email.indexOf('@');
    var dotindex=email.lastIndexOf('.');

    if(atindex<=0 || atindex+1 >= dotindex || dotindex+1 >=email.length-1){
        alert("Invalid email")
        return false;
    }
    return true;
}









// Insert onload='document.form.email.focus()' in body tag
// Insert onclick="ValidateEmail(document.form.email)" in button tag


// function ValidateEmail(inputText)
// {
// var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("You have entered a valid email address!");    //The pop up alert for a valid email address
// document.form.email.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
// document.form.email.focus();
// return false;
// }
// }