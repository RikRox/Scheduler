//var todayEl = document.getElementById("currentDay");
var todayEl = $("#currentDay")[0];

var today = new Date();

todayEl.textContent = today;



//create time table
var rowHour=8;

for(var i =0; i<= 8; i++){
    $('.container').append('<div class="row" id="'+rowHour+'"><div class="col hour"">'+rowHour+':00</div><div class="col-6 description textarea"><textarea>Text Area</textarea></div><div class="col"><button class="saveBtn" type="button">Save</button></div></div>');
  
    rowHour = 9 + i;
    console.log("row hour" + rowHour);

}

  //get current hour to change styling
  var currentHour = today.getHours();

  console.log(currentHour);

// var test = document.getElementsByClassName("hour");
// console.log($(".hour").text());
//console.log(test.text());


//add/edit descriptions
// row was clicked
$(".description").on("click", "textarea", function() {
   // console.log(this);
  // var text = $(this).text();
   var text = $(this).text().trim();
   console.log(text);

   var textInput = $("<textarea>")
//.attr("type", "text")
.addClass("form-control")
.val(text);
$(this).replaceWith(textInput);
textInput.trigger("focus");
  });




//create object to be able to use local storage
var plans = {};






    //revert back when it goes out of focus, use that to save
    $(".description").on("blur", "textarea", function() {

        // get the textarea's current value/text
    var text = $(this)
    .val()
    .trim();

    console.log(text);

    // get the parent ul's id attribute
    // var status = $(this)
    // .closest(".description")
    // .attr("id")
    // .replace("list-", "");

    // get the task's position in the list of other li elements
    // var index = $(this)
    // .closest(".list-group-item")
    // .index();



});


//colors for 8:00
 if($("#8").text().charAt(0) == currentHour) {

    $("#8").addClass('present');
    
 }else if ($("#8").text().charAt(0) > currentHour) {

    $("#8").addClass('future');

 } $("#8").addClass('past');


 //colors for 9:00
 if($("#9").text().charAt(0) == currentHour) {

    $("#9").addClass('present');
    
 }else if ($("#9").text().charAt(0) > currentHour) {

    $("#9").addClass('future');

 } $("#9").addClass('past');


 //colors for 10:00
 if($("#10").text().substring(0,2) == currentHour) {

    $("#10").addClass('present');
    
 }else if ($("#10").text().substring(0,2) > currentHour) {

    $("#10").addClass('future');

 } $("#10").addClass('past');


 
 //colors for 11:00
 if($("#11").text().substring(0,2) == currentHour) {

    $("#11").addClass('present');
    
 }else if ($("#11").text().substring(0,2) > currentHour) {

    $("#11").addClass('future');

 } $("#11").addClass('past');


 
 //colors for 12:00
 if($("#12").text().substring(0,2) == currentHour) {

    $("#12").addClass('present');
    
 }else if ($("#12").text().substring(0,2) > currentHour) {

    $("#12").addClass('future');

 } $("#12").addClass('past');


  //colors for 13:00
  if($("#13").text().substring(0,2) == currentHour) {

    $("#13").addClass('present');
    
 }else if ($("#13").text().substring(0,2) > currentHour) {

    $("#13").addClass('future');

 } $("#13").addClass('past');


  //colors for 14:00
  if($("#14").text().substring(0,2) == currentHour) {

    $("#14").addClass('present');
    
 }else if ($("#14").text().substring(0,2) > currentHour) {

    $("#14").addClass('future');

 } $("#14").addClass('past');


  //colors for 15:00
  if($("#15").text().substring(0,2) == currentHour) {

    $("#15").addClass('present');
    
 }else if ($("#15").text().substring(0,2) > currentHour) {

    $("#15").addClass('future');

 } $("#15").addClass('past');



   //colors for 16:00
   if($("#16").text().substring(0,2) === currentHour) {

    $("#16").addClass('present');
    
 }else if ($("#16").text().substring(0,2) > currentHour) {

    $("#16").addClass('future');

 } $("#16").addClass('past');


// if ($("$#8"))
console.log($("#8").text().charAt(0));
console.log($("#10").text().substring(0,2));
console.log(currentHour);

//console.log($("div.col.hour"));



