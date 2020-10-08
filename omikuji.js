var username;
var userresult = ["大吉", "中吉", "小吉", "吉", "凶"];
var elName = document.getElementById("name");

username = prompt("お名前を教えて下さい。");
if(username == ""){
    elName.innerHTML = "名無し";
}else{
    elName.innerHTML = username;
}
var rand = Math.floor(Math.random() * 5);
document.getElementById("result").innerHTML = userresult[rand];