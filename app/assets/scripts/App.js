var $ = require('jquery'); //added jquiery with webpack
var Person = require('./modules/Person');

alert("testtttttabsdsdsdsdsd");

var john = new Person("John Kanti", "violet");
john.greet();

var jane = new Person("Jane Foster", "green");
jane.greet();

$("h1").remove();