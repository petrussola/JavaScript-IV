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
    return `${student.name} receives a perfect score on ${subject}`
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

class ProjectManager extends Instructor {
  constructor(data) {
    super(data);
    this.gradClassName = data.gradClassName;
    this.favInstructor = data.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`
  }
  debugsCode(studentObject, subject) {
    return `${this.name} debugs ${studentObject.name}'s code on ${subject}`
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
const maria = new ProjectManager({
  name: 'Maria',
  location: 'London',
  age: 38,
  favLanguage: 'CSS',
  specialty: 'Back-end',
  catchPhrase: `I say something`,
  previousBackground: 'Tech industry',
  className: 'WEBEU1',
  favSubjects: ['React', 'CSS', 'HTML'],
  gradClassName: 'WEBEU2',
  favInstructor: "Gabe"
});

const gabe = new Instructor({
  name: 'Gabe',
  location: 'everywhere',
  age: 42,
  favLanguage: 'all',
  specialty: 'all',
  catchPhrase: `grumble, grumble`,
});
