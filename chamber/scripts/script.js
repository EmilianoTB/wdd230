/* 
this search 
for the current 
year id in the html
*/
let currentYear = new Date().getFullYear();
let currentYearElement = document.getElementById("currentYear");
/* 
uses the object Date 
to obtain year 
but we just need the year 
that's why I use getFullYear()
*/

currentYearElement.innerHTML = currentYear;
 

// /* last modified */

let LastModif = new Date(document.lastModified);
console.log(LastModif)
let lastModificationTime = document.getElementById("lastModified");
 
lastModificationTime.innerHTML = LastModif;

/* date header */

var currentDate = new Date();
var day = currentDate.getDay();
var dayNum = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var dateString = days[day] + ", " + dayNum + " " + months[month] + " " + year;

document.getElementById("get_date").innerHTML = dateString;
