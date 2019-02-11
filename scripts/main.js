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
var logoFrame = document.getElementById("logo-frame");
var btnContainer = document.getElementById("btn-container");

// Main text Animation
function defaultFrame(){
    banner.style.backgroundImage = "url('assets/images/sideview.png')";
    banner.style.backgroundPosition = "-5px 60px";
    bannerContainer.style.backgroundColor = BLUE;
}
document.getElementById("btn").onmouseover = function(){
    TweenLite.to(document.getElementById("btn"), .2, {css:{opacity:.8}});
    }​
document.getElementById("btn").onmouseleave = function(){
    TweenLite.to(document.getElementById("btn"), .2, {css:{opacity:1}});
    }​

document.getElementById("logo").onmouseover = function(){
    TweenLite.to(document.getElementById("logo"), .2, {css:{scale: 1.1}});
    }​
document.getElementById("logo").onmouseleave = function(){
    TweenLite.to(document.getElementById("logo"), .2, {css:{scale:1}});
    }​

function addActive(){

}


var colorBtns = colorControls.getElementsByClassName("color-box");
console.log(btnContainer)
console.log(colorBtns.length)
for (var i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }
//Color Controls
function buttonControls(){
    var bgColor = BLUE;
    mainText.classList.add("hide");
    logoFrame.classList.add("hide");
    colorControls.classList.remove("hide");
    btnContainer.classList.remove("hide")
    banner.style.backgroundImage = "url('assets/images/blue.jpg')";
    banner.style.backgroundColor = "#000";
    banner.style.backgroundPosition = "50% 72%"
    colorBtn[0].addEventListener("click", function(){
        banner.style.backgroundImage =  "url('assets/images/blue.jpg')";      
        bgColor = BLUE;
        bannerContainer.style.backgroundColor = bgColor;
        // TweenMax.to("#banner", 3, {rotation:360, scale:0.5});
    });
    colorBtn[1].addEventListener("click", function(){
        banner.style.backgroundImage =  "url('assets/images/yellow.jpg')";
        bgColor = YELLOW;
        bannerContainer.style.backgroundColor = bgColor;
    });
    colorBtn[2].addEventListener("click", function(){
        banner.style.backgroundImage =  "url('assets/images/red.jpg')";      
        bgColor = RED;
        bannerContainer.style.backgroundColor = bgColor;
    });
    bannerContainer.style.backgroundColor = bgColor;
}

//Main Function

function main(){
    addActive();
    // defaultFrame();
    // setTimeout(function(){
    //     bannerContainer.style.backgroundColor = YELLOW;
    //     document.getElementById("small-header").innerHTML = "Small Car";
    //     document.getElementById("big-header").innerHTML = "Big Pleasure.";
        
    // }, 2000)
    // setTimeout(function(){
    //     bannerContainer.style.backgroundColor = RED;
    // }, 4000)
    // setTimeout(function(){
    //     banner.style.backgroundImage =  "";
    //     bannerContainer.style.backgroundColor = BLUE;
    //     btnContainer.classList.add("hide")
    //     logoFrame.classList.remove("hide")
    //     mainText.classList.add("hide");
    // }, 6000)
    // setTimeout(function(){
    //     banner.classList.remove("full");
    //     banner.classList.add("add-margin")
    //     buttonControls()}, 8000);

        buttonControls()

}

main();