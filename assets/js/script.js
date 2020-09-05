$(document).ready(function (){
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
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // Style Hours based on past, present, future
    var hourCheck = function() {
        var currentTime = moment().hours();
        console.log(currentTime);
        
        $(".time-block").each(function () {
            var hourRow = parseInt($(this).attr("id").split("-")[1]);
            console.log(hourRow, currentTime);
            if (hourRow < currentTime) {
                $(this).addClass("past");
            }
            else if (hourRow === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    };

    hourCheck();

    // Set Interval

    var interval = setInterval(hourCheck, 15000);

});