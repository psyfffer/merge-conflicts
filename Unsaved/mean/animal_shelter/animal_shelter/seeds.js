var mongoose = require('mongoose');
var Animal = require('./models/animal');

mongoose.connect('mongodb://localhost/animals');

function quit() {
  mongoose.disconnect();
  console.log('\nQuitting!');
}

function handleError(err) {
  console.log('Error: ', err);
  quit();
  return err;
}

console.log('clear database');
Animal.remove({})
.then(function(){
  console.log('database cleared');
  var felix = new Animal({ name: 'Felix', breed: 'tabby', dob: 1205656056000, gender: 'M', family: 'cats', status: 'orphan' });
  var spot = new Animal({ name: 'Spot', breed: 'border collie', dob: 1305656056000, gender: 'F', family: 'dogs', status: 'adopted' });
  var ralph = new Animal({ name: 'Ralph', breed: 'Norwegian blue parrot', dob: 1405656056000, gender: 'M', family: 'birds', status: 'orphan' });
  return Animal.create([felix, spot, ralph]);
})
.then(function(savedAnimals) {
  console.log('saved ', savedAnimals.length, ' animals');
  return Animal.find({});
})
.then(function(allAnimals) {
  console.log('all animals: ');
  allAnimals.forEach(function(animal) {
    console.log(animal);
  });
  quit();
});
