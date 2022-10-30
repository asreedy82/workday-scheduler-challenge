
//displays date in header
var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do, YYYY"));

var currentTime = moment();
var currentTimeHour = Number(currentTime.format("H"));
var timeBoxes = $(".form-control");
console.log(timeBoxes.length);

//color coding time blocks based on past present and future
$(".form-control").each(function (index) {
    var timeBoxTime = $(this).data("time");
    if (timeBoxTime === currentTimeHour) {
        $(this).attr("style", "background-color: rgb(246, 71, 71)");
    } else if (timeBoxTime <= currentTimeHour) {
        $(this).attr("style", "background-color: rgb(186, 181, 181)");
    } else if (timeBoxTime >= currentTimeHour) {
        $(this).attr("style", "background-color: rgb(67, 155, 67)");
    } else {
        console.log("error");
    }
})

//make buttons save what's entered in boxes
function getTaskSubmit () {
    $(".form-control").each(function (index) {
        var timeBoxTime = $(this).data("time");
        console.log(timeBoxTime);
        var timeBoxInput = $('#'+timeBoxTime).val();
        console.log(timeBoxInput);
        localStorage.setItem("hour"+timeBoxTime, timeBoxInput);
    })
}

//run function to get text input on button click
$("button").on('click', getTaskSubmit);

//display saved entries when loading the page
function loadSavedTasks () {
    for (var i = 9; i < 18; i ++){
        var savedTask = localStorage.getItem("hour"+i);
        $('#'+i).attr('value',savedTask);
        console.log("hour" + i + " savedTask is: " + savedTask);
    }
    
}

//run function to display saved entries on page load
loadSavedTasks();

