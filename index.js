function combiningArrays(fruits, vegetables) {
    return [...fruits, ...vegetables];
}

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables)); 

function cloningObjects(person) {
    return { ...person };
}

const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person)); 

function mergingObjects(student, course) {
    return { ...student, ...course };
}

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course)); 

function combiningNestedArrays(array1, array2) {
    return [...array1, ...array2];
}

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
];
console.log(combiningNestedArrays(array1, array2)); 
