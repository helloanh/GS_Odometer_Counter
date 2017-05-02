/* Money Counter

startDate is June 20, 2016 Eastern Time at 12:00AM
startAmount is 0.00 dollars
endDate is June 20, 2018 Eastern Time at 11:59PM

from startDate, startAmount increases by $21.00 per seconds
build a counter that update the value for each second, the number is increase by 21


*/

var startDateTime = new Date(2016, 1, 20, 0, 0, 0, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);
    
    var d = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;
    
    document.getElementById("time-elapsed").innerHTML = d+" day(s), "+h+" hour(s), "+m+" minute(s), "+s+" second(s) working";
}

setInterval(updateClock, 1000);