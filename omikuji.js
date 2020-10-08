var username;
var userresult = ["大吉","中吉","小吉", "吉","凶"];
username = prompt("お名前を教えてください。");
if(document.getElementById("name") != ""){
    document.getElementById("name").innerHTML = "名無し";
}else{
    document.getElementById("name").innerHTML = username;
}
var randNum = Math.floor(Math.random() * 5);
document.getElementById("result").innerText = userresult[randNum];