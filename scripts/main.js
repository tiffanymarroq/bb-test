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


function defaultFrame(){
    banner.style.backgroundImage = "url('assets/images/sideview.png')";
    banner.style.backgroundPosition = "-5px 60px";
    bannerContainer.style.backgroundColor = BLUE; 
}

// Animation
function textAnimation(){
    TweenLite.fromTo(mainText, .7, {y:-100, opacity: 0}, {y: 0,opacity: 1, ease: Sine.easeOut})
    
}
function carAnimation(){
    banner.style.backgroundImage = "url('assets/images/sideview-spin.png')";
    TweenLite.fromTo(banner, 1, {backgroundPosition: "-5px 55px"}, {backgroundPosition: "300px 55px",ease:Back.easeIn.config(1.2)});
}

function selectAnimationEnter(){
    TweenLite.fromTo(banner, .75, {backgroundPosition: "400px 45px"}, {backgroundPosition: "5px 45px" ,ease:Back.easeOut.config(1.2)});
}

function hoverAnimation(){
    // Button Hover
    document.getElementById("logo").onmouseover = function(){
        TweenLite.to(document.getElementById("logo"), .2, {css:{scale: 1.1}});
        }​
    document.getElementById("logo").onmouseleave = function(){
        TweenLite.to(document.getElementById("logo"), .2, {css:{scale:1}});
        }​
        
    document.getElementById("btn").onmouseover = function(){
        TweenLite.to(document.getElementById("btn"), .2, {css:{backgroundColor:"#fff", color: "#000"}});
        }​
    document.getElementById("btn").onmouseleave = function(){
        TweenLite.to(document.getElementById("btn"), .2, {css:{backgroundColor:"#000", color: "#fff"}});
        }
    
}


function addActive(){
    var colorBtns = colorControls.getElementsByClassName("color-box");
    console.log(btnContainer)
    console.log(colorBtns.length)
    for (var i = 0; i < colorBtns.length; i++) {
        colorBtns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        // If there's no active class
        if (current.length > 0) { 
            current[0].className = current[0].className.replace(" active", "");
            selectAnimationEnter();
        }
    
        // Add the active class to the current/clicked button
        this.className += " active";
        });
    }
}

//Color Controls
function buttonControls(){
    var bgColor = BLUE;
    mainText.classList.add("hide");
    // logoFrame.classList.add("hide");
    colorControls.classList.remove("hide");
    btnContainer.classList.remove("hide")
    banner.style.backgroundImage = "url('assets/images/blue.jpg')";
    banner.style.backgroundColor = "#000";
    banner.style.backgroundPosition = "50% 72%";
    document.getElementById("btn").onmouseleave = function(){
        TweenLite.to(document.getElementById("btn"), .2, {css:{border: "1px solid #000"}});
        }​
    colorBtn[0].addEventListener("click", function(){
        banner.style.backgroundImage =  "url('assets/images/blue.jpg')";      
        bgColor = BLUE;
        bannerContainer.style.backgroundColor = bgColor;
        
        document.getElementById("btn").onmouseover = function(){
            TweenLite.to(document.getElementById("btn"), .2, {css:{border: "1px solid " + bgColor}});
            }​
    });
    colorBtn[1].addEventListener("click", function(){
        banner.style.backgroundImage =  "url('assets/images/yellow.jpg')";
        bgColor = YELLOW;
        bannerContainer.style.backgroundColor = bgColor;
        document.getElementById("btn").onmouseover = function(){
            TweenLite.to(document.getElementById("btn"), .2, {css:{border: "1px solid " + bgColor}});
            }​

    });
    colorBtn[2].addEventListener("click", function(){
        banner.style.backgroundImage =  "url('assets/images/red.jpg')";      
        bgColor = RED;
        bannerContainer.style.backgroundColor = bgColor;
        
        document.getElementById("btn").onmouseover = function(){
            TweenLite.to(document.getElementById("btn"), .2, {css:{border: "1px solid " + bgColor}});
            }​
    });
    document.getElementById("btn").onmouseover = function(){
        TweenLite.to(document.getElementById("btn"), .2, {css:{border: "1px solid " + bgColor}});
        }​
    bannerContainer.style.backgroundColor = bgColor;
}

//Main Function

function main(){
    addActive();
    hoverAnimation();
    textAnimation();
    defaultFrame();
    setTimeout(function(){
        textAnimation();
        bannerContainer.style.backgroundColor = YELLOW;
        document.getElementById("small-header").innerHTML = "Small Car";
        document.getElementById("big-header").innerHTML = "Big Pleasure.";
    }, 2200)
    setTimeout(function(){
        textAnimation();
        bannerContainer.style.backgroundColor = RED;
        setTimeout(function(){
            carAnimation()
        },1000)
        
    }, 4200)
    setTimeout(function(){
        TweenLite.to(logoFrame, .6, {css:{opacity:1},ease:Expo.easeOut});
        banner.style.backgroundImage =  "";
        bannerContainer.style.backgroundColor = BLUE;
        btnContainer.classList.add("hide")
        logoFrame.classList.remove("hide")
        mainText.classList.add("hide");
        setTimeout(function(){
            TweenLite.to(logoFrame, 2, {css:{opacity:0}});
        }, 1300)
        
    }, 6600)
    setTimeout(function(){
        
        banner.classList.remove("full");
        banner.classList.add("add-margin")
        buttonControls();
    }, 9500);


}

main();