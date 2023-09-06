// typescript classes

// class Person{
//     name: string;
// }

// const person = new Person();
// person.name = "Billie Jean";

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it.

// class Person{
//     private name: string;
//     public constructor(name: string){
//         this.name = name;
//     }

//     public getName(): string{
//         return this.name;
//     }
// }

// const person = new Person("Jane");
// console.log(person.getName());

// The this keyword in a class usually refers to the instance of the class.

// Inheritance: Implements

interface shape{
    getArea: () => number;
}

class rectangle implements shape {
    public constructor(protected readonly width: number, protected readonly height: number){}
    public getArea(): number {
        return this.width*this.height;
    }
}