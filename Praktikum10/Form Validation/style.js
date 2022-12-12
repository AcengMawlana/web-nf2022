let nama = document.getElementById("nama")
let email = document.getElementById("email")
let jam = document.getElementById("jam")
let tujuan = document.getElementById("tujuan")
let jumlah = document.getElementById("jumlah")
let span = document.getElementsByTagName("span")

function proses() {


if (nama.value =="Fikri") {
    span[0].style.visibility = "visible"
}
if (email.value =="raffikrimawlana@gmail.com") {
    span[1].style.visibility = "visible"
}
if (jam.value =="20.30") {
    span[2].style.visibility = "visible"
}
if (tujuan.value =="Jakarta") {
    span[3].style.visibility = "visible"
}
if (jumlah.value =="5") {
    span[4].style.visibility = "visible"
    location.replace("success.html");
        alert("login Berhasil");
} else {
    alert("Login Gagal");
}

 }