var playing=false;
var score;
var lifeLeft;
var fruits=['apple','banana','cherries','grapes','mango','orange','peach','pineapple','watermelon'];
var step;
var action; //used for setInterval function
$(document).ready(function(){
        //click on start reset button
        $("#startreset").click(function(){

            //we are playing
            if(playing == true){
                     //reload page
                    location.reload();
               }
            else{

                //we are not playing
                playing=true; //game initiated

                //set score to 0
                score = 0; //set score to 0
                $("#scorevalue").html(score);

                //show trials left
                $("#lifeLeft").show();
                lifeLeft=3;
                addHearts();

                //hide game over box

                $("#gameOver").hide();

                //change button text to reset game
                $("#startreset").html("Reset Game");

                //start sending fruits
                startAction();
            }
        });

    $("#fruit1").mouseover(function(){
       score++;
        $("#scorevalue").html(score);
        document.getElementById("slicesound").play();
//        $("#slicesound")[0].play() ova vrakja array zatoa mora[0] da kazemo  1 element t.e nultiot kje bida audio elementite
        
        //stop fruit from going down and hide it
        //        stopAction(); nas ni treba samo da go stopiramo pa ANIMACIJA ne hide
        clearInterval(action);
        
        //hide fruit through aniimation
        $("#fruit1").hide("explode", 500); //slice fruit
        
        //send new fruit
        setTimeout(startAction, 500);
        
    });

    //functions

    function addHearts(){
        $("#lifeLeft").empty();
         for(i=0; i<lifeLeft; i++){
                    $("#lifeLeft").append('<img src="images/heart.png" class="life">');
                }
    }

    //start sending fruits

    function startAction(){

        //generate a fruit
        $("#fruit1").show();
        chooseFruit(); //choose a random fruit
        $("#fruit1").css({'left' : Math.round(Math.random()*550), 'top': -50}); //random position

        //generate a random step
        step = Math.round(Math.random()*5)+1; // change step px

         //Move fruit down by one step every 10ms
        action = setInterval(function(){

            //move fruit down by one step
            $("#fruit1").css('top', $("#fruit1").position().top + step);

            //check if the fruit is too low
            if($("#fruit1").position().top > $("#fruitContainer").height()){
                        //check if we have trials left
                        if(lifeLeft > 1){
                             //generate a fruit
                            $("#fruit1").show();
                            chooseFruit(); //choose a random fruit
                            $("#fruit1").css({'left' : Math.round(Math.random()*550), 'top': -50}); //random position

                            //generate a random step
                            step = Math.round(Math.random()*5)+1; // change step px

                            //reduce trials by one
                            lifeLeft --;

                            //populate trialsLeft box
                            addHearts();
                        }
                        else{ //game over
                            playing= false;  //we are not playing anymore

                            $("#startreset").html("Start Game"); // change button to Start Game

                            $("#gameOver").show();
                            $("#gameOver").html('<p>Game Over!</p><p>Your score is ' +score+'</p>');
                            $("#lifeLeft").hide();

                            stopAction();
                        }
               }
        }, 10);
    }

    // generate a random fruit
    function chooseFruit(){

        $("#fruit1").attr('src', 'images/' + fruits[Math.round(Math.random()*8)] +'.png'); //choose a random fruit


    }

    //stop droping fruits
    function stopAction(){
        clearInterval(action);
        $("#fruit1").hide();
    }
});
    //are we playing
        //yes
            //reload page
        //no
            //show trials left box
            //change button toxt to reset game
            //1. create a random fruit 
            //define a random step 
            //2. move fruit down one step every 30sec
                    //is fruit too low?
                        //no-> repeat 2.
                        //yes->any trials left?
                            //yes:go repeat 1.
                            //no: show game over, button text: start game

//slice a fruit
    //play sound in the background
    //explode fruit













//click on start reset button
    //are we playing
        //yes
            //reload page
        //no
            //show trials left box
            //change button toxt to reset game
            //1. create a random fruit 
            //define a random step 
            //2. move fruit down one step every 30sec
                    //is fruit too low?
                        //no-> repeat 2.
                        //yes->any trials left?
                            //yes:go repeat 1.
                            //no: show game over, button text: start game

//slice a fruit
    //play sound in the background
    //explode fruit