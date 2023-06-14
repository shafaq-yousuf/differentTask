// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsJujp7J7KqaLoL5MIifZnFBaO8uXHmk0",
    authDomain: "fir-auth-2f4df.firebaseapp.com",
    projectId: "fir-auth-2f4df",
    storageBucket: "fir-auth-2f4df.appspot.com",
    messagingSenderId: "80315625983",
    appId: "1:80315625983:web:b471556568115cefdef7ca",
    measurementId: "G-9N1EBS0XQL"
};

Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("email");
var number = document.getElementById("num");
var qual = document.getElementById("qual");
var cnic = document.getElementById("cnic");
var password = document.getElementById("password");
var select = document.getElementById("sel");
// var parent = document.getElementById("parent");

window.saveStudent = function () {
    var obj = {
        fName: firstName.value,
        lName: lastName.value,
        email: email.value,
        number: number.value,
        qual: qual.value,
        cnic: cnic.value,
        password: password.value,
        select: select.value
    }    
    obj.id = Math.random().toString().slice(2);
    console.log(obj);
    const reference = ref(database, `students/${obj.id}/`);
    set(reference, obj)
    .then(function(){
        window.location.assign("folder/studentDetails.html")
    })
    .catch(function(err){console.log(err)})
};
function getData() {
    var dataList = [];
    const reference = ref(database, "students/");
    onChildAdded(reference, function (dt) {
        dataList.push(dt.val());
        parent.innerHTML = "";
        for (var i = 0; i < dataList.length; i++) {
            parent.innerHTML += `<li>${dataList[i].fName}</li>`
        }
    })
}
getData();


