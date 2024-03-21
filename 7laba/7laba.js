let products = {
    shoes: {
        boots :{
            id : 1, 
            size : 40,
            color : 'Black',
            price : 100
        },
        sneakers :{
            id: 2,
            size: 42,
            color: 'Red',
            price: 150
        },
        sandals :{
            id: 3,
            size: 38,
            color: 'White',
            price: 30
        }
    }
}

function FilterShoesPrice(MinPrice, MaxPrice, Size, Color){
    let arr = [];
    for(let category in products){
        for(let product in products[category]){
            arr.push(products[category][product]);
        }
    }
    
    return arr.filter(item => 
        item.price > MinPrice && 
        item.price < MaxPrice && 
        item.size == Size && 
        item.color == Color
    ).map(item => item.id);
}

console.log(FilterShoesPrice(25, 160, 40, "Black"));

let newProducts = {
    shoes: {
        boots :{
            id : 1, 
            size : 40,
            color : 'Black',
            cost : 100,
            discount: 0.1
        },
        sneakers :{
            id: 2,
            size: 42,
            color: 'Red',
            cost: 150,
            discount: 0.2
        },
        sandals :{
            id: 3,
            size: 38,
            color: 'White',
            cost: 30,
            discount: 0.4
        }
    }
}

for(let category in newProducts.shoes){
    Object.defineProperties(newProducts.shoes[category], {
        price: {
            get(){
                return this.cost * (1 - this.discount);
            },
            configurable: false
        },
        id: {
            writable: false,
            enumerable: true,
            configurable: false,
        }
    });
}

console.log(newProducts)
console.log(newProducts.shoes.boots.price)

function Shoe(id, size, color, cost, discount) {
    this.id = id;
    this.size = size;
    this.color = color;
    this.cost = cost;
    this.discount = discount;
}

let boots = new Shoe(1, 40, 'Black', 100, 0.1);
let sneakers = new Shoe(2, 42, 'Red', 150, 0.2);
let sandals = new Shoe(3, 38, 'White', 30, 0.4);

let allProducts = {
    shoes: {
        boots: boots,
        sneakers: sneakers,
        sandals: sandals
    }
};

console.log(allProducts);

function ipsBetween(start, end){
    start = start.split('.');
    end = end.split('.');
    
    let startSum = start[0] * 256**3 + start[1] * 256**2 + start[2] * 256 + +start[3];
    let endSum = end[0] * 256**3 + end[1] * 256**2 + end[2] * 256 + +end[3];

    console.log(startSum);
    console.log(endSum);
    
    return endSum - startSum;
  }

console.log(ipsBetween('10.0.0.0', '10.0.0.50'))

