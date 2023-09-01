// const names: string[] = ["dubey"];
// names.push("suraj");
// names.push("rick and morty");


// console.log(names);

// readonly - it prevents array from being changed

// const names: readonly string[] = ["dubey"];
// names.push("suraj"); //error
// names.push("rick and morty"); //error


// console.log(names);

// type inference - ts can infer the type of an array if it has values.

const number = [1,2,3];
number.push();
number.push["5"]; //error cant be type of string

console.log(number);