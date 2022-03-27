// Basic Type
let id: number = 5;
let from: string = 'korea';
let isPublishing: boolean = false;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Heelo'];

//Tuple
let person: [number, string, boolean] = [2, 'HwanMin', true];

//Tuple Array
let employee: [number, string][] = [
  [2, 'HwanMin'],
  [2, 'HwanMin2'],
  [2, 'HwanMin23'],
];

//Union
let pid: string | number = 22;

//Enum
enum Director1 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Rigth',
}

//Object
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'HwanMin',
};

//Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

//Fuctions
function addNum(num1: number, num2: number): number {
  return num1 + num2;
}
// addNum(2, 3);

//Void
function log(message: string | number): void {
  console.log(message);
}

//interfaces
//Object
interface User2 {
  readonly id: number;
  name: string;
  age?: number;
}

const user2: User2 = {
  id: 1,
  name: 'HwanMin',
};

interface MatchNumber {
  (x: number, y: number): number;
}

const add: MatchNumber = (x: number, y: number): number => {
  return x + y;
};

//Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id;
  name;
  constructor(id: number, name: string) {
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
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const Hww = new Employee(5, 'KIM', 'Employee');
console.log(Hww.register());

//Generics
function getArray<T>(item: T[]): T[] {
  return new Array().concat(item);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['1', '2', '2424', '2424']);
