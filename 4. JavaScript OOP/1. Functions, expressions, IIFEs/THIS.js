// NORMAL FUNCTION THIS
var pets = {
    names: ['Baron'],
    owner: 'Jason',
    description: function(){
      return this.names.map(function(pet){
        console.log(`${this.owner} knows an awesome dog named ${pet}.`);
        console.log(`${this} knows an awesome dog named ${pet}.`);
        console.log(`--------------`);
      });
    }
  };    

  pets.description();

// NORMAL FUNCTION THIS
  var pets2 = {
    names: ['Baron'],
    owner: 'Jason',
    description: function(){
      var self = this;
      return this.names.map(function(pet){
        console.log(`${self.owner} knows an awesome dog named ${pet}.`);
        console.log(`${this} knows an awesome dog named ${pet}.`);
        console.log(`--------------`);
      });
    }
  };

// FAT ARROW THIS
  pets2.description();

  var pets3 = {
    names: ['Baron'],
    owner: 'Jason',
    description: function(){
      return this.names.map((pet) => {
        console.log(`${this.owner} knows an awesome dog named ${pet}.`);
        console.log(`${this} knows an awesome dog named ${pet}.`);
        console.log(`--------------`);
      });
    }
  };

  pets3.description();