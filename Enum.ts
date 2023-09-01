// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

// enum cardinaDirection {
//     North,
//     East,
//     West,
//     South
// }

// let currentDirection = cardinaDirection.North;
// console.log(currentDirection);

// Numeric Enums - Fully Initialized

enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCode.BadRequest);

// String Enums

enum cardinaDirection {
    North = "North" ,
    East = "East",
    West = "West",
    South = "South"
}

console.log(cardinaDirection.North);