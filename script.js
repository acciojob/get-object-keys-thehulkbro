// Create an object called student with a property called name
const student = {
  name: "John Doe"
};

// Add a method to the Object prototype called getKeys
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Use the getKeys method on the student object
const keys = student.getKeys();
console.log(keys); // Output: ["name"]
