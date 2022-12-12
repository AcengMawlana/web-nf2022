function login() {
    event.preventDefault();
    let uname = document.getElementById("Username").value ;
    let pass = document.getElementById("Password").value ;

    if (uname == "ahmad2017" && pass == "integrity") {
        location.replace("success.html");
        alert("Success login")
    } else {
        alert("Loogin Failed");
    }
}