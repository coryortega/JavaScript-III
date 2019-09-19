/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The "this" keyword uses context to give itself definition. If you do not give it context, it will automatically refer to the window/console object.
* 2. This is when you give definition to the "this" keyword and it refers to a function that is usually indicated by the preceding dot.
* 3. New binding is used when a constructor function is used. It is the object that is created and returned by the constructor function.
* 4. Explicit binding occurs whenever the call or apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName('cory');

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };

  myObj.sayHello('Cory');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

jerry.speak.call(newman); newman.speak.apply(jerry); //<----- override CordialPerson's objects using call and apply


// code example for Explicit Binding