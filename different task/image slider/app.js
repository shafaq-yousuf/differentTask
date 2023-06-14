var showslide = document.getElementById("showslide");
var allImage = document.getElementById("imgslider");
var a = allImage.getElementsByTagName("img");
var indexNumber = 0;

function renderslide(){
    showslide.src = a[indexNumber].src
}
renderslide();

function previousslide(){
    if(indexNumber == 0){
indexNumber = a.length -1
    } else{
indexNumber--;
    }
renderslide();
};

function nextslide(){
if(indexNumber + 1 == a.length){
    indexNumber = 0
} else{
    indexNumber++
}
renderslide();
};

setInterval(function(){
    nextslide()
}, 3000)