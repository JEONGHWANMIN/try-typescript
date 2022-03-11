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
    Director1[Director1["Up"] = 0] = "Up";
    Director1[Director1["Down"] = 1] = "Down";
    Director1[Director1["Left"] = 2] = "Left";
    Director1[Director1["Right"] = 3] = "Right";
})(Director1 || (Director1 = {}));
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
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const Hww = new Employee(5, 'KIM', 'Employee');
console.log(Hww.register());
