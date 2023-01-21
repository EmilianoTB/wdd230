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
 

/* last modified */

let LastModif = new Date(document.lastModified);
console.log(LastModif)
let lastModificationTime = document.getElementById("lastModified");
 
lastModificationTime.innerHTML = LastModif;