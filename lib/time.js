var today = new Date();
var hourNow = today.getHours();
var greeting;

var run = true;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome';
}
document.write('<h2>' + greeting + '</h2>')
document.write('<p>' + 'DATE/TIME: ' + today + '</p>')

