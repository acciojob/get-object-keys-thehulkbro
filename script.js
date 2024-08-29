let student ={
	name : "abhi"
};
	Object.prptotype.getkeys= function() {
	return Object.keys(this);
	};
//how to get value of keys
let keys = student.getkeys();
console.log(keys);