//Calculating individual's Net Salary
function calculateNetSalary(basicSalary, benefits) {

    //PAYE (Income Tax) rates
    let payeRate = 0;

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
    let nhifDeduction = 0;

    if (basicSalary <= 5999) {
        nhifDeduction = 150;
    } else if (basicSalary <= 7999) {
        nhifDeduction = 300;
    } else if (basicSalary <= 11999) {
        nhifDeduction = 400;
    } else if (basicSalary <= 14999) {
        nhifDeduction = 500;
    } else if (basicSalary <= 19999) {
        nhifDeduction = 600;
    } else if (basicSalary <= 24999) {
        nhifDeduction = 750;
    } else if (basicSalary <= 29999) {
        nhifDeduction = 850;
    } else if (basicSalary <= 34999) {
        nhifDeduction = 900;
    } else if (basicSalary <= 39999) {
        nhifDeduction = 950;
    } else if (basicSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (basicSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (basicSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (basicSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (basicSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (basicSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (basicSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    // NSSF contributions
    const nssfRates = {
        tier1: { maxPensionablePay: 6000, employeeContribution: 0.06, employerContribution: 0.06 },
        tier2: { minPensionablePay: 6001, maxPensionablePay: 18000, employeeContribution: 0.06, employerContribution: 0.06 },
    };

    // Housing Levy rate for 2023
    const housingLevyRate = 0.015;

    // Calculating gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Income Tax)
    const paye = (grossSalary * payeRate);

    // Calculate NSSF deduction
    let nssfDeduction = 0;
    for (const tier of Object.values(nssfRates)) {
        if (grossSalary >= tier.minPensionablePay && grossSalary <= tier.maxPensionablePay) {
            nssfDeduction = grossSalary * tier.employeeContribution;
            break;
        }
    }

    // Calculate total deductions
    const totalDeductions = paye + nhifDeduction + nssfDeduction;

    // Calculate net salary
    const netSalary = grossSalary - totalDeductions;

    // Return the results
    return {
        grossSalary,
        paye,
        nhifDeduction,
        nssfDeduction,
        totalDeductions,
        netSalary,
    };
}

// Example usage:
const basicSalary = 150000; 
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Income Tax):", salaryDetails.paye);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
console.log("Total Deductions:", salaryDetails.totalDeductions);
console.log("Net Salary:", salaryDetails.netSalary);

