
    var occupied;
    var letter;
    var winningCombos;
    var turn = 0;
    var theBox;
    var box2Edit;
    var draw;
    var boxesTaken = 0;
    var yes;

    //this function is needed to initiate a blank card
    window.onload=function(){
    
      occupied = new Array();
      letter = new Array();
      winningCombos =[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],
      [3,4,5],[6,7,8],[2,4,6]];

      for(var i = 0; i < 9; i++){
        occupied[i] = false;
        //initiates game with no boxes occupied
        //false= not occupied
        letter[i]='';
        //Right now each box contains nothing
        //will eventually either contain 'X' or 'O'
      }
    }

    function boxchosen(boxNum){
      theBox = "box"+boxNum;
      box2Edit = document.getElementById(theBox);
      draw = box2Edit.getContext("2d");
      //If the current box is not filled in,
      //it can be drawn in!
      if(occupied[boxNum-1]==false){
        //determines if its  
        //player 1 is 'X'
        if(turn%2==0){
          draw.beginPath(); // starts a line
          draw.moveTo(10,10); // at the x and y cordinate 
          draw.lineTo(40,40); // down to this x and y cordinate
          draw.moveTo(40,10); // begins another line at (40,10)
          draw.lineTo(10,40); // down to this (x,y)
          draw.stroke();
          draw.closePath(); // ends the drawing of an 'X'
          letter[boxNum-1] = 'X'; 
          // We add the char 'X' 
          // to the content of this box;
        }
        // player 2 is 'O'
        else{
          draw.beginPath();
          draw.arc(25,25,10,0,2*Math.PI,true); 
          //Using HTML canvas arc() Method
          // to make char 'O';
          draw.stroke();
          draw.closePath();
          letter[boxNum-1] = 'O';
        }

        turn++;
        occupied[boxNum-1] = true;
        boxesTaken++;
        winnercheck(letter[boxNum-1]);

        if(boxesTaken==9){
          alert("Tie! Game is over.");
          location.reload(true);
        }
      }
      else{
        alert("That spot is taken already!");
      }
    }

    function winnercheck(c){
      var len = winningCombos.length;
      for(var h=0;h<len;h++){
        if(letter[winningCombos[h][0]]==c &&
           letter[winningCombos[h][1]]==c &&
           letter[winningCombos[h][2]]==c){
            alert(c+" is the winner!");
            replay();
        } 
      }
    }

    function replay(){
      yes=confirm("PLAY AGAIN?");
      if(yes==true){
        alert("OKAY!");
        location.reload(true);
      }
      else{
        alert("Okay. See ya!");  
      }
    }
