class Employee {
  public name: string;
  private salary: number;

  getSalary() {
    return this.salary;
  }
}

console.log(this.salary);
// result: undefined
