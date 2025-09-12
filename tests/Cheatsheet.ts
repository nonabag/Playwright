//This is my Typescript Cheatsheet for Types
// You may assign type to variables

let userName: string;
userName = "Nona";

//or if you have initial value there's no need to assign type for example

let userAge = 30;

//you can assign types in functions as well
function getUserInfo(name: string, age = 37): string {
  return `User ${name} is ${age} years old`;
}

function add(a:number, b = 3)
{
    return a + b;
}

add(5);
add(1,2);

//if you're not sure about the type you can use "any" type
let userData: any;
userData = 5;
userData = "Nona";
userData = true;

//You can also use union types
let userId: string | number;
userId = "123";
userId = 123;

//arrays
let hobbies = ['Dancing', 'TRX'];
//if you want an arrray to hlod different types of values you can use union types
let mixedArray: (string | number)[] = [];

//Tuples are arrays with fixed number of elements
let address: [string, number] = ['Main street', 99];

//Objects are key value pairs, nested objects are also possible
let user:{
    name: string,
    age: number,
    hobbies: string[], 
    address:{
        street: string, 
        apt: number
    }
} = {
    name:'Nona', 
    age: 38, 
    hobbies: ['Dancing', 'TRX'], 
    address: {
        street: 'Main street', 
        apt: 99
    }
};

//Even though  this seems to be an empty object, it's not
let val :{} = 'some text' //this means that val can be any value that's not undefined or null
const someObj = {}; //this is an empty object in JS and TS

//You can define flexible object type when you don't know your key value pairs in advance using Record type
let flexibleObj: Record<string, string | number> = {};

//enums are used to define a set of named constants type, this is TS only feature
enum Size {
    Small = 'S',
    Medium = 'M',
    Large = 'L'
}   
let shirtSize: Size = Size.Medium;

//This can  also be written using literal types

let userRole: 'admin' | 'user' | 'guest';

//Another option to define new type is by using type keyword, TS only, This is called Type Aliases or Custom Types

type Role = 'admin' | 'user' | 'guest';
let newUserRole: Role = 'admin';


//we can also define type that functions return
function multiply(a: number, b: number): number {
    return a * b;
}   

//if a function doesn't return anything we can use void type
function logMessage(message: string): void {
    console.log(message);
}
//if a function never returns (for example it always throws an error) we can use never type
function throwError(message: string): never {
    throw new Error(message);
}

//Functions as types, like this you can tell function which kind on function you expect here
function PerformJob(cb: () => void) {
  cb ();
};

//when defining user type that is object type we can include a property that is a function
type User = {
    name: string;
    age: number;
    greet: () => string;
}
let user1: User ={
    name: 'A',
    age: 30,
    greet() {
        return 'hello';
    },
};

//Adding exclamation mark in the end of an means that you're sure this element won't be null 
//if you're wrong you'll get a runtime error

const inputEl = document.getElementById('user-name')! as HTMLInputElement | null;
//Adding question mark checks if the element is null or not, if it's null it won't try to access value property
//to avoid this you can mention the type of element 
console.log(inputEl?.value);


//when you want to setup and optional parameter you can  do that by adding question mark after the parameter name
function errorMessage(msg?: string)
{
console
};



//when defining an object one or more of the properties can be optional too, just add ? next to the property name
type Employee = {
    id: number;
    name?: string;
}


//Last but not least nullish coalescing operator
//This operator returns the right-hand side operand when the left-hand side operand is null or undefined
let input = '';
const didProvideInput = input ?? false;
//if input is empty string and we have || operator it'll return false, with  ?? it will return empty string 



