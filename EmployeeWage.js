const Num_OF_WORKING_DAYS = 2;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4;
const FUL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;

function getWorkingHours(empCheck) {
    switch (empCheck) {

        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FUL_TIME_HOURS;
        default:
            return 0;
    }
}
for (let day=0; day < Num_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = empHrs + getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs " + empHrs + " Emp Wage " + empWage)