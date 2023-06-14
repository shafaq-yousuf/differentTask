
var student1 = {
    name: "ali",
    age: 18,
    rollNum: 1890,
    course: "web development"
};
var student2 = {
    name: "husnain",
    age: 19,
    rollNum: 1891,
    course: "web development"
};
var student3 = {
    name: "yousuf",
    age: 18,
    rollNum: 1893,
    course: "web development"
};
var student4 = {
    name: "asad",
    age: 18,
    rollNum: 1894,
    course: "web development"
};
var student5 = {
    name: "arif",
    age: 18,
    rollNum: 1895,
    course: "web development"
};
var student6 = {
    name: "aleem",
    age: 18,
    rollNum: 1896,
    course: "web development"
};
var student7 = {
    name: "ammar",
    age: 18,
    rollNum: 1897,
    course: "web development"
};
var student8 = {
    name: "asif",
    age: 18,
    rollNum: 1898,
    course: "web development"
};
var student9 = {
    name: "areej",
    age: 18,
    rollNum: 1899,
    course: "web development"
};
var student10 = {
    name: "faham",
    age: 18,
    rollNum: 1990,
    course: "web development"
};
var studentDetail = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];
var result = document.getElementById("result");
var input = document.getElementById("rollNum");
function searchRollNum() {
    for (var i = 0; i < studentDetail.length; i++) {
        if (input.value == studentDetail[i].rollNum) {
            console.log(studentDetail[i]);
            result.innerHTML = `<li>${studentDetail[i].name}</li> <li>${studentDetail[i].age}</li> <li>${studentDetail[i].course}</li>`
        }
    }
}
// student.fatherName= "ahmed";
// delete student.course;
// var a = "qualification" in student;
// console.log(student);
// console.log(a)