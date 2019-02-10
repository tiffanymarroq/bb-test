// Colors
var BLUE = "#5DBCD2" ;
var RED = "#A21F1E";
var YELLOW = "#F1AB3E";

// Set Elements
var colorBtn = document.getElementsByClassName("color-box");
var bannerContainer = document.getElementById("banner-container");
var banner = document.getElementById("banner");
var colorControls = document.getElementById("color-controls");
var mainText = document.getElementById("main-text");

// Main text Animation
function defaultFrame(){
    banner.style.backgroundImage = "url('assets/images/sideview.png')";
    banner.style.backgroundPosition = "-5px 60px";
    bannerContainer.style.backgroundColor = BLUE;
}

//Color Controls
function buttonControls(){
    var bgColor = BLUE;
    mainText.classList.add("hide");
    colorControls.classList.remove("hide");
    banner.style.backgroundImage = "url('assets/images/blue.jpg')";
    banner.style.backgroundColor = "#000";
    banner.style.backgroundPosition = "50% 72%"
    colorBtn[0].addEventListener("click", function(){
        banner.style.backgroundImage =  "url('assets/images/red.jpg')";      
        bgColor = RED;
        bannerContainer.style.backgroundColor = bgColor;
    });
    colorBtn[1].addEventListener("click", function(){
        banner.style.backgroundImage =  "url('assets/images/yellow.jpg')";
        bgColor = YELLOW;
        bannerContainer.style.backgroundColor = bgColor;
    });
    colorBtn[2].addEventListener("click", function(){
        banner.style.backgroundImage =  "url('assets/images/blue.jpg')";      
        bgColor = BLUE;
        bannerContainer.style.backgroundColor = bgColor;
    });
    bannerContainer.style.backgroundColor = bgColor;
}

//Main Function

function main(){
    defaultFrame();
    setTimeout(function(){
        bannerContainer.style.backgroundColor = YELLOW;
    }, 2000)
    setTimeout(function(){
        bannerContainer.style.backgroundColor = RED;
    }, 4000)
    setTimeout(function(){
        buttonControls()}, 6000)

}

main();