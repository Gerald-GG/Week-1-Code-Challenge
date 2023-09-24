//Calculating individual's Net Salary
function calculateNetSalary(basicSalary, benefits) {

    //PAYE (Income Tax) rates
    const payeRate = 0;

    if (basicSalary<=24000) {
        payeRate=0.1;
    }else if (basicSalary <= 32333) {
        payeRate = 0.25;
    } else if (basicSalary <= 500000) {
        payeRate = 0.3;
    } else if (basicSalary <= 800000) {
        payeRate = 0.325;
    } else {
        payeRate = 0.35;
    }

    // NHIF deductions
    const nhifdeductions = 0;

    if (basicSalary <= 5999) {
        nhifdeductions = 150;
    } else if (basicSalary <= 7999) {
        nhifdeductions = 300;
    } else if (basicSalary <= 11999) {
        nhifdeductions = 400;
    } else if (basicSalary <= 14999) {
        nhifdeductions = 500;
    } else if (basicSalary <= 19999) {
        nhifdeductions = 600;
    } else if (basicSalary <= 24999) {
        nhifdeductions = 750;
    } else if (basicSalary <= 29999) {
        nhifdeductions = 850;
    } else if (basicSalary <= 34999) {
        nhifdeductions = 900;
    } else if (basicSalary <= 39999) {
        nhifdeductions = 950;
    } else if (basicSalary <= 44999) {
        nhifdeductions = 1000;
    } else if (basicSalary <= 49999) {
        nhifdeductions = 1100;
    } else if(basicSalary <= 59999) {
        nhifdeductions = 1200;
    } else if (basicSalary <= 69999) {
        nhifdeductions =  13000;
    } else if (basicSalary <= 79999) {
        nhifdeductions = 1400;
    } else if (basicSalary <= 89999) {
        nhifdeductions = 1500;
    } else if (basicSalary <= 99999) {
        nhifdeductions = 1600;
    } else {
        nhifdeductions = 1700;
    }
    }


