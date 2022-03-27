const options=["rock","paper","scissors"]

let p1=0
let comp=0



const btns=document.querySelectorAll(".options")
const p1Score=document.querySelector(".scoreP1_result")
const compScore=document.querySelector(".scoreComp_result")
const results=document.querySelector(".results")
const finalResults=document.querySelector(".final_results")
const finalResultsText=document.querySelector(".final_results_text")
const restartBtn=document.querySelector(".final_results_btn")

restartBtn.addEventListener("click",reset)

btns.forEach(btn=>btn.addEventListener("click",function target(e){

    if(p1==5||comp==5){
       return  displayResult() 
    }
    
   computerSelection=computerPlay(options)
   playerSelection=e.target.getAttribute("alt")
    play1(computerSelection,playerSelection)
    p1Score.textContent=`${p1}`
    compScore.textContent=`${comp}`
    
    if(p1==5||comp==5){    
        return  displayResult() 
     }
   

    

}))


function computerPlay(arr){
    
    return arr[Math.floor(Math.random()*options.length)]
   
}


function play1(computerSelection,playerSelection){
     
      
        
      
         if(playerSelection===computerSelection){
            results.textContent="Tie" 
          
      }

      else if(playerSelection==="paper" && computerSelection==="rock"){
        p1++  
        results.textContent="Player wins" 
          
      }
      else if(playerSelection==="scissors" && computerSelection==="paper"){
        p1++
        results.textContent="Player wins" 
        
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        p1++
        results.textContent="Player wins" 
        
    }
    else{
        comp++
        results.textContent="Computer wins"
        
    }

    
    


}



function displayResult(){
    finalResults.style.display="flex"
    restartBtn.style.display="block"
    
    if(p1>comp){
        
        finalResultsText.textContent="You won!"
     
        
    }
    else{
        finalResultsText.textContent="Game Over!"
        
        
    }
}

function reset(){
    p1=0
    comp=0
    p1Score.textContent=`${p1}`
    compScore.textContent=`${comp}`
    results.textContent="Please choose" 
    finalResults.style.display="none"
}