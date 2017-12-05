function solve() {
	var Course = {
		init: function(title, presentations) { //title = string, presentations = array of pres titles
     
      if (presentations.length < 1) {
        throw Error ('No presentations');
      }

      function validateTitle (title) {
          if (!title.length) {
            throw Error (`No title length`);
          }
          if (title.charAt(0) === ' ' || title.charAt(title.length - 1) === ' ') {
            throw Error (`Cannot start or end with space`);
          }
          if (title.match(/\s\s/)) {
             throw Error (`No consecutive spaces`);
          }
      }

      validateTitle(title);
      
      for(let presTitle of presentations){
        validateTitle(presTitle);
      } 

      this.students = [];
      this.homeworks = []; // filled with presentation objects

      let presentation = {}; //like {id: 1, title: 'Intro', } ====> homeworks

      for (var i = 0; i < presentations.length; i+=1) {
        presentation.id = i + 1;
        presentation.title = presentations[i];
        this.homeworks.push(presentation);
      }

      return this;
    },
    
		addStudent: function(name) { //string in format 'FirstName LastName'
      let splitNames = name.split(' ');

      if (splitNames.length === 1 || splitNames.length > 2) {
        throw Error (`Invalid student names`);
      }

      splitNames.forEach(function(name) {
        if (!name.match(/(^[A-Z]{1})([a-z]*$)/)) {
          throw Error ('Names must start with upper case letter');
        }
      });

      let student = {}; //maybe because is good to put Object with props in array
      student.id = this.students.length + 1;
      student.firstname = splitNames[0];
      student.lastname = splitNames[1];

      this.students.push(student);

      return student.id; //by rules of homework
          
    },
    
		getAllStudents: function() {
      return this.students;
    },
    
		submitHomework: function(studentID, homeworkID) {
      if (!this.students.some(student => student.id === studentID)) {
           throw Error('Invalid StudentID');
        }
        if (!this.homeworks.some(homework => homework.id === homeworkID)) {
           throw Error('Invalid HomeworkID');
        }
    },
    
		pushExamResults: function(results) { //array of items in the format {StudentID: ..., score: ...}
      if (results === 'undefined') {
        throw Error('No arguments given');
      }
      if (!Array.isArray(results)) {
        throw Error('Given string, not array as parameter');
      }
      if (results.some(x => Number.isNaN(Number(x.score)))) {
        throw Error('Score is not a Number');
      }

      for (let i = 0; i < results.length; i+=1) {
        let currentStudent = results[i].StudentID;

        for (let j = i + 1; j < results.length; j+=1) {

        if (currentStudent === results[j].StudentID) {
          throw Error('Same student twice'); //check only first student??
        }

        }  
      }

      for (let i = 0; i < results.length; i+=1) {
        if (results[i].StudentID < this.students[0].id) {
          throw Error(`Id is smaller than first student's number`);
        } 
      }

      results.forEach(function (result) {
       if (Number.isNaN(Number(result.StudentID))) {
         throw Error('Id is not a number');
       }
     });

     let studentsCount = this.students.length;
     results.forEach(function(result){
        if (result.StudentID > studentsCount) {
          throw Error('Id is bigger than students number');
        }
     });
		},
		getTopStudents: function() {
      
		}
	};

	return Course;
}


module.exports = solve;