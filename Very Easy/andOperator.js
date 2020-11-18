// The && AND operator is a logical operator that compares two boolean values and returns true if both are true 

const result = ( a,b ) => ( a && b );

console.log(`Result of true AND true is ${result(true,true)}  `);
console.log(`Result of true AND false is ${result(true,false)}  `);
console.log(`Result of false AND true is ${result(false,true)}  `);
console.log(`Result of false AND false is ${result(false,false)}  `);