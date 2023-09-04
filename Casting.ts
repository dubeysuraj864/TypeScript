// TypeScript Casting
// there are times when working with types where its necessary to override the type of a variable, such as when incorrect types are provided by a library.

// Casting is the process of overriding a type

// Casting with as - a straightforward way to cast a variable is using the as keyword, which will directly changes the type of the given variable

// let x: unknown = 'Hello';
// console.log((x as string).length); //5


// Casting with <>

// let x: unknown = 'hello';
// console.log((<string>x).length)

// Force casting

// let x = 'hello';
// console.log(((x as unknown) as number).length);

let myVar: unknown = "Hello world!";
console.log((myVar as string).length);