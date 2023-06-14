import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-Auth.js";


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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
var auth = getAuth();
var parent = document.getElementById("parent");
var email = document.getElementById("email");
// var cnic = document.getElementById("cnic");
var password = document.getElementById("password");

window.submitData = function(){
    var obj = {
        email: email.value,
        // cnic: cnic.value,
        password: password.value
    }
    console.log(obj);

    createUserWithEmailAndPassword(auth, obj.email, obj.password ).then(function(res){console.log(res.user.uid);
        window.location.assign("login.html")
        }).catch(function(err){alert(err.message);
        })
}

// function getData() {
//     var details = [];
//     const reference = ref(database, "students/");
//     onChildAdded(reference, function (dt) {
//         details.push(dt.val());
// parent.innerHTML = "";
// for(var i = 0; i< details.length; i++){
//     parent.innerHTML += `<h3>biodata</h3><li>${details[i].fName}</li> <li> ${details[i].lName}</li> <li>${details[i].email}</li><li> ${details[i].number}</li><li> ${details[i].qual}</li><li> ${details[i].cnic} </li><li>${details[i].password}</li><li> ${details[i].select}</li>`
// }
//     })
// }
// getData();




