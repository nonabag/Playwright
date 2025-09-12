//Classes are blueprints for objects, so you can create multiple object instances based on that class, so they'll have same methods
//same properties but different data
//Typescript shorrtcut for classes is using public, private and protected keywords
class Person {
    constructor (public name: string, private age: number)
    {}

}
const user1 = new Person('Max', 30)

//public properties and methods can be accessed from outside the class, private only from inside the class, protected can be accessed from inside the class and from inherited classes

//getter are returning a property from class when properties are private, for example
class User2{
    constructor (private firstName: string, private lastName: string)
    {}
get fullName()
{
    return this.firstName + ' ' +this.lastName
}
}
const max = new User2('Max', 'Abcd');
console.log(max.fullName)

//setters are used to set a value to a private property
class User1 {
    private _firstName: string = '';

    set firstName(name:  string)
    {
        this._firstName = name;

    }

    //besided setters and getters there's also static
    static greet()
    {
        console.log('Barev');
    }
}
User1.greet(); // Barev

//inheritance is using extends keyword, for new class inherits properties and methods from the base class and can add new ones
class Employee1 extends User1 {
    constructor(public jobTitle: string)
    {
        //super() method is used to call the constructor of the base class
        super()
    }
}
//when a property is set as protected this means that it can't be used outside of the class but
//can be used in the inherited classes

//Abstract classes are base classes that cannot be instantiated on their own and must be inherited by other classes

//INTERFACES
//are Typescript only features, they are object type definitions and contracts that can implemented by classes
//interface  just defines the shape/structure of an object, it doesn't contain any implementation details

//interfaces can be extended