//This program calculates the net salary after incorporating all the deductibles

//Gross income = Taxable income = Basic salary + included benefits/allowances
//Deductibles = (Paye + NHIF + NSSF
//Net income = (Gross income - Deductibles)

const readline = require('readline');
const input = readline.createInterface(
    {
         input: process.stdin,
         output: process.stdout
    }
);

input.question("Kindly enter your Gross income\n")
let paye;
    let taxable_income;
    let nhif;
    let nssf= 200;
    let deductibles;
    let net_salary;
    let gross_pay;
    if (gross_income < 24001){
        paye = gross_income * 0.1;
    }else if (gross_income < 32334){
        paye = 2400;
        taxable_income = gross_income - 24000
        paye = (taxable_income * 0.25) + paye;
    }else {
        paye = 4483;
        taxable_income = gross_income - 32333;
        paye = (taxable_income * 0.30) + paye;       
    }
    //Determining the NHIF deduction
    //if gross income(); give nhif deduction amount
    if (gross_income < 6000){
        nhif = 150;
    }else if(gross_income < 8000){
        nhif = 300;
    }else if(gross_income < 12000){
        nhif = 400;
    }else if(gross_income < 15000){
        nhif = 500;
    }else if(gross_income< 20000){
        nhif = 600;
    }else if(gross_income < 2500){
        nhif = 700;
    }else if(gross_income < 30000){
        nhif = 850;
    }
    else if(gross_income > 35000){
        nhif = 900;
    } else {
        nhif = 950
    }

    deductibles = nhif + paye + nssf;
    net_income = gross_income - deductibles;
    process.stdout.write(`Gross income is Ksh: ${gross_pay}\n`);
    process.stdout.write(`P.A.Y.E is Ksh: ${paye}\n`);
    process.stdout.write(`NHIF deductible  is Ksh: ${nhif}\n`);
    process.stdout.write(`NSSF deduction is Ksh: ${nssf}\n`);    
    process.stdout.write(`Total deductable amount to Ksh: ${deductibles}\n`);
    process.stdout.write(`Net Income is Ksh: ${net_salary}\n`);    
    //closing the entire process

    input.close();
