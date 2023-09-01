// type :any

// let u = true;
// u = "string";
// Math.round(u);

// fix

// let u: any = true;
// u = "string";
// console.log(u);
// console.log(Math.round(u));

// type unknown 
//unknown is similar to any but safer alternative to any

let w: unknown  = 1;
w = "String";
w = {
    runANonExistedMethod: () => {
        console.log("I think therefore I am");
    }
} as {runANonExistedMethod: ()=> void}

if(typeof w=== 'object' && w!== null){
    (w as { runANonExistedMethod : Function}).runANonExistedMethod();
}

//

// let x: never = true; //let x: never = true;
// let y: undefined = undefined;
let z: null = null;
//undefined and null are types that refer to the JavaScript primitives undefined and null respectively.