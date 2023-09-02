// type CarYear = number;
// type CarType = string;
// type CarModel = string;
// type Car = {
//     year: CarYear,
//     type: CarType,
//     model: CarModel
// }

// const carYear: CarYear = 2001
// const carType: CarType = "Toyota"
// const carModel: CarModel = "Corolla"
// const car: Car ={
//     year: carYear,
//     type: carType,
//     model: carModel
// }

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

// Interfaces -Interfaces are similar to type aliases, except they only apply to object types.

// interface Rectangle {
//     height: number,
//     width: number
// }

// const rectangle: Rectangle = {
//     height: 20,
//     width: 10
// }


// Extending Interfaces -means you are creating a new interface with the same properties as the original, plus something new.

interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle{
    color: string
}

const ColoredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
}