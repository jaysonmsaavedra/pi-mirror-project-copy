$(document).ready(function() {
    // Create two variable with the names of the months and days in an array
    var monthNames = [ "January","February","March","April","May","June","July","August","September","October","November","December"]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    // Create a newDate() object
    var newDate = new Date();
    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());
    var currentDate = newDate.getDate()
    var todaysDate;
    // Get todays date and put it into an array, flip the array around to get the last digit to figure out which ending to put on it
    var lastDigit = (""+currentDate).split("").sort(function(a, b) {
        return a - b;
    });
    console.log(lastDigit[0]);
    switch (lastDigit[0]) {
        case '1':
            todaysDate = newDate.getDate() + "st";
            break;
        case '2':
            todaysDate = newDate.getDate() + "nd";
            break;
        case '3':
            todaysDate = newDate.getDate() + "rd";
            break;
        default:
            todaysDate = newDate.getDate() + "th"
            break;
    }
    
    
    // Output the day, date, month and year    
    $('#Date').html(dayNames[newDate.getDay()] + " the " + todaysDate + ', ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval( function() {
	   // Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();
	   // Add a leading zero to seconds value
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	
    setInterval( function() {
	   // Create a newDate() object and extract the minutes of the current time on the visitor's
	   var minutes = new Date().getMinutes();
        // Add a leading zero to the minutes value
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
	
    setInterval( function() {
	   // Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();
	   // Add a leading zero to the hours value
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000)
}); 