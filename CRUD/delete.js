function deleteuser(i){
    var userInfo = new XMLHttpRequest();
    userInfo.onreadystatechange = function (){
        if(userInfo.readyState==4 && userInfo.status ==200){
            getAllUsers()
        }
    }
    userInfo.open("DELETE","http://localhost:3000/users/"+users[i].id)
    userInfo.send()
}