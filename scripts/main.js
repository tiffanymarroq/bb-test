// Main text 
function textStyle(){
    // document.getElementById("banner").style.background = 'rgb(0,0,0)';
    // document.getElementById("banner").style.backgroundImage = "url('assets/images/blue.jpg')";
}

//Button
function button(){
    var colorBtn = document.getElementsByClassName("color-box");
    var bgImage = document.getElementById("banner").style.backgroundImage;
       colorBtn.onclick = function(){
        console.log('in')
        if(colorBtn.classList.contains("red")){
            bgImage =  "url('assets/images/red.jpg')";

        }else if (colorBtn.classList.contains("yellow")){
            bgImage =  "url('assets/images/yellow.jpg')";
            
        }else{
            bgImage =  "url('assets/images/blue.jpg')";
        }
    }

}

//Main Function

function main(){
    textStyle();

    button();
    var colorBtn = document.getElementsByClassName("color-box");
    document.getElementById("banner").style.backgroundImage = "url('assets/images/blue.jpg')";
    
    console.log(colorBtn[0])
    colorBtn[0].addEventListener("click", function(){
        document.getElementById("banner").style.backgroundImage =  "url('assets/images/red.jpg')";        
      });

      colorBtn[1].addEventListener("click", function(){
        document.getElementById("banner").style.backgroundImage =  "url('assets/images/yellow.jpg')";        
      });
      colorBtn[2].addEventListener("click", function(){
        document.getElementById("banner").style.backgroundImage =  "url('assets/images/blue.jpg')";        
      });

    
}

main();