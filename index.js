"use strict";
// Basic Type
let id = 5;
let from = 'korea';
let isPublishing = false;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Heelo'];
//Tuple
let person = [2, 'HwanMin', true];
//Tuple Array
let employee = [
    [2, 'HwanMin'],
    [2, 'HwanMin2'],
    [2, 'HwanMin23'],
];
//Union
let pid = 22;
//Enum
var Director1;
(function (Director1) {
    Director1["Up"] = "Up";
    Director1["Down"] = "Down";
    Director1["Left"] = "Left";
    Director1["Right"] = "Rigth";
})(Director1 || (Director1 = {}));
console.log(Director1['Up']);
const user = {
    id: 1,
    name: 'HwanMin',
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
//Fuctions
function addNum(num1, num2) {
    return num1 + num2;
}
// addNum(2, 3);
//Void
function log(message) {
    console.log(message);
}
const user2 = {
    id: 1,
    name: 'HwanMin',
};
const add = (x, y) => {
    return x + y;
};
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} ID is ${this.id}`;
    }
}
const HwanMin = new Person(1, 'HwanMin');
// console.log(HwanMin.id);
//SubClasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const Hww = new Employee(5, 'KIM', 'Employee');
console.log(Hww.register());
//Generics
function getArray(item) {
    return new Array().concat(item);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['1', '2', '2424', '2424']);
