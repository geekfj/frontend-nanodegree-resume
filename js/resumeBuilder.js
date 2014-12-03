/* 
   It appears in the helper.js
   var HTMLheaderName = "<h1 id='name'>%data%</h1>";
   var HTMLheaderRole = "<span>%data%</span><hr/>";
 */
//Populate the space with content.
var formattedName = HTMLheaderName.replace("%data%","Fu Jian");
var formattedRole = HTMLheaderRole.replace("%data%","Full Stack Engineer/Educator");
//Put the contents in specific place.
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var s = "audacity";
console.log(s[1].toUpperCase()+s.slice(2));


