function identity(arg) {
    return arg;
}
const str = identity("Hello TypeScript");
console.log(str);
const num = identity(100);
console.log(num);
const stringBox = {
    content: "FPT University",
};
console.log(stringBox.content);
const numberBox = {
    content: 2026,
};
console.log(numberBox.content);
