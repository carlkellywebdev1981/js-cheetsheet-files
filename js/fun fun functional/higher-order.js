 var animals = [
           {name: 'Ali' ,species: 'rabbit'},
           {name: 'Stewie' ,species: 'dog'},
           {name: 'Harold' ,species: 'fish'},
           {name: 'Jimmy' ,species: 'cat'},
           {name: 'Leon' ,species: 'dog'},
           {name: 'Eloise' ,species: 'cat'},
           {name: 'Tessa' ,species: 'fish'},
          
           
       ];
       
       /*****************.MAP (callback function)*********************/
       
       /*The map() method creates a new array with the results of calling a provided function on every element in this array. It transforms and edits every element in that array
       Parameters are current element, index, array.
       */
       
       var names = animals.map(function(animal) {
           return animal.name + ' is a ' + animal.species; 
       });
       
       //es6
       
       //On one line after the arrow function will be implicitly returned
       
       var names = animals.map((animal) => animal.name + ' is a ' + animal.species);
       
       //Even shorter
       
       var names = animals.map((x) => x.name + ' is a ' + x.species);
       
       //Multiple lines 
       
       var names = animals.map((animal) => { 
           return animal.name + ' is a ' + animal.species; 
       });
    
       
       /*****************.FILTER (callback function)*********************/
       
        /*The filter() method returns a new filtered version of the array using a true or false value to see which needs to be included. It creates a new array with all elements that pass the test implemented by the provided function.
        Parameters are element and index.
        */
        var dogs = animals.filter(function(animal) {
            return animal.species === 'dog' 
        });
       
       //es6
       
       var dogs = animals.filter((x) => x.species === 'dog');
       
       
       /*****************.FIND (callback function)*********************/
       
       /*Does the same as filter but is only returns the first element. transforms array into a single item.
       Parameters and element and index.
       */
       
       var dogs = animals.find(function(animal) {
            return animal.species === 'dog' 
        });
       
       //es6
       
       var dogs = animals.find((x) => x.species === 'dog');
    
    
       /*****************.REDUCE (callback function)*********************/
       
       /*The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
       Parameters are running total or accumulator, current value, current index. Also needs initial value.
       */
    
       var orders = [
           {amount: 250},
           {amount:  50},
           {amount: 350},
           {amount: 150},
           {amount: 180}
       ];
       
       var totalAmount = orders.reduce(function(sum, order){
           return sum + order.amount;
       }, 0); //starting point for sum
       
       //es6
       
       var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
       
       