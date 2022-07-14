//var todayEl = document.getElementById("currentDay");
var todayEl = $("#currentDay")[0];

var today = new Date();

todayEl.textContent = today;

 var plans =["schedule"];



//create time table
var rowHour=8;

for(var i =0; i<= 8; i++){
    $('.container').append('<div class="row" id="'+rowHour+'"><div class="col hour"">'+rowHour+':00</div><textarea class="col-6 description id="txt'+rowHour+'"></textarea><button class="saveBtn col" type="button">Save</button></div>');
  
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
$(".saveBtn").on("click", function() {
   // console.log(this);
  // var text = $(this).text();
   var text = $(this).siblings('.description').val();
   console.log(text);

var timeNow = $(this).parent().attr("id");
console.log(timeNow);

localStorage.setItem(timeNow, text);



  });




function loadPlans(){
   $('#8 .description').val(localStorage.getItem('8'));
   $('#9 .description').val(localStorage.getItem('9'));
   $('#10 .description').val(localStorage.getItem('10'));
   $('#11 .description').val(localStorage.getItem('11'));
   $('#12 .description').val(localStorage.getItem('12'));
   $('#13 .description').val(localStorage.getItem('13'));
   $('#14 .description').val(localStorage.getItem('14'));
   $('#15 .description').val(localStorage.getItem('15'));
   $('#16 .description').val(localStorage.getItem('16'));

}

loadPlans();


//function to save events/plans/////////////////////////////////////////////////////

function savePlans(){


   plans[0] = $("#txt8").text();
   plans[1] = $("#txt9").text();
   plans[2] = $("#txt10").text();
   plans[3] = $("#txt11").text();
   plans[4] = $("#txt12").text();
   plans[5] = $("#txt13").text();
   plans[6] = $("#txt14").text();
   plans[7] = $("#txt15").text();
   plans[8] = $("#txt16").text();


   console.log("save the plans"+plans);

   console.log(plans.length);

   localStorage.setItem("events",JSON.stringify(plans));



}


if (plans = ''){
   plans.pop;
} else {
   plans.push;
}




   plans[0] = $("#txt8").text();
   plans[1] = $("#txt9").text();
   plans[2] = $("#txt10").text();
   plans[3] = $("#txt11").text();
   plans[4] = $("#txt12").text();
   plans[5] = $("#txt13").text();
   plans[6] = $("#txt14").text();
   plans[7] = $("#txt15").text();
   plans[8] = $("#txt16").text();

console.log("thiisssss" + plans[0]);
console.log("thiisssss" + plans[1]);
console.log("thiisssss" + plans[2]);
console.log("thiisssss" + plans[3]);
console.log("thiisssss" + plans[4]);
console.log("thiisssss" + plans[5]);
console.log("thiisssss" + plans[6]);
console.log("thiisssss" + plans[7]);
console.log("thiisssss" + plans[8]);





















    //revert back when it goes out of focus, use that to save
    $(".description").on("blur", "textarea", function() {

        // get the textarea's current value/text
    text = $(this)
    .val()
    .trim();

    console.log(text);
    //plans.push(text);
    console.log(plans);
    localStorage.setItem("event", JSON.stringify(plans));
    // get the parent ul's id attribute
    // var status = $(this)
    // .closest(".description")
    // .attr("id")
    // .replace("list-", "");

    // get the task's position in the list of other li elements
    // var index = $(this)
    // .closest(".list-group-item")
    // .index();

      savePlans();


      var plansObj = {
         planEvent : text,
         id : rowHour   
      };


      if (plansObj.planEvent = ''){
         plansObj.planEvent.pop;
      } else {
         plansObj.planEvent.push;
      }

      console.log("show plans obj: " + plansObj);

});
function colorRows(){


currentHour = today.getHours();
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
}

colorRows();
var timeInterval = setInterval(colorRows,30000);

savePlans();