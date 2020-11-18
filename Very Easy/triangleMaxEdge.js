/*
Maximum Edge of a Triangle

Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

(side1 + side2) - 1 = maximum range of third edge.

*/

const maxEdge = (side1,side2) => ( (side1 +side2) -1 );

console.log(`Max edge with side1 =10  and side2 =20 is ${maxEdge(10,20)}`);