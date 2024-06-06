
// // export const  outCellsPownGreen = 1

// // const pawnState={
// //     "p1":0,
// //     "p1":0,
// //     "p3":0,
// //     "p4":4,

// // }






// const  outCellsPownGreen = 1
// var roll_dice = 0
// var roll_prec = 0
// let inPlaying = 1
// let playingPrec =1
// let hasBeenMoved = false;
// let isToMove = 0

// function isChangePlayer(){
//     // console.log(playing)
//     let player = document.getElementsByClassName(inPlaying)
//     console.log(player)
//     // if (player[0].classList.contains('playing')) {
//     //     player[0].classList.remove('playing') 
//     // }
//     if (roll_dice !=6) {
//         player[0].classList.add('playing') 
//     }
    


// //    X
//     // alert(player)

//     // if (value_dice ==6){
//     //     return false
//     // }
//     // else return true
// }

// function notPlaying(){
//     if (pr) {
        
//     }
//     let player = document.getElementsByClassName(playingPrec)
//     player[0].classList.remove('playing')
//     // alert(player)
// }

// function rollDice(){
    
//     playingPrec = inPlaying
//     roll_prec= roll_dice
//     roll_dice = Math.floor(Math.random() * 6) + 1;

//     hasBeenMoved=false
//     isToMove=1
    

//     if (roll_dice==6){
//         inPlaying = inPlaying
//     }
//     else if (inPlaying==27) {
//         if(roll_prec==6){

//         }else{
//             inPlaying=1
//         }
        
//     }
//     else{
//         if(roll_prec==6 ){

//         }else{
//             inPlaying+=26
//         }
        
//     }

//     document.getElementById('valueOfDice').innerText=roll_dice

//     if( playingPrec != inPlaying ){
//         if (roll_prec==6 &&  roll_dice!=6){

//         }else{
//             isChangePlayer()
//             notPlaying()
//         }

//     }
//     // isChangePlayer(inPlaying)
    
//     console.log(roll_dice,roll_prec)
//     console.log(inPlaying,playingPrec)
// }



// function returnInHome(pawn) {

//     let currentStep = parseInt(pawn.getAttribute('state'))
//     // alert(currentStep)
//     let stateOfHouse = parseInt(pawn.getAttribute('house'))
//     pawn.setAttribute('state',stateOfHouse)
//     moveInterval = setInterval(() => {
//         // alert(currentStep)
//         if (currentStep == 0 && house!= 1 ) {
//             currentStep=51
//         }
//         currentStep--;
//         let cellsCurrent = document.getElementById(currentStep)                     
//         // console.log(cellsCurrent)
//         // alert(this.p1)
        
//         pawnChangeCells(cellsCurrent,pawn)
        
//         // alert(currentStep)
       
//         if (currentStep <= stateOfHouse) {
            
//             clearInterval(moveInterval);
//             pawn.removeAttribute('style')
//             pawn.classList.remove('current')
//             document.getElementById(stateOfHouse).removeChild(pawn)
//             console.log(document.getElementById(stateOfHouse))
//             document.getElementsByClassName(stateOfHouse)[0].appendChild(pawn)
//             // hasBeenMoved = false;
//         }
//     }, 100);

//     alert('je suis chez moi ')
// }

// function pawnEat(cell){
   
//     let childs = cell.children
//     // alert(childs.length )
//     console.log('childsssssssssssssssssssss ',childs,childs.length)
//     if(childs.length == 2){
//         // returnInHome(childs[0])
//         if (childs[0].getAttribute('house') !=childs[1].getAttribute('house') ) {
//             returnInHome(childs[0])
//         }
       

//     }
// }

// function pawnChangeCells(cells,pawnCurrent){
//     pawnCurrent.style=''
//     let parentPawn = pawnCurrent.parentElement
//                     parentPawn.removeChild(pawnCurrent)       
//     if (!pawnCurrent.classList.contains("current")){
//         pawnCurrent.classList.add("current")
//     }
//     console.log(parentPawn)
//     cells.appendChild(pawnCurrent)
   

// }




// document.querySelector('.btn-player').addEventListener('click',()=>{rollDice();  })
// const buttons = document.querySelectorAll('button');

// // });


// function   initialPawn(cellsId,pawnCurrent) {

//         let initCells = document.getElementById(cellsId)
//         pawnChangeCells(initCells,pawnCurrent)
//         pawnCurrent.setAttribute('state',cellsId)
           
// //   }
 
// }

// function EnterInHouse(house,state) {
//     if (parseInt(house) == 1 && state ==52 ){
//         state = 59
//     }
//     else if (parseInt(house) == 14 && state ==12 ){
//         state = 69
//     }    if (parseInt(house) == 27 && state ==25 ){
//         state = 79
//     }    if (parseInt(house) == 40 && state ==38 ){
//         state = 89
//     } 
// }

// // Génère une valeur hexadécimale aléatoire entre 0x00 (noir) et 0x7F (gris)
// function getRandomColor() {

//     const randomHex = Math.floor(Math.random() * 0x80).toString(16).padStart(2, '0');
//     return `#${randomHex}${randomHex}${randomHex}`;
//   }

// function startMovement(pawn,house,state,pawnEat) {
//     let currentStep =0
//     // EnterInHouse(house,state)
//     // state = 59
//     console.log('house : ',house)
//         // if (parseInt(house) == 1 && state ==51 ){
//         //     state = 59
//         // }
//          if (parseInt(house) == 14 && state ==12 ){
//             state = 58
//         } else   if (parseInt(house) == 27 && state ==25 ){
//             state = 64
//         }  else  if (parseInt(house) == 40 && state ==38 ){
//             state = 74
//         }

//         moveInterval = setInterval(() => {
            
//             if (state == 51 && house!= 1 ) {
//                 state=0
//             }
//             state +=1
//             let cellsCurrent = document.getElementById(state)                     
//             // console.log(cellsCurrent)
//             // alert(this.p1)
//             // alert(cellsCurrent)
//             pawn.setAttribute('state',state)
//             pawnChangeCells(cellsCurrent,pawn)
//             currentStep++;
//             // alert(currentStep)
//             if (parseInt(house) == 1 && state ==56 ){
//                 pawn.style=`background-color:${getRandomColor()}`
//                 clearInterval(moveInterval);
//             }
//             else if (parseInt(house) == 14 && state ==62 ){
//                 pawn.style=`background-color:${getRandomColor()}`
//                 clearInterval(moveInterval);
//             }else if (parseInt(house) == 27 && state ==68 ){
//                 pawn.style=`background-color:${getRandomColor()}`
//                 clearInterval(moveInterval);
//             } else if (parseInt(house) == 40 && state ==74 ){
//                 pawn.style=`background-color:${getRandomColor()}`
//                 clearInterval(moveInterval);
//             }
//             if (currentStep >= roll_dice) {
//                 clearInterval(moveInterval);
//                 // hasBeenMoved = false;
//                 let cellsCurrent=document.getElementById(parseInt(state))
//                 alert(parseInt(state))
//             pawnEat(cellsCurrent)
//             }
//         }, 250);
      

// }


// function deplacementPion(pawn){
//     // console.log(e)
//     let state =parseInt(pawn.getAttribute('state'))
//     let house = parseInt(pawn.getAttribute('house'))
    
//     // alert(state+" jhdsjahdjhjsa "+roll_dice)

//     // alert(document.getElementById("51").children.length)
//     if (state == 51 || state ==12 || state==25 || state==38) {
//         if (64-state-8 <roll_dice) {
//             // clearInterval(id)
//         }else if (74 -state-18 <roll_dice) {
//             // clearInterval(id)
//         }else if (84-state-28 <roll_dice ) {
//             // clearInterval(id)
//         }else if (94-state-38 <roll_dice) {
//             // clearInterval(id)
//         }
//         else{
//           startMovement(pawn,house,state,pawnEat)
//         } 
//     } else {
//         if (64-state <roll_dice) {
//             // clearInterval(id)
//         }else if (74 -state <roll_dice) {
//             // clearInterval(id)
//         }else if (84-state <roll_dice ) {
//             // clearInterval(id)
//         }else if (94-state <roll_dice) {
//             // clearInterval(id)
//         }
//         else{
//            startMovement(pawn,house,state,pawnEat)
//         }
//     }
    
//     // pawn.removeEventListener('click',()=>{alert('ok')})
    
//     // const cell =pawn.parentElement
//     // const id_newParent = parseInt(cell.getAttribute('id'))
//     // const newParent =  document.getElementById(51)
   

//     // alert(cellsCurrent.children.length)

// }


// let currentPawn  = document.querySelectorAll('.pawn')




// for (const pawn of currentPawn) {
//     pawn.addEventListener('click',(event)=>{
//         let parentPawn = pawn.parentElement;
//         let state =parseInt(pawn.getAttribute('state'))
//         let cellsCurrent = document.getElementById(state)
        
//         // deplacementPion(pawn)  
//         console.log(inPlaying,parentPawn.getAttribute('state'))
//         if (parseInt(parentPawn.getAttribute('state')) == inPlaying){
//             // initialPawn(cellsCurrent.id,pawn)
//             if (pawn.getAttribute('state') === parentPawn.getAttribute('state')) {
//                 // initialPawn(cellsCurrent.id,pawnCurrent)
//                 if (roll_dice==6){
//                     if (!hasBeenMoved) {
//                         if (parseInt(pawn.getAttribute('house')) === inPlaying) {
//                         //    alert('init')
//                         pawnChangeCells(cellsCurrent,pawn)
//                         // initialPawn(cellsCurrent.id,pawn)
//                         hasBeenMoved = true;  
//                         }
                       
//                     }
                    
//                 }
                
//             }
             
//         }else if(parseInt(parentPawn.id) == state){
//             if (parseInt(pawn.getAttribute('house')) === inPlaying)  {
//                 if (!hasBeenMoved) {
//                     // alert('ok')
//                     if (isToMove==1) {
//                         deplacementPion(pawn,pawnEat); 
//                         hasBeenMoved = true;
//                         isToMove = 0
//                         isChangePlayer()
//                         notPlaying()
                        
//                     }
                      
//                 }
//             }
            
//         }
      
       

        
        

//         // event.stopPropagation()    
//     })
// }



// // Supposons que vous ayez ajouté un gestionnaire d'événements de clic à un bouton :


