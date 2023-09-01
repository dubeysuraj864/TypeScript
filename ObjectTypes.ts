const car: {type: string, model : string , year ? : number}= {
    type : "Toyota",
    model: "corolla",
    year: 2020
};
car.year= 2000;
console.log(car);

// Index Signatures - Index signatures can be used for objects without a defined list of properties.

const nameAgeMap : {[index: string] : number} = {};
nameAgeMap.Jack = 25;
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.