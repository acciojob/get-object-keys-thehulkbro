// Create an object called student with a property called name
let student = {
  name: "John Doe"
};

// Add a method to the Object prototype called getKeys
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Use the getKeys method on the student object
let keys = student.getKeys();
console.log(keys); // Output: ["name"]
