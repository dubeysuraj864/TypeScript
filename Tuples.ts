// tuple is a typed array with pre defined length, type, each index

// define our tuple
let ourTuple: [number, boolean, string];

//initialize correctly
ourTuple = [5,false, "Electric Lambo makes no noise"];

ourTuple.push("Sky has no limit");


// Named tuples allow us to provide context for our values at each index.

// const graph: [x: number , y: number] = [55.3, 55.6];
// console.log(graph);

// Destructuring Tuples - Since tuples are arrays we can also destructure them.

const graph: [number, number]= [44.3,66.4];

const [x,y] = graph;