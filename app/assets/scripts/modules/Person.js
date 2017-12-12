class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }


 
  greet() {
    console.log("Hellozaaa, my name is " + this.name + " and my favorite color is: " + this.favoriteColor + " .")
  }  
}

//module.exports = Person;  node all the exports are the constructor function
export default Person; //ES6 way
