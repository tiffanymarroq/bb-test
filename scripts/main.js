// Colors
var BLUE = "#5DBCD2" ;
var RED = "#A21F1E";
var YELLOW = "#F1AB3E";

// Main text Animation
function textStyle(){
    // document.getElementById("banner").style.background = 'rgb(0,0,0)';
    // document.getElementById("banner").style.backgroundImage = "url('assets/images/blue.jpg')";
}

//Color Controls
function buttonControls(){
    var colorBtn = document.getElementsByClassName("color-box");
    var bannerContainer = document.getElementById("banner-container")
    var bgColor = BLUE;
    bannerContainer.classList.add("frame-padding");
    document.getElementById("banner").style.backgroundImage = "url('assets/images/blue.jpg')";
    colorBtn[0].addEventListener("click", function(){
        document.getElementById("banner").style.backgroundImage =  "url('assets/images/red.jpg')";      
        bgColor = RED;
        bannerContainer.style.backgroundColor = bgColor;
    });
    colorBtn[1].addEventListener("click", function(){
        document.getElementById("banner").style.backgroundImage =  "url('assets/images/yellow.jpg')";
        bgColor = YELLOW;
        bannerContainer.style.backgroundColor = bgColor;
    });
    colorBtn[2].addEventListener("click", function(){
        document.getElementById("banner").style.backgroundImage =  "url('assets/images/blue.jpg')";      
        bgColor = BLUE;
        bannerContainer.style.backgroundColor = bgColor;
    });
    bannerContainer.style.backgroundColor = bgColor;
}

//Main Function

function main(){
    textStyle();
    this.buttonControls();
}

main();