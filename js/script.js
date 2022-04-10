var nav = document.getElementById('navbar');
var close = document.getElementById('closeMenu');
var open = document.getElementById('openMenu');


function openMenu(){
    nav.style.right = "0";
}

function closeMenu(){
    nav.style.right = "-600px";
}

var counter = 1;

setInterval(function(){
    document.getElementById('rad' + counter).checked = true;
    counter++;

    if(counter > 5){
        counter = 1;
    }
},5000);