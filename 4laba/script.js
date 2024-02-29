
let number = new Set();

let n = prompt("Сколько вы хотите внести товаров")

function AddNumber(n){
    for(let i = 0; i < n; i++){
        let newNumber =  prompt("Внесите товар")
        number.add(newNumber)
    }
}

AddNumber(n)

let n2 = prompt("Сколько вы хотите удалить товаров")

function DeleteNumber(n){
    for(let i = 0; i < n; i++){
        let newNumber =  prompt("Удалите товар")
        number.delete(newNumber)
    }
}

DeleteNumber(n2)

function FindNumber(n,n2){
    let numberSearch = prompt("Какой номер вы хотите найти")

    for(let i = 0; i < (n-n2); i++){
        if(number.has(numberSearch)){
            console.log("Число найдено") //console.log(number.has(numberSearch));
        }
        else{
            console.log("Такого числа нету")
        }
    }
}

FindNumber(n,n2)

function ViewNumber(n,n2){
    console.log("Всего товаров "+ (n-n2))
}

ViewNumber(n,n2)

for(n of number){
    console.log(n);
}

let isOpen = true;

let students = new Set();

while(isOpen){
    let choose = parseInt(prompt("Выберите операцию: 1-Добавить студента, 2-Удалить студента, 3-Список студентов, 4-Фильтр по группе, 5-Сортировка по зачетке, 6-Выход"))

    switch (choose){
        case 1 :
            addStudent();
            break; 
        case 2:
            deleteStudent()
            break;
        case 3:
            viewStudents()
            break;
        case 4:
            filterStudents()
            break;
        case 5:
            sortStudents()
            break;    
        case 6:
            isOpen = false;
            break;
        default:
            alert("Такой операции нет")
    }
}

function addStudent(){

    let nameStudent =  prompt("Введите ФИО студента");

    let groupId = parseInt(prompt("Введите номер группы"));

    let recordBookStudent= parseInt(prompt("Введите номер зачётки"));

    students.add(
        {
            name : nameStudent,
            group : groupId,
            recordBook : recordBookStudent
        }
    );
}

function deleteStudent(){
    let deleteStudent = prompt("Введите номер студента которого хотите удалить");

    try{
        students.delete(Array.from(students)[deleteStudent-1]);
    }catch{
        console.log("Неверный номер студента!");
    }
}

function viewStudents(){
    for(elem of students){
        console.log("ФИО: " + elem.name + ", группа: " + elem.group + ", номер зачетки: " + elem.recordBook);
    }
}

function filterStudents(){
    let group = parseInt(prompt("Введите номер группы")); 

    students.forEach(elem => {
        if(elem.group == group){
            console.log("ФИО: " + elem.name + ", группа: " + elem.group + ", номер зачетки: " + elem.recordBook);
        }
    })
}

function sortStudents(){
    let arrayStudent = Array.from(students).sort(function(elem1, elem2) {
        if (elem1.group < elem2.group) {
            return -1;
        }
        if (elem1.group > elem2.group) {
            return 1;
        }
        return 0;
    })

    students = new Set(arrayStudent)
}

isOpen = true

let products = new Map();

while(isOpen){
    let choose = parseInt(prompt("Выберите операцию: 1-Добавить товар, 2-Удалить товар, 3-Удалить товар по имени, 4-Изменить количество товара , 5-Изменить стоимость товара, 6-Просмотр всех товаров, 7-Сумма товаров и их стоимость, 8-Выход"));

    switch (choose){
        case 1 :
            addProduct();
            break; 
        case 2:
            deleteProductId();
            break;
        case 3:
            deleteProductByName();
            break;
        case 4:
            changeProductCount();
            break;
        case 5:
            changeProductPrice();
            break;    
        case 6:
            ViewProducts();
            break;
        case 7:
            sumCount();
            break;
        case 8:
            isOpen = false;
            break;
        default:
            alert("Такой операции нет")
    }
}

function addProduct(){

let  productName = prompt("Введите название товара");

let  productPrice = prompt("Введите цену товара");

let  productId = prompt("Введите айди товара");

let  productCount = prompt("Введите количество товара");

    products.set(productId,{
        name : productName,
        price : productPrice,
        id : productId,
        count : productCount
    });
}

function deleteProductId(){
    let deleteProductId = prompt("Введите айди товара которого хотите удалить");
    products.delete(deleteProductId);
}

function deleteProductByName(){
    let deleteProductName = prompt("Введите название товара которого хотите удалить");
    products.forEach((value,key) =>{
        if(deleteProductName == value.name){
            products.delete(key);
        }
    }
)}

function ViewProducts(){
    for(let elem of products.values()){
        console.log("Название: " + elem.name + ", Цена: " + elem.price + ", ID: " + elem.id + ", Количество: " + elem.count);
    }
}

function changeProductCount(){
    let newCount = prompt("Введите количество товара для всех");
    for(elem of products.values()){
        elem.count = newCount
    }
}

function changeProductPrice(){
    let ProductName = prompt("Введите название товара у которого хотите изменить стоимость товара");
    let newProductPrice = prompt("Введите новую цену");

    products.forEach(product =>{
        if(ProductName == product.name){
            product.price = newProductPrice;
        }
    })
}

function sumCount(){
    let sum = 0;
    products.forEach(product =>{
        sum += product.count * product.price;
        })
    console.log(+sum);
}

let cache = new WeakMap();

function cacheFunction(key, a, b) {
    if (cache.has(key)) {
        console.log("Использование кэша");
        return cache.get(key);
    }

    let result = sum(a, b);
    cache.set(key, result);
    
    console.log("Вычисление и сохранение в кэше");
    return result;        
}

let sum = (a, b) => a + b;

let key1 = {};
let key2 = {};

console.log(cacheFunction(key1, 1, 2));
console.log(cacheFunction(key2, 1, 3));
console.log(cacheFunction(key1, 1, 4));