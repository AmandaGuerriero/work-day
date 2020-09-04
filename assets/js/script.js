// Print current day
var day = document.getElementById("currentDay");
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Save Tasks to Local Storage
$(".saveBtn").on("click", function () {
    var editText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, editText);
    console.log(time, editText);
})

// Retrieve Task from Local Storage
$("#hour9am" .description).val(localStorage.getItem("hour9am"));


// // Style Hours based on past, present, future
// function hourCheck()

// if (hourRow < currentHour) {
//     $(this).addClass("past");
// }