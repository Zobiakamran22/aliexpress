let menuBar =document.getElementById('menubar');
let sideBar =document.getElementById('sidebar');
let inBtn = document.getElementById('in-btn');
let xyZ = document.getElementById('xyz');
let downloadBar = document.getElementById('download-bar');
let innrBtn = document.getElementById('innr-btn');
let circlE = document.getElementById('circle');
let  mainSection = document.getElementById('main-section');
let  lastBtn = document.getElementById('lastbtn');



menuBar.addEventListener ('click', function () {
    sideBar.style.display = 'block'
   
})

inBtn.addEventListener('click', function(){
    sideBar.style.display ='none'
})


xyZ.addEventListener('mouseover', function(){
    downloadBar.style.display='block'  

})

innrBtn.addEventListener('click', function(){
    downloadBar.style.display ='none'
})

circlE.addEventListener ('mouseover', function () {
    mainSection.style.display = 'block'
   
})


lastBtn.addEventListener('click', function(){
    mainSection.style.display ='none'
})