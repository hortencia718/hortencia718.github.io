

// Assignment A 
// The Temperature Converter - Let's make a converter based on the steps here and display the coverted
// result. -Use template literals Only to display the result
// • Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
// • Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is
// NN°C."

const NCelsius = 26
const NFahrenheit = 78.8

console.log(`This is ${NCelsius} `) 
console.log(`This is ${NFahrenheit}`)








    //    <!-- Assignment B
    //    Use the BMI example from Activity #1, and the code you already wrote, and improve it:
    //    1. Print a nice output to the console, saying who has the higher BMI.The message can be 
    //    either "Lucas' BMI is higher than John's!" or "John's BMI is higher than Lucas'!"
    //    2. Use a template literal to include the BMI values in the outputs.Example: 
    //    "Lucas' BMI (28.3) is higher than John's (23.9)!"
    //    HINT: Use an if/else statement -->


 let lucasHeight= 1.95;
 let lucasWeight= 1.09;


 let johnHeight = 1.95
 let johnWeight = 92

 lucasBMI=lucasWeight/(lucasHeight**2);
 johnBMI= johnWeight/(johnHeight**2);

 let lucasHigherBMI=lucasBMI > johnBMI;
 console.log(lucasHigherBMI);

 if(lucasHigherBMI === true){
     console.log(` ${LucasBMI} is higher than john`)
 }
 else{
     console.log(`${johnBMI} is higher than Lucas`)
 }

//  console.log()



// assignment 7 C

// There are two teams, Nets and Knicks. They compete against each other 3 times. The team with the
// highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well(draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a
// higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical
// operator to test for minimum score, as well as multiple else -if blocks.
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the
// same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:


//  Data 1: Nets score 96, 108 and 89. Knicks score 88, 91 and 110
//  Data Bonus 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
//  Data Bonus 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106


const netsScore1 = 1;
const netsScore2 = 2;

const knicksScore1 = 1;
const knicksScore2 = 2;

let netsAverage =(netsScore1 + netsScore2) / 2;
// divide by two to compare the average score 
console.log(netsAverage);

let knicksAverage =(knicksScore1 + knicksScore2) /2;
console.log(knicksAverage);

if(netsAverage >100){
     console.log('true')
}else{
console.log('false')
}
if(knicksAverage > 100){
    console.log('true')
}else{
    console.log('false')
}

// compare all 
