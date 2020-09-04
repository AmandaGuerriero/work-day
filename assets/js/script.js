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


// Style Hours based on past, present, future
var hourCheck = function() {
    var currentTime = moment().format("hA");
    console.log(currentTime);
    
    $(".time-block").each(function () {
        var hourRow = ("#hour9am")
        console.log(hourRow, currentTime);
        if (hourRow < currentTime) {
            $(this).addClass("past");
        }
        else if (hourRow === currentTime) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
};

hourCheck ();