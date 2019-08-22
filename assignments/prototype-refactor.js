/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    } 
    greet () {
      return `My name is ${this.name} and I am ${this.age} years old`
    }
    
    eat (food) {
      this.stomach.push(food);
    }
    
    poop () {
      this.stomach = [];
    }
};
  
var pere = new Person("Pere", 36);
console.log(pere);
  
  /*
    TASK 2
  
    - Build a Car constructor that takes model name and make.
    - Give cars the ability to drive a distance.
    - By driving a car, the distance driven should be added to an "odometer" property.
    - Give cars the ability to crash.
    - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
    - Give cars the ability to be repaired.
    - A repaired car can be driven again. */
  
  class Car { 
    constructor (model, make) {
        this.model = model;
        this.make = make;
        this.odometer = 0;
        this.canBeDriven = true;
    }
  
    drive (kilometers) {
      if (this.canBeDriven === true) {
        this.odometer+=kilometers;
      } else {
        return `I crashed at ${this.odometer} kilometers!`
      }
    }
    crash () {
      this.canBeDriven = false;
    }
    repair () {
      this.canBeDriven = true;
    }
  };
  var toyota = new Car ("Corolla", "Toyota");
  console.log(toyota);
  
  
    /*
    TASK 3
  
    - Build a Baby constructor that subclasses the Person built earlier.
    - Babies of course inherit the ability to greet, which can be strange.
    - Babies should have the ability to play, which persons don't.
    - By playing, a string is returned with some text of your choosing.*/

    class Baby extends Person {
      play () {
        return `I, ${this.name}, love to play`
      }
    };
  
    var babyShark = new Baby ("little one", 1);
    console.log(babyShark.name);
    console.log(babyShark.play());
    console.log(babyShark.greet());
  
    /*
    TASK 4
  
    Use your imagination and come up with constructors that allow to build objects
    With amazing and original capabilities. Build 3 small ones, or a very
    complicated one with lots of state. Surprise us!
  
  */
  class Employee {
    constructor (name, department) {
      this.name = name;
      this.department = department;
      this.warnings = 0;
    }
    lateForWork (hours) {
      let impactOnWarnings = Number(Math.round(hours * 0.5));
      this.warnings+=impactOnWarnings;
      return `You are late ${hours} hours. (grumble grumble) I am giving you ${impactOnWarnings} warning(s). Watch out, you already have ${this.warnings} warnings..`
    };
    watchYoutube () {
      this.warnings+=1;
      return `I caught you watching YouTube at work. I am giving you 1 warning. Watch out, you already have ${this.warnings}..`;
    };
    lunchBreakTooLong () {
      this.warnings+=1;
      return `You took a lunch break too long. I have to give you a warning. Watch out, you already have ${this.warnings} warnings..`;
    };
    employeeReview () {
      if (this.warnings === 0) {
        return `You are doing great!`;
      } else if (this.warnings > 0 && this.warnings < 3) {
        return `Be careful, you have ${this.warnings} warnings. You need to improve!`;
      } 
      return `You have ${this.warnings} warnings. You are fired!`;
    }
  }
  let john = new Employee ("john", "eng");
  console.log(john);
  

  /*
  
    STRETCH TASK
  
    Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
    In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
    At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
    Each constructor function has unique properties and methods that are defined in their block comments below:
  */
  
  /*
    === GameObject ===
    * createdAt
    * name
    * dimensions (These represent the character's size in the video game)
    * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  */
  
  function GameObject (input) {
    this.createdAt = input.createdAt;
    this.name = input.name;
    this.dimensions = input.dimensions;
  }
  
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
  }
  
  /*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  */
  
  function CharacterStats (input) {
    GameObject.call(this, input);
    this.healthPoints = input.healthPoints;
  };
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function () {
    // return `${this} took damage`;
    return `${this.name} took damage.`;
  };
  
  
  
  /*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
  */
  
  function Humanoid (input) {
    CharacterStats.call(this, input)
    this.team = input.team;
    this.weapons = input.weapons;
    this.language = input.language;
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
  };
  
  
  // var newMan = new Humanoid(new Date(), "miname", {length: 2, width: 1}, 20, "test" , "test" , "test")
  // console.log(newMan.dimensions);
  /*
   * Inheritance chain: GameObject -> CharacterStats -> Humanoid
   * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
   * Instances of CharacterStats should have all of the same properties as GameObject.
   */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    // console.log(swordsman);
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
