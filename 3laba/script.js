
function Association(array){
    return array.reduce((prom,current) => {

    if  (Array.isArray(current)){
        return prom.concat(Association(current))
    }
    else{
        return prom.concat(current)
    }

    }, [])
}

let array = [1, [1, 2, [3, 4]], [2, 4]]
let arra = [2, 3, [4, 5]]

let newArray = Association([array, arra]);

console.log(Association(array));
console.log(Association(newArray)) // Выведет [1, 1, 2, 3, 4, 2, 4]

function SumElem(array2){
    let sum = 0;
    for(let current of array2){
        if(Array.isArray(current)){
            sum += SumElem(current);
        }
        else{
            sum += current;
        }
    }

    return sum;
}

let array2 = [1, [2, 3, [1, 2, 3]], [4, 5, 6, [1, 2, 3]]]

console.log( SumElem(array2));

let students = [
    { name: "Иван", age: 18 , groupId: 1},
    { name: "Дима", age: 19 , groupId: 2},
    { name: "Виктория", age: 16 , groupId: 3},
    { name: "Даниил", age: 17 , groupId: 4},
    { name: "Иван", age: 18 , groupId: 1}
]

function Student(students){
    let filteredStudents = {};

    students.forEach(student => {
        if(student.age > 17){
            if (!filteredStudents[student.groupId]) {
                filteredStudents[student.groupId] = [];
            }
            filteredStudents[student.groupId].push(student);
        }
    });
    return filteredStudents;
}

console.log(Student(students));

let string = "Hello";

function ASCII(string){
    let total1 = string;

    for(let i = 0; i < string.length; i++){
        let char = string.charCodeAt(i)
        total1 += char;
    }

    total1 = total1.replace(string,"")

    let total2 = total1;

    total1 = total1.replace(/7/, "1");

    return total2 - total1;
}

console.log(ASCII(string))

function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log(mergeObjects(obj1, obj2)); // Вывод: { a: 1, b: 3, c: 4 }

function Tower(n){
    for(let i = 1; i <= n; i++){
        let space = ' '.repeat(n - i);
        let star = '*'.repeat(2 * i - 1);

        console.log(space + star + space);
    }
}

let n = 4;

Tower(n);