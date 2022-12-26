
// const firebaseConfig = {
//     apiKey: "AIzaSyC5WIA550D-vlnct0aS9JzrwdhLDQLhdn4",
//     authDomain: "baochay-hcmus.firebaseapp.com",
//     databaseURL: "https://baochay-hcmus-default-rtdb.firebaseio.com",
//     projectId: "baochay-hcmus",
//     storageBucket: "baochay-hcmus.appspot.com",
//     messagingSenderId: "414399052545",
//     appId: "1:414399052545:web:8cf430b7bdefb780e9b900",
//     measurementId: "G-HM8YV30X0R"
//   };
const firebaseConfig = {
    apiKey: "AIzaSyAkU09Nfo7tooAM-KCnYzQja6Ym08Uufrs",
    authDomain: "nam-iot.firebaseapp.com",
    databaseURL: "https://nam-iot-default-rtdb.firebaseio.com",
    projectId: "nam-iot",
    storageBucket: "nam-iot.appspot.com",
    messagingSenderId: "334094637588",
    appId: "1:334094637588:web:9bf398eb15b3a7b0d3a501",
    measurementId: "G-7XL1L5NN2Q"
  };
  //setup
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

//get element
var auto_on = document.getElementById("auto-on");
var auto_off = document.getElementById("auto-off");
var manual_on = document.getElementById("manual-on");
var manual_off = document.getElementById("manual-off");

//changed data
var gas =  database.ref("baochay").child("p");
gas.on("value",snap=>{
    let val = snap.val();
    console.log('val:' +val);
    document.getElementById("gas").setAttribute("value",val+" ppm" );   
});

//change mode
var mode =  database.ref("baochay");
auto_on.onclick = function(){
    database.ref("baochay").update({
        "relay" : "B1"
    })
}

auto_off.onclick = function(){
    database.ref("baochay").update({
        "relay" : "B0"
    })
}

manual_on.onclick = function(){
    database.ref("baochay").update({
        "relay" : "A1"
    })
}

manual_off.onclick = function(){
    database.ref("baochay").update({
        "relay" : "A0"
    })
}

