
//let and const 
//const is the variable that cannot be  changed
//let can be changed, 

//Another way to writing a function is using ARROW FUNCTION syntax if you only have one expression in the function body
const sum = (a: number, b: number): number => a + b;
//instead of 
function add(c: number, d:number) : number{
    let result: number;
    result = c + d;
    return result;
};


//Another option is when you have more than one expression
const gumar = (a: number, b: number) => {
    return a + b;
}

//you can setup Default function parameters, that is set paramertter in the function definittion for example
const sumUp = (a: number, b: number = 5) => a + b;
//It is important that defined parameter is the LAST one. if you call the function without second parameter it will take the default value of 5
sumUp(3); // it will return 8

//Arreys and Objects are Referenced types values this means that you can add values to it even if it's defined as const
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4] 
//the spread operator allows add arrey or object values to another arrey or object as an indidvidual values
const hobbiesCurrent = ['Dancing', 'TRX']
const activeHobbies = ['stressing']

activeHobbies.push(...hobbiesCurrent);
console.log(activeHobbies); // ['stressing', 'Dancing', 'TRX']

//Rest parameters allow you to pass an indefinite number of arguments as an array
const sumAll = (...numbers: number[]) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   

//Object and Arrrey Destructuring
const languages = ['Armenian', 'English', 'Russian'];
const [language1, language2, language3] = languages;
console.log(language1); // Armenian
//if you want to skip some values you can use commas
const [lang1, , lang3] = languages;
console.log(lang3); // Russian      
//for object destructuring you need to use the same key names as in the object, this is a must

