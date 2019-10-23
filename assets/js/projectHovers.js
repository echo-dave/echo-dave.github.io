//Project arrays in the format of title, content
$(document).ready(function () {
let hangman = ["Hangman: word game", "This is a javascript based word game styled with some basic css. The basis for it revolves around a word array from which a random word is chosen, checked to see if it's been used this session, then loads / resets the interface. A number of loops and coditionals are used to account for searching for repeat characters, and displaying them appropriately. Most of the content boxes are java script generated with css styling by class."]


let rps = ["Rock Paper Scisors", "This was a bit of a logic problem in terms all the comparisons for win / loss / tie states. Initially a sieries of if statements were used to work out the problem before consolidating to loops. The computer choice is randomly generated by javascript standard function, floored, multiplied by 3 then compared agaist an arry."]


//mouse cursor funtion

function mouseOver(event){
    let left = event.clientX + 10 +  "px";
    let heightPopup = $('#popup').css("height").length - 2;
    heightPopup = $('#popup').css("height").substring(0,heightPopup);
    console.log(heightPopup);
    let top = parseInt(event.clientY) - parseInt(heightPopup) + "px";
    console.log(`top ${top} left ${left}`)
    $('#popup').css({top:top,left:left});
}

//output to screen
$("#hangman").hover(function() {
    $(`<div id="popup">`).appendTo('body');
      $('#popup').html(`<h1>${hangman[0]}</h1><p>${hangman[1]}</p>`)
    mouseOver(event);
    console.log("hover");
},function(){
    $('#popup').remove();
    console.log("leave hover");
});


$("#rps").hover(function() {
    $(`<div id="popup">`).appendTo('body');
      $('#popup').html(`<h1>${rps[0]}</h1><p>${rps[1]}</p>`)
    mouseOver(event);
    console.log("hover");
},function(){
    $('#popup').remove();
    console.log("leave hover");
});





//attempt to abstract functions
function mousein(project) {
    $(`<div id="popup">`).appendTo('body');
      $('#popup').html(`<h1>${project[0]}</h1><p>${project[1]}</p>`)
    mouseOver(event);
    console.log("hover");
}
function mouseout(){
    $('#popup').remove();
    console.log("leave hover");
};



//$("#rps").hover(mousein(rps)),mouseout();





});