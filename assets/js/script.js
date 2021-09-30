$(document).ready(function() {
// On save button click, grab value of description and id of time
$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(value);
    console.log(time);
})

var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do"));


})