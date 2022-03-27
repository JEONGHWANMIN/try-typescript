# Try-TypeScript

<hr/>

## install

```
npm i -g typescript
```

TypeScript 생성 시 **".ts"** 사용

#### TypeScript 기본 설정은 es5

es6로 바꾸려면 tsc --init 명령어를 사용해서 **> tsconfig.json <** 파일을 생성해 준다.
"target": "es6" 변경

tsc : (TypeScriptComplier) 를 사용해서 TypeScript를 JavaScript로 바꿔야 브라우저가 이해할 수 있다.

### Basic Type

```typescript
let id: number = 5;
let from: string = 'korea';
let isPublishing: boolean = false;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Heelo'];
```

**Type** : number , string , boolean , any
변수선언 후 **:** 사용해서 어떤값인지 정의한다.
배열안에 어떤 값이 들어갈지도 설정할 수 있다.

### Tuple

```typescript
let person: [number, string, boolean] = [2, 'HwanMin', true];

//Tuple Array
let employee: [number, string][] = [
  [2, 'HwanMin'],
  [2, 'HwanMin2'],
  [2, 'HwanMin23'],
];
```

**Tuple 사용시 배열안에 어떤 값이 순서대로 들어가야하는지도 지정가능하다.**

##### Tuple Array

number[] 이란 뜻은 숫자형 배열이란 뜻인데
[number,string][]은 숫자,문자열 배열로 이루어진 배열이란 뜻이다.

### Union

```typescript
let pid: string | number = 22;
```

Type을 하나로 지정하는게 아니라 pid값은 string , number 형식이 올 수 있다는 뜻이다.

### Enum

```typescript
enum Director1 {
  Up,
  Down,
  Left,
  Right,
}
```

Enum은 관련있는 것들 끼리 모아놓은 것이다.
자동적으로 Up 부터 (0 , 1 , 2 , 3)으로 값이 들어간다.
중간에 Left를 10으로 바꾸면 Rgiht 값은 11이 된다.

### Object

```typescript
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'HwanMin',
};
```

미리 객체형식으로 type을 지정해 놓을 수 있다.

### Type Assertion

```typescript
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
```

customerId는 넘버형식의 cid값만 받을 수 있다.

### Fuctions

```typescript
function addNum(num1: number, num2: number): number {
  return num1 + num2;
}
```

함수에 들어갈 인수에 타입을 지정할 수 있고 , 함수 반환 타입을 지정해 줄 수 있다.
아무것도 반환하지 않을 때는 void 타입이다.

```typescript
function log(message: string | number): void {
  console.log(message);
}
```

### interface

```typescript
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
```

type으로 선언하는 것이랑 비슷하지만 차이점은 확장성의 차이가 있다.

```typescript
// interface
interface User3 extends User2 {
  gender: string;
}

// type
type User3 = User2 & {
  gender: string;
};
```

### Class

```typescript
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
```

Class는 implements라는 키워드를 통해서 사용한다.

- public : 기본 값으로 public 형식으로 자유롭게 접근 가능 하다.
- private : private으로 선언되어 클래스 내부에서만 사용 가능하다.
- protected : protected로 선언되면 private랑 비슷하지만 인스턴스 에서만 사용 가능.
- readonly : 오직 읽기 전용 속성.

### Generic

```typescript
//Generics
function getArray<T>(item: T[]): T[] {
  return new Array().concat(item);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['1', '2', '2424', '2424']);
```

어떤 타입이 올지 미리 지정해 놓는 것이 아니라 그때그떄 타입을 지정해서 사용 가능하게 해준다.
<T> 는 타입을 의미하고 그 T에 맞게 item: number[] : 리턴값은 number[] 이런식으로 되는 거다.
reference : https://www.youtube.com/watch?v=BCg4U1FzODs
