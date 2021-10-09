function createusers(){
  var user={
    fName:document.getElementById("fName").value,
    lName:document.getElementById("lName").value,
    email:document.getElementById("email").value
  }

  // XMLHttpRequest

  var sendInfo = new XMLHttpRequest();
  
  sendInfo.onreadystatechange = function (){ // Will Excute On Every State
    if(sendInfo.readyState == 4 && sendInfo.status ==201){
        console.log("User Added Successfully")
    }
  }
  sendInfo.open("POST","http://localhost:3000/users");
  sendInfo.setRequestHeader("Content-Type","application/json");
  sendInfo.send(JSON.stringify(user))
}