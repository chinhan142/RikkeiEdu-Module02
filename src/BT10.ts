function identity<T>(arg: T): T {
  return arg;
}

interface Box<T> {
  content: T;
}

const str = identity<string>("Hello TypeScript");
console.log(str);

const num = identity<number>(100);
console.log(num);

const stringBox: Box<string> = {
  content: "FPT University",
};

console.log(stringBox.content);

const numberBox: Box<number> = {
  content: 2026,
};

console.log(numberBox.content);
