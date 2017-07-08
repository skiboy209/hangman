$( document ).ready( function(){
    var letter = '';
    var word = ['x','y','z'];
    var answer = [];
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

        var gameLength = word.length;
        var j = 0;
            for (i = 0; i <= word.length; i++){
            if(letter != word[i]){
                console.log("ITS A: ", word[i]);
                newDiv = $("<div>")
                answer.push(letter);
                newDiv.append(answer);
                $("#letterContainer").append(newDiv);
                
            }
            else if(letter === word[i]){
                console.log(letter);
            }
            j++;
        }
    });
});