'use strict';

 let secret=Math.trunc(Math.random()*20)+1;
console.log(secret);
let highscore=0;
let score=20;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent="Enter Something..🫢";
    }
    else{
        if(guess===secret){
            document.querySelector('.message').textContent="Hurray!!You won..🙌";
            if(score>highscore){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }

            document.querySelector('body').style.backgroundColor="green";
            document.querySelector('.number').textContent=secret;
        }
    if(guess!=secret){
            if(score>1){
                if(guess>secret){
                document.querySelector('.message').textContent="Guess is too high🥵";
                    score--;
                    document.querySelector('.score').textContent=score;
                 }else{
                document.querySelector('.message').textContent="Guess is too low😫";
    
                    score--;
                    document.querySelector('.score').textContent=score;

                  }
            }else{
            document.querySelector('.message').textContent="You lost !!";
              }
        }

    }
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    let secret=Math.trunc(Math.random()*20)+1;
console.log(secret);
    document.querySelector('.message').textContent="Guess Number";
    document.querySelector('.score').textContent="0";
    document.querySelector('.number').textContent="?";
    document.querySelector('body').style.backgroundColor="#222";


});

