function makeCounter(){
    let currentCount = 1;
    return function(){
        return currentCount++;
    };
}

let counter = makeCounter();
alert(counter());
alert(counter());
alert(counter());

let counter2 = makeCounter()
alert(counter2());

let currentCount2 = 1;

function makeCounter2(){
    return function(){
        return currentCount2++;
    };
}

var counter3 = makeCounter2();
let counter4 = makeCounter2();

alert(counter3());
alert(counter3());

alert(counter4());
alert(counter4());


function Rectangle(f){
    return function(a){
        return function(b){
            return f*a*b;
        }
    }
}

console.log(Rectangle(1)(5)(3))

function* movementGenerator(startX = 0, startY = 0) {
    let x = startX;
    let y = startY;

    while (true) {
        let direction = yield { x, y };

        switch (direction) {
            case 'left':
                x -= 10;
                break;
            case 'right':
                x += 10;
                break;
            case 'up':
                y += 10;
                break;
            case 'down':
                y -= 10;
                break;
        }
    }
}

let move = movementGenerator();

console.log(move.next().value); // { x: 0, y: 0 }
console.log(move.next('right').value); // { x: 10, y: 0 }
console.log(move.next('up').value); // { x: 10, y: 10 }
console.log(move.next('left').value); // { x: 0, y: 10 }
console.log(move.next('down').value); // { x: 0, y: 0 }

console.log(window.counter)
console.log(window.counter2)
console.log(window.counter3())
console.log(window.counter4)
  