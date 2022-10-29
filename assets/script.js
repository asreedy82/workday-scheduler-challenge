
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

loadSavedTasks();

//var = $('#'variable)
/* 
good
function getTaskSubmit () {
    $(".form-control").each(function (index) {
        var timeBoxTime = $(this).data("time");
        console.log(timeBoxTime);
        console.log($('#'+timeBoxTime).val());
    })
}
 */
/* $("button").on('click', function (event) {
    //var timeBoxInput = $('input[name="task"]').val();
    console.log($(event.target).data("time"));
    //console.log(timeBoxInput);
})  */
    

//var timeBoxInput = $('input[name="task"]').val();

//get input
/* function getTaskSubmit(event) {
    event.preventDefault();

    var timeBoxInput = $(this,'input:text').val();
    console.log(timeBoxInput);
    if (!timeBoxInput) {
        console.log("No task entered");
        return;
    }
    console.log(timeBoxInput);
    var taskHour = $(this).data("time"); 
    if (taskHour == 9) {
        localStorage.setItem("hour9", timeBoxInput);
    } else if (taskHour == 10) {
        localStorage.setItem("hour10", timeBoxInput);
    } else if (taskHour == 11) {
        localStorage.setItem("hour11", timeBoxInput);
    } else if (taskHour == 12) {
        localStorage.setItem("hour12", timeBoxInput);
    } else if (taskHour == 13) {
        localStorage.setItem("hour13", timeBoxInput);
    } else if (taskHour == 14) {
        localStorage.setItem("hour14", timeBoxInput);
    } else if (taskHour == 15) {
        localStorage.setItem("hour15", timeBoxInput);
    } else if (taskHour == 16) {
        localStorage.setItem("hour16", timeBoxInput);
    } else if (taskHour == 17) {
        localStorage.setItem("hour17", timeBoxInput);
    } else {
        console.log("Error");
    }
    
}

 */
//save function


//to do


//save value from boxes in local storage


