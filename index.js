
// let target = Math.floor(Math.random() * 10 + 1);
let target = 6
let attempts = 0;
let remaingAttempts = 5;

$("#enter-btn").click(function(){
    attempts++;
    remaingAttempts--;
    
    let input = $("#input").val();

    // for attempts track
   if(attempts < 5) {
    
    // for number check
    if (input == target){
        if(input == target && attempts == 1){
            $("#title").html("Congrats, You won! &#129398");
            $("#sub-title").html("Refresh to play again!");
            soundEffects("yeah");
            winReset();
        }else{
            $("#title").html("Congrats, You won! &#129395");
            $("#sub-title").html("Refresh to play again!");
            soundEffects("win");
            winReset();
        }

    }else {
        if(input > target){
            $("#title").text("Close, Less then " + input);
            $("#sub-title").html("(between 1 to 100 in " + remaingAttempts + " moves)");
            soundEffects("no");
        }else if (input < target){
            $("#title").text("Close, Greater then " + input);
            $("#sub-title").html("(between 1 to 100 in " + remaingAttempts + " moves)");
            soundEffects("no");
        }
   }
 }else{
    $("#title").html("Out of Move &#129315");
    $("#sub-title").html("Refresh!");
    soundEffects("lost")
 }
   
})

function soundEffects(sound){
    let audio = new Audio("./sounds/" + sound  + ".mp3");
    audio.play();
}

$("#reset-btn").click(function reset(){
    soundEffects("reset");
    $("#title").html("Guess The Number &#128512");
    $("#sub-title").html("(between 1 to 100 in 5 moves)");

    target = Math.floor(Math.random() * 10 + 1);
    attempts = 0;
    remaingAttempts = 5;
})

// if player winss then triggers

function winReset(){

    target = Math.floor(Math.random() * 10 + 1);
    attempts = 0;
    remaingAttempts = 5;
}
