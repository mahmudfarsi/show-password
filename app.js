const password = document.getElementById("password");
const closee = document.getElementById("close");
   
closee.onclick = function(){
  if(password.type == "password"){
    password.type ="text";
    closee.src = "../img/eye.png";
  }else{
    password.type = "password";
    closee.src = "../img/eye (2).png";
  }
}