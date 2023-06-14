// // === practice task ===

// let arr = [
//     {
//         id: 1,
//         name: "Abc",
//         category: "A",
//         city: "karachi"
//     },
//     {
//         id: 2,
//         name: "Abc",
//         category: "b",
//         city: "karachi"
//     },
//     {
//         id: 3,
//         name: "Abc",
//         category: "c",
//         city: "karachi"
//     },
//     {
//         id: 4,
//         name: "Abc",
//         category: "d",
//         city: "karachi"
//     },
//     {
//         id: 5,
//         name: "Abc",
//         category: "e",
//         city: "karachi"
//     }
// ];

// var labels = Object.keys(arr[0]);
// var tableRow = document.getElementById("header");
// var tableBody = document.getElementById("body");

// for (var i = 0; i < labels.length; i++) {
// tableRow.innerHTML += `<th>${labels[i]}</th>`
// }

// for(var i= 0; i< arr.length; i++ ){
//     let array = arr[i];
//     tableBody.innerHTML+= `<tr>
//         <td>${array.id}</td>
//         <td>${array.name}</td>
//         <td>${array.category}</td>
//         <td>${array.city}</td>
//     </tr>`
// }

// === task of dropdown selection ===

let mobiles = [
    {
        name: "a30",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
        brand: "samsung"
    },
    {
        name: "note10",
        ram: "6gb",
        rom: "128gb",
        camera: "50px",
        price: 4000,
        brand: "samsung"
    },
    {
        name: "s10",
        ram: "3gb",
        rom: "128gb",
        camera: "10px",
        price: 5000,
        brand: "samsung"
    },
    {
        name: "iphone4",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "iphone"
    },
    {
        name: "iphone4s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 20000,
        brand: "iphone"
    },
    {
        name: "iphone5",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
        brand: "iphone"
    },
    {
        name: "iphone6",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
        brand: "iphone"
    },
    {
        name: "redminote10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "redminote11",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "redmi10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "redmi10pro",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "a3s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "oppo"
    },
];

let a = document.getElementById("brand");
let modelSel = document.getElementById("model");
let models;

let brand = mobiles.map(x => x.brand);
brand = [...(new Set(brand))];
console.log(brand);

function init() {
    brand.forEach((x) => {
        a.innerHTML += `<option value= "${x}">${x}</option>`
    })
}
init();

function getBrand() {
    models = mobiles.filter((x) => x.brand == a.value).map((x) => x.name)
    modelSel.innerHTML = "";
    models.forEach((x) => {
        modelSel.innerHTML += `<option value= "${x}">${x}</option>`
    }
    )
};
function getModel() {
    let obj = mobiles.find((x) => x.brand == a.value && x.name == modelSel.value)
    console.log(obj)
}










