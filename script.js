$( document ).ready( function(){
    var letter = '';
    var word = getWord();
        var answer = [];
    var guesses = []
    var hangArr = ["noose","head","body","leftarm","rightarm","leftleg","rightleg"];
    var guessAmount = hangArr.length;    
    //Guess Counter display------------------------------------//
    $("#guessTitle").html("<div id='guessTitle'>Incorrect letters you have " + guessAmount + " remaining guesses</div>") ;
    $( document ).on( "keydown", function(e) {
        if(e.which == 65){
            letter = 'a';
        }
        else if(e.which == 66){
            letter = 'b';
        }
        else if(e.which == 67){
            letter = 'c';
        }
        else if(e.which == 68){
            letter = 'd';
        }
        else if(e.which == 69){
            letter = 'e';
        }
        else if(e.which == 70){
            letter = 'f';
        }
        else if(e.which == 71){
            letter = 'g';
        }
        else if(e.which == 72){
            letter = 'h';
        }
        else if(e.which == 73){
            letter = 'i';
        }
        else if(e.which == 74){
            letter = 'j';
        }
        else if(e.which == 75){
            letter = 'k';
        }
        else if(e.which == 76){
            letter = 'l';
        }
        else if(e.which == 77){
            letter = 'm';
        }
        else if(e.which == 78){
            letter = 'n';
        }
        else if(e.which == 79){
            letter = 'o';            
        }
        else if(e.which == 80){
            letter = 'p';
        }
        else if(e.which == 81){
            letter = 'q';            
        }
        else if(e.which == 82){
            letter = 'r';
        }
        else if(e.which == 83){
            letter = 's';            
        }
        else if(e.which == 84){
            letter = 't';            
        }
        else if(e.which == 85){
            letter = 'u';
        }
        else if(e.which == 86){
            letter = 'v';
        }
        else if(e.which == 87){
            letter = 'w';
        }
        else if(e.which == 88){
            letter = 'x';
        }
        else if(e.which == 89){
            letter = 'y';
        }
        else if(e.which == 90){
            letter = 'z';
        }
        console.log(letter);

        var letterFlag = false;
        var gameLength = word.length;
        var newDiv = $("<div class='letterDiv'>");
            for (i = 0; i <= word.length; i++){
            if(letter === word[i]){
                newDiv.append(letter);
                $("#correctLetters").append(newDiv);                
                /*Duplicate letter checker-----------------------
                if(answer[i] === word[i]){
                    alert("Duplicate Letter!!");
                    newDiv.append(letter);
                    $("#letterConstainer").append(newDiv);
                    guessAmount--;
                }*/
                //Push correct letter to answers array//
                answer.push(letter);
                letterFlag = true;
                console.log("Correct Letters: ", answer);
                //WIN CHECKER--------------------------------------//
                if(answer.length >= word.length){
                setTimeout(function(){
                alert("You Win! The name was " + word.join(""));
                letter = '';
                 word = getWord();
                 guessAmount = hangArr.length;
                 j = 0;
                 answer = [];
                 guesses = [];
                $("#head").css("opacity",".00001");
                $("#noose").css("opacity",".00001");
                $("#body").css("opacity",".00001");
                $("#leftArm").css("opacity",".00001");
                $("#rightArm").css("opacity",".00001");
                $("#leftLeg").css("opacity",".00001");
                $("#rightLeg").css("opacity",".00001");   
                 $("#letterContainer").html("<div id='letterContainer'></div>")
                 $("#correctLetters").html("<div id='correctLetters'></div>");
                 $("#guessTitle").html("<div id='guessTitle'>Incorrect letters you have " + guessAmount + " remaining guesses</div>");
                  }, .01);
                
                }
            }
        }
        console.log("GUESSES", guesses.length);
        //Guess limit checker -----------------------//    
        if(guesses.length >= hangArr.length){
        alert("You are out of guesses :(");
            letter = '';
            word = getWord();
            guessAmount = hangArr.length;
            answer = [];
            j = 0;
            guesses = [];
            $("#head").css("opacity",".00001");
            $("#noose").css("opacity",".000011");
            $("#body").css("opacity",".00001");
            $("#leftArm").css("opacity",".000011");
            $("#rightArm").css("opacity",".00001");
            $("#leftLeg").css("opacity",".000011");
            $("#rightLeg").css("opacity",".000011");            
        $("#letterContainer").html("<div id='letterContainer'></div>");
        $("#correctLetters").html("<div id='correctLetters'></div>");
        $("#guessTitle").html("<div id='guessTitle'>Incorrect letters you have " + guessAmount + " remaining guesses</div>");
        }
        else{
            if(!letterFlag){
                guesses.push(letter);
                newDiv.append(letter);
                $("#letterContainer").append(newDiv);
                $("#guessTitle").html("<div id='guessTitle'>Incorrect letters you have " + guessAmount + " remaining guesses</div>");
                hangmanFunction();
            guessAmount--;                                         
        }   
        }
    });
});
  
var j = 0;
var hangArr = ["noose","head","body","leftarm","rightarm","leftleg","rightleg"];
function hangmanFunction(){
console.log(hangArr[j]);
switch (hangArr[j]){
    case 'head':                    
    $("#head").css("opacity","1");
break;
    case 'noose':
    $("#noose").css("opacity","1")
break;
    case 'body':
    $("#body").css("opacity","1")
break;
    case 'leftarm':
    $("#leftArm").css("opacity","1")
break;
    case 'rightarm':
    $("#rightArm").css("opacity","1")
break;
    case 'leftleg':
    $("#leftLeg").css("opacity","1")
break;
    case 'rightleg':
    $("#rightLeg").css("opacity","1")
break;
}
j++;       
}

function getWord(){
    var words = ["tim","dave","john"]
    var wordNum = getRandomInt(0,words.length);
    word = words[wordNum].split("");
    return word;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; 
}
//The maximum is exclusive and the minimum is inclusive