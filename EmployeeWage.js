class EmployeePayroll {
    id;
    salary;
    gender;
    startdate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startdate = params[4];
    }

    get name() { return this._name; }
    set name(name) {
        let regexname = RegExp('[A-Z]{1}[a-z]{3,}');
        if (regexname.test(name)) {
            this._name = name;
        }
        else {
            throw "Name is Incorrect";
        }
    }

    toString() {
        return "id=" + this.id + ", name= " + this.name + ", salary= " + this.salary + " , gender= " + this.gender +
            " , startdate= " + this.startdate;
    }
}

let employeePayroll = new EmployeePayroll(1, "rajan", 20000);
console.log(employeePayroll.toString());
try {
    employeePayroll.name = "mahesh";
    console.log(employeePayroll.toString());
} catch (e) {
    console.error(e);
}

let newemployeePayroll = new EmployeePayroll(2, "nilam", 98000, "F", new Date("30-05-2020"));
console.log(newemployeePayroll.toString());