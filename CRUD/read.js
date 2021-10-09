users = []
function getAllUsers(){
    var getinfo = new XMLHttpRequest()
    getinfo.onreadystatechange = function (){
        if(getinfo.readyState == 4 && getinfo.status ==200){
            users = JSON.parse(getinfo.response)
            console.log(users)
            displayUsers()
        }
    }
    getinfo.open("GET","http://localhost:3000/users")
    getinfo.send()
}
getAllUsers()

function displayUsers(){
    users.forEach(function (user,i){
        var myTr = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.innerHTML = user.fName
        myTr.appendChild(td1)

        var td2 = document.createElement("td")
        td2.innerHTML = user.lName
        myTr.appendChild(td2)


        var td3 = document.createElement("td")
        td3.innerHTML = user.email
        myTr.appendChild(td3)

        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.innerHTML = "EDIT";
        editTd.appendChild(editBtn)
        myTr.appendChild(editTd)

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "DELETE";
        deleteBtn.setAttribute("onclick","deleteuser("+i+")")
        deleteTd.appendChild(deleteBtn)
        myTr.appendChild(deleteTd)

        document.querySelector("tbody").appendChild(myTr)
    })
}