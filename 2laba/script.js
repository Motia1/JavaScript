let oper = prompt("Введите операцию")

function basicOperation(oper, value1, value2) {
    
    if(oper == "+"){
        return  value1 + value2;
    }
    else if(oper == "*"){
        return value1 * value2;
    }
    else if(oper == "-"){
        return value1 - value2;
    }
    else if(oper == "/"){
        return value1 / value2;
    }
    else{
        alert("Что-то не то")
    }

    return result;
}

let result = basicOperation(oper, 5, 10); // result = 15

alert(result);

let n = prompt();

function pow(n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){

        sum += Math.pow(i, 3);
 
    }
    return sum;
}

alert(pow(n));

let array = [1,2,3,4,5];

function Average(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    return sum/array.length;;
}

console.log(Average(array));

let str = "JavaScript";
let str2 = "JavaScr53? ipt";

function Reversed(param){

    let NewReversed = param.replace(/[^a-zA-Zа-яА-Я]/g, '');

    let reversed = NewReversed.split('').reverse().join('');

    return reversed;
}

console.log(Reversed(str));
console.log(Reversed(str2));

let s = "Привет";

let n2 = 3;

function Repeat(n2,s){

    return s.repeat(n2);

}

console.log(Repeat(n2,s))

let arr1 = ["ПРИВЕТ ДРУГ123" , "orange","apple"]
let arr2 = ["ПРИВЕТ ДРУГ123", "apple"]

function StrMinus(arr1,arr2){
    let arr3 = [];
    for(let i = 0; i <=arr1.length; i++){
        let CurrentStr = arr1[i];
        if (!arr2.includes(CurrentStr)) {
            // Если строка не найдена во втором массиве, добавляем ее в результат
            arr3.push(CurrentStr);
        }
    }
    return arr3
}

console.log(StrMinus(arr1,arr2))