// CODE here for your Lambda Classes

/* data input takes the form of an object

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

*/

class Person {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.location = data.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
};

class Instructor extends Person {
  constructor(data) {
    super(data);
    this.specialty = data.specialty;
    this.favLanguage = data.favLanguage;
    this.catchPhrase = data.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    /// FIX ////
    return `${student.name} receives a perfect score on ${subject}`
    /// ////
  }
};

class Student extends Person {
  constructor(data) {
    super(data);
    this.previousBackground = data.previousBackground;
    this.className = data.className;
    this.favSubjects = data.favSubjects; // array
  }
  listsSubjects() {
    // console.log(this.favSubjects);
    let gaga = this.favSubjects.forEach( function (item) { 
      console.log(item); 
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
};

const fred = new Student({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  previousBackground: 'whatever',
  className: 'WEBEU3',
  favSubjects: ['JS', 'CSS', 'HTML']
});

