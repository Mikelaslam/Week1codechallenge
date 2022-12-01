//User inputing student marks to generate Grade

//Inputs marks as integers between zer0(0) and one hundred(100)
//input graded as;
//A=>79 B=>60 C=>49 D=>40 E=>39

const readline = require('readline');
const input = readline.createInterface(
{
     input: process.stdin,
     output: process.stdout
}
//Assigning the questions and giving conditions
//The grades are determined as per the conditions set
);
input.question("Input the student marks:", function(mark){
    let marks= parseInt(mark, 10)
    {
     if (marks<39) {
        process.stdout.write("Grade E\n");
    }
    else if(marks>=40 && marks<=49) {
        process.stdout.write("Grade D\n");
    }
    else if(marks>=50 && marks<=59) {
        process.stdout.write("Grade C\n");
    }
    else if(marks>=60 && marks <=79) {
        process.stdout.write("Grade B\n");
    }

     else if(marks>79){
        process.stdout.write("Grade A\n");
    }
    }
    if(isNaN(marks)){
        process.stdout.write("Kindly enter a recognized character\n");
    }
     input.close();
})
