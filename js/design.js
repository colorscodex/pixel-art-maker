/*
    @description: Code to make a N by M grid.
    @param {number} N, number of rows.
    @param {number} M, number of columns (cells) within a row.
    @color #b3b3b3, Magnesium color, to blur the color of the grid.
 */ 

function makeGrid(){

    /* Select the DOM element with an ID of "pixel-canvas", */
    /* With the .innerHTML property, I set the HTML content inside the selected element with a string "_". */
    
    document.getElementById("pixel-canvas").innerHTML=''; 
         
    /* Now, I select and store in a variable for easy access. */

   const N = document.getElementById("input_height").value; 
   const M = document.getElementById("input_width").value;

   for(let i = 1; i<= N; i++){

        const row = document.getElementById("pixel-canvas").insertRow();
        row.style.borderColor="#b3b3b3"; 
     
        for(let j = 1; j<= M; j++){

            const cell = row.insertCell();
            cell.style.borderColor="#b3b3b3";
        }      
    }                    
}

/*
     @description: Once the datas are selected by the user, we use the following call to create the grid. 

     The submit action is to submit the datas. Here it “saves” the row and column numbers and reset the table. 
     But we need the table to stable so we can access the row/column numbers and be able to create the grid with these variables. 
     For that, the "event.prevent.Default()" cancels the event if it is cancelable, 
     meaning that the default action that belongs to the event will not occur.
 */  
 
$('#sizePicker').submit(function(event){

    event.preventDefault();
    makeGrid();

});


/* 
    @description: For painting the grid-cell we select id of the table to call td element 
                because the table exists from beginning.
*/
/*
 *  To choose a color from the Piker and paint the square. */


$("#pixel-canvas").on("click", "td", function(){

    const code = document.getElementById("myColorPicker").value;
    $(this).css("background-color", code);

});

/*  
    Adding Content To The Page 
    ==========================
*/  
/*
    @description: I create lines to finish the first section, where I built the grid for painting it, 
                using document.createElement() method.
 */

$("h1").last().before(document.createElement("hr"));
$("hr").first().after("<hr>");
$("hr").last().after("<hr>");
$("hr").css("border", "1px solid  #808000");
     
 
/*
    @description: I create a button for knowing the color code that 
                we have used to design and store it in a variable.
*/

$("#myButton-action").on("click",function(event) {

    event.preventDefault();

    const code = document.getElementById("myColorPicker").value;

    $("#colorCode").append(code + "; ");
    
});
  

/*   
    @description: I create an input type reset for deleting the color code, 
                I use ready() method because it makes a function available after the document is loaded.
*/

$(document).ready(function(){

    $("#deleteCode").click(function(){
        
        $("#colorCode").empty();
    });
    
    $("#deleteText").click(function(){
           
        $("textarea").empty();
    }); 

});


/*
    @description:  To create a line for decoration the page. 
                The global function makeLine() returns the line and we can choose the lenght. 
                But first, I create the tag element with its own style.
*/
 
$("form").last().before(document.createElement("h4"));
$("h4").attr("id","myH4").css("font-family","Monoton")
                             .css("font-size","20px");

function makeLine(length) {

    let line = "☰";
        
    for(let i= 1; i<= length; i++){
            line+=  "☰";	  
    }

    return line;
} 
     
document.getElementById("myH4").innerHTML = makeLine(12); 
       
/*
    @description: a drawer full-width. 
                I created a drawer for small devices to seeing the Art Gallery.
                And when it is called it has a width that fills all the frame.
                For closing I remove the width. 
*//*
    For creating an event listener:
    ===============================

    1- <event-target>: It is the element with id="openDrawer/closeDrawer 
    Store inside a variable called x/y using the method document.getElementById(). 

    2- Define the function open/close.

    3- <event-target>.addEventListener(<event-to-listen-for>, function-to-run-when-an-event-happens>);
*/
   
const x = document.getElementById("openDrawer");  
function open () {
    document.getElementById("drawer").style.width = "100%";
}

x.addEventListener ("click", open);

const y = document.getElementById("closeDrawer");
function close () {
    
    document.getElementById("drawer").style.width = "0";       
}

y.addEventListener ("click", close);



