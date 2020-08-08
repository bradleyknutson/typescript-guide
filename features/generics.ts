class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) { }

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions

function printStrings(arr: string[]): void {
  arr.forEach(i => {
    console.log(i);
  });
}

function printNumbers(arr: number[]): void {
  arr.forEach(i => {
    console.log(i);
  });
}

function printArray<T>(arr: T[]): void {
  arr.forEach(index => {
    console.log(index);
  });
}

printArray<string>(['a', 'b', 'c']);
printArray([1, 2, 3]);

// Generic Constraints

class GenericCar {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.forEach(type => {
    type.print();
  })
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<GenericCar>([new GenericCar(), new GenericCar(), new GenericCar()]);