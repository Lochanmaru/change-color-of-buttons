//lets start by collecting all the buttons
//we will give it a tag of button
//by writing this code what will happen is any one of  the element which has the tag 'button'...this code will print out an array of all elements being inside of it

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

//the thing is that all the button for eg. red one or green one or even random will be easy but the most trickiest onw will be to make reset one and thats coz when we will click reset the console will have no idea to know what its original color was , so we have to write a code that tells what thier original color was , so we need to write that message down before we change any colors , so we need to write what alll of the colors actuallly are and store that information so that for example when we paint all of these red or green we always remember what their original color was and what their particular order was// 

//so first, lets make the copy of all the buttons in the form of an array

var copyallbuttons = [];

//here we are making a for lop asking to loop through the same number of time as there are buttons , so this loop is gonnna run 4 times 
for(let i=0 ; i<all_buttons.length ; i++) {

//in this line of code we are asking the for loop to do this partcular thing 4 times which is  to the array  copy all the buttons and push each button and by  this we will remember every button , all we are literally doing is making an duplicate and since we only care about the class :-

    copyallbuttons.push(all_buttons[i].classList[1]);
}

console.log(copyallbuttons);

// now what we wanna do is we want to remove all the buttons color when we change color and introduce new ones so now the question arises that how do we remove the color , well because of the bootstrap code the color comes from the button class which is for example btn btn-primary in which btn-primary tells me the color which is blue . so what we can do is whenever we click to chage we can write a piece of code which helps removing the class btn-primary from btn btn-primary 

//after clicking to change we have done the first step of removing the color but now we also should write a code in which whatever color  someone has clicked on that color should show up and for that we will again write a piece of code after removing we will code for adding new color

//lets code this up

//lets first write a function which is gonna be the ultinate function which will define what will take place and on change we want that this function should get triggered

function buttoncolorchange(buttonthingy) {
    //if button value is x then run the y function

   if (buttonthingy.value === 'red'){
       buttonsred();
   } else if (buttonthingy.value === 'green' ){
       buttonsgreen();
   }
    else if (buttonthingy.value === 'reset' ){
       buttonscolorreset();
   }
    else if (buttonthingy.value === 'random' ){
       randomcolors();
   }
}
//whatever functions we have named above now we will provide them with the job which they are suppose to do

function buttonsred(){
    for(let i=0; i < all_buttons.length; i++){
        //so, now we are gonna loop through and say hey buttons red , you do one thing you get the class list and then remove it 
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        //now as we discussed we will immediately add btn-danger to it to turn it into red
        all_buttons[i].classList.add('btn-danger');



    }

}
function buttonsred(){
    for(let i=0; i < all_buttons.length; i++){
        //so, now we are gonna loop through and say hey buttons red , you do one thing you get the class list and then remove it 
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        //now as we discussed we will immediately add btn-danger to it to turn it into red
        all_buttons[i].classList.add('btn-danger');



    }

}
function buttonscolorreset(){
    for(let i=0; i < all_buttons.length; i++){
        //so, now we are gonna loop through and say hey buttons red , you do one thing you get the class list and then remove it 
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        //now as we discussed we will immediately add btn-danger to it to turn it into red
        all_buttons[i].classList.add('btn-success');



    }

}
function buttonsgreen(){
    for(let i=0; i < all_buttons.length; i++){
        //so, now we are gonna loop through and say hey buttons red , you do one thing you get the class list and then remove it 
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        //now as we discussed we will immediately add btn-danger to it to turn it into red
        all_buttons[i].classList.add('btn-success');



    }

}

function buttonscolorreset(){

    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        // so now the list that we mentioned will be used
        all_buttons[i].classList.add(copyallbuttons[i]);


    }
}

function randomcolors() {
    //for random lets give bot choices
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning' ]
    for(let i=0; i< all_buttons.length; i++){
        var randomnumber = Math.floor(Math.random() * 4);
        
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomnumber]);
    }


    
    
}