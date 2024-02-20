let a = 5;
let name = "Name";
let i = 0;
let double = 0.23;
let result = 1/0;
let answer = true;
let no = null;

console.log((21/5) * (45/5));

let i2 = 2;
let a2 = ++i2;
let b = i2++;

console.log(a2)
console.log(b)

if(a2 > b){
    console.log("a > b");
}
else if (b > a2) {
    console.log("b > a");
} 
else {
    console.log("Они равны");
}

console.log(a > b);

console.log("Котики");

let Cat = "Котик";
let LittleCat = "котик";

console.log(Cat == LittleCat)
console.log("Котик" == "китик" ? true : false);
console.log("Кот" == "Котик" ? true : false);
console.log("Привет" == "Пока" ? true : false);
console.log(73 == "53");
console.log(false == 0 ? true : false);
console.log(54 == true ? true : false);
console.log(123 == false ? true : false);
console.log(true == "3" ? true : false);
console.log(true == 3 ? true : false);
console.log(3 == "5мм" ? true : false);
console.log(8 == "-2" ? true : false);
console.log(34 == "34" ? true : false);
console.log(null == undefined ? true : false);

let name2 = prompt().toLowerCase();

if(name2.split(' ').includes("марина")){
    alert("Вы правы");
}
else{
    alert("Вы ошиблись");
}

let ExamPass = prompt()

if( ExamPass == 3){
    alert("Удачи в будующем");
}
else if ( ExamPass > 0 && ExamPass < 3){
    alert("Поздравляю вы сдали " + ExamPass  + " экзамена но надо ещё");
}
else{
    alert("Всё плохо");
}

console.log( true + true);
console.log( "5" + 0);
console.log( 5 + "мм");
console.log( 5 + "мм");
console.log( 8/Infinity);
console.log( 9 * "\n9");
console.log( null - 1);
console.log( "5" - 2);
console.log( "5px" - 3);
console.log( true - 3);
console.log( 7 || 0);

let arr = new Array(10);
let arra = new Array(0);

let arrr = [1,2,3]
for( let i = 1; i <= arr.length ; i++ ){
    arr[i-1] = i ;
}

for( let i = 1; i <= arr.length ; i++ ){
    if(arr[i-1] % 2 == 0){
        console.log(arr[i-1] + 2);
    }
    else{
        console.log(arr[i-1]+ "мм");
    }
}

let array = ["пн", "вт", "ср", "чт", "пн", "сб", "вс"]

let day = (prompt() - 1);

alert(array[day]);

console.log(array[6])

let day_obj = {
    1 : 'пн',
    2 : 'вт',
    3 : 'ср',
    4 : 'чт',
    5 : 'пт',
    6 : 'сб',
    7 : 'вс',
}

alert(day_obj[prompt()])

    let opt2 = 3;
    let opt3 = prompt();
    
function Main( opt1 = 2 , opt2, opt3){
    return "" + opt1 + opt2 + opt3
}

console.log(Main(undefined,opt2,opt3))

function params(a, b) { //Functional Declaration
    if (a === b) {
        return 4 * a;
    }
    return a * b;
}
let params2 = function(a, b) { //Function Expression
    if (a === b) {
        return 4 * a;
    } 
     return a * b;
};
let params3 = (a, b) => { // =>
    if (a === b) {
        return 4 * a;
    }
    return a * b;
};