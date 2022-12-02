//The user inputs the speed of the car as an integer
//If the speed is less than 50 the output should be "Ok"
//If speed is more than 50, for every 4kms above 50 the 
//driver gets one penalty
//The total number of dpenalty points is printed out

const readline = require('readline');
const input = readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
//If the user enters any character other than a number; print("Enter a recognized character!")
//For penalties over 10; "License suspended"

input.question("Carspeed:", function(speed){

    //Declaring that the entry expected should be an integer
    let Carspeed = parseInt(speed, 10);

    //first condition: If speed<50; Ok!

    if (Carspeed < 50){
        process.stdout.write("Ok!\n");
    }

     // Expression of how penalty points are generated
     //We use Math.ceil() to come up with this

    const penalty_points = ((Carspeed-50)/4);
    Math.ceil(penalty_points); 

   console.log( penalty_points);
        
          if (penalty_points>=12){
            process.stdout.write("License suspended");
    
          }
    //For the case where a user inputs a foreigh character
    //If(isNaN(); Print out "Enter a recognized character")
          else{
            if (isNaN(speed)){
                process.stdout.write("Enter a recognized character!");
            }
        //Exiting the entire process    
            process.exit(0);
          }

})