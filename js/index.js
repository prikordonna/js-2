/*let cars = [];
cars.push('Volkswagen Terramont');
cars.push('another type of car');
console.log(cars.length);
console.log(cars[0]);
cars[2] = 'Ferrari LaFerrari';
console.log(cars.length);
cars[10] = 'Agera R';
console.log(cars.length);
console.log(cars);

let counter = 0;
for (let i = 0; i < cars.length; i++) {
    if (cars[i] !== undefined) {
        counter++;
    }
}
*/

let favCars = {};
favCars['fastest'] = 'Agera R';
favCars['mastExpensive'] = 'Bugatti';
favCars['mostComfortable'] = 'Rolc-Royce';

console.log(favCars['mostComfortable']);

for (let key in favCars) {
    console.log(favCars[key]);
}

let bugattiVeyron = {};
bugattiVeyron.make = 'Bugatti';
bugattiVeyron.title = 'Veyron';
bugattiVeyron.speed = 408;
bugattiVeyron.drive = function() {
    console.log(this.title + ' is driving!');
}

bugattiVeyron.drive();

let zazLanos = {};
zazLanos.make = 'ZAZ';
zazLanos.title = 'Lanos';
zazLanos.speed = 175;
zazLanos.drive = function() {
    console.log(this.title + ' is driving!');
}

zazLanos.drive();

function Car(make, title, speed) {
    this.make = make;
    this.tittle = title;
    this.speed = speed;
    this.drive = drive = function () {
        console.log(this.title + 'is driving!');
    }
    return this;
}

let skodaKodiaq = new Car('Skoda', 'Kodiaq', 200);
skodaKodiaq.drive();


let skodaKaroq = new Car('Skoda', 'Karoq', 200);
skodaKaroq.drive();

let audiQ7 = {
    make: 'Audi',
    title: 'Q7',
    speed: 250,
    drive() {
        console.log(this.title + ' is driving!');
    }
}

audiQ7.drive();

class NewCar {
    constructor(make, title, speed) {
        this.make = make;
        this.title = title;
        this.speed = speed;
    }
    drive() {
        console.log(this.title + ' is driving!');
    }
}

let bmwX7 = new NewCar('BMW', 'X7', 250);

bmwX7.drive();


let bmwX4 = Object.create(bmwX7);
bmwX4.title = 'X4';
bmwX4.drive();
