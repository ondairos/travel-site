var $ = require('jquery'); //added jquiery with webpack
// var Person = require('./modules/Person');
import Person from './modules/Person'; //ES6 Way importing instead of node

class Adult extends Person {
  payTaxes(){
    console.log(this.name + " now owes 0 dollars in taxes.");
  }
}


alert("testtttttabsdsdsdsdsd");

var john = new Person("John Kanti", "violet");
john.greet();

var jane = new Adult("Jane Foster", "purple");
jane.greet();
jane.payTaxes();

$("h1").remove();