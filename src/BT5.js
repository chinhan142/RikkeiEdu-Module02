class Employee {
    name;
    salary;
    getSalary() {
        return this.salary;
    }
}
console.log(this.salary);
// result: undefined
