// Comments are text that will not be executed in your code. Rather comments are for other programmers to read. 
// Single line comments start with //
/* Multiple line comments start with*/ /* and end with */ 

/* All of the exercises below are commented out. Write your Javascript code after each exercise. */


/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);  // <= this should print out sebastian the pug

/*
* #1
* Variables with a "String" value

* Declare variables named firstName, lastName, birthPlace, favFood, favDrink, favSong, favAnimal, favColor, favSport, favDoughnut.

* Assign your own string values to each variable and console.log each variable.
*/
var me = {
    firstName: "George",
    lastName: "Kailiwai",
    birthPlace: "Tokyo, Japan",
    favFood: "veggies",
    favDrink: "water",
    favSong: "Cant Get No Satisfaction by the Rolling Stones",
    favAnimal: "dog",
    favColor: "black",
    favSport: "kettle bells",
    favDoughnut: "apple fritter"
};
console.log(me);

/*
* #2
* Variables with a Number value
*
* Declare variables named favNumber, yourShoeSize, thatOnePrinceSong, floorsAlaMoanaHotel, numOfJapanPrefectures, numOfABCstoresinHi, and cheesecakesFlavAtCheeseCakeFac
*
* Assign your own number values to each variable and console.log each variable.
*/
var meAgain = {
    favNumber: 3,
    yourShoeSize: 12,
    thatOnePrinceSong: "Purple Rain",
    floorsAlaMoanaHotel: 36,
    numOfJapanPrefectures: 12,
    numOfABCstoresinHi: 1000000,
    cheesecakesFlavAtCheeseCakeFac: 20
}
console.log(meAgain);

/*
* #3
* Variables with a Boolean value
*
* Declare variables named likesMcDonalds, eatsDoughnuts and ownsRedShoes.
*
* Assign your own boolean values to each variable and console.log each variable.
*
* 
* Now, use comparison and logic operators (>, <, >=, <=, ===, !==) to make the following variables True of False
*
* Console.log each variable.
*
*/
var likesMcDonalds = 3 > 2;
console.log(likesMcDonalds);

var likesWendys = 1 > 2;
console.log(likesWendys);

var eatsDoughnuts = true;
console.log(eatsDoughnuts);

var ownsRedShoes = false;
console.log(ownsRedShoes);

//For example:
//Make me True:
var booya1 = 3 > 2; 
console.log(booya1);

//Make me False:
var booya2 = 1 > 2;
console.log("booya2 is " + booya2);

//Make me True:
var booya3 = eatsDoughnuts !== ownsRedShoes;
console.log(booya3);

//Make me False:
var booya4 = 3 < 2;
console.log("booya4 is " + booya4);

//Make me True:
var booya5 = 2 >= 2;
console.log("booya5 should be true: " + booya5); 

//Make me False:
var booya6 = 1 !== 1;
console.log("booya6 should be false: " + booya6);

/*
* #4
* Variables with a Null value
*
* Declare variables named completedPrepClass, traveledToMars and buyVicADrink.
*
* Assign a null value to each variable and console.log each variable. 
*/
var completedPrepClass = null;
var traveledToMars = null;
var buyVicADrink = null;
console.log(completedPrepClass, traveledToMars, buyVicADrink);


/*
* #5
* Variables with a undefined value.
*
* Declare a variable named superBowlChamps, nextPres and hawaiiRail.
*
* Do not assign a value to the variable and console.log each variable.
*/
var superBowlChamps = undefined;
var nextPres = undefined;
var hawaiiRail = undefined;
console.log(superBowlChamps, nextPres, hawaiiRail);


/*
* #6
* Variables with an Array value
* 
* Declare a variable named plateLunch and assign it an array containing 5 of your favorite lunch items.
* Declare a variable named `donutBox` and assign it an array containing 5 donuts of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `hamajang` and assign it an array containing 6 different data types.
* Declare a variable named `dynamicDuos` and assign it an array containing 3 arrays, with each array containing items that match with one another.
*
* Console.log each variable.
*/
var plateLunch = ['rice', 'beans', 'tofu', 'haupia', 'lomi'];
console.log(plateLunch);
//I did not continue making all the arrays asked because they were some of the same.

/*7
* Accessing values in Arrays
* var partyList = ["carrot cake", "gin & tonic", "kalua pork nachos", "double stuff oreos", "cool ranch doritos", "orange chicken"];

Console.log the entire array.
Console.log the length of this array.
Console.log only "carrot cake" from this array.
Console.log only "cool ranch doritos" from this array
*/
var partyList = ["carrot cake", "gin & tonic", "kalua pork nachos", "double stuff oreos", "cool ranch doritos", "orange chicken"];
console.log(partyList);
console.log(partyList.length);
console.log(partyList[0]);
console.log(partyList[4]);


/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` from exercise 1 and store them into a new variable called `fullName` (don't forget to include a space between the firstName and lastName).
*
* Using the fullName and birthPlace variables, console.log the following:
*
* "Hi my name is fullName and I was born in birthPlace." 
*
* i.e "Hi my name is Bruce Wayne and I was born in Gotham."
*/

var firstName = "George";
var lastName = "Kailiwai";
var birthPlace = "Tokyo, Japan";

var fullName = firstName + " " + lastName;
console.log("Hi! My name is " + fullName + " and I was born in " + birthPlace + ".");

/*
* #9 
* Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named sum.
* Subtract the two variables and store it to a new variable named difference.
* Mulitply the two variables and store it to a new variable named product.
* Divide the two variables and store it to a new variable named quotient.
* Find the remainder (modulus) of the two variables and store in to a new variable names leftOver.
*
* Console.log each new variable.
*/
var num1 = 6;
var num2 = 2;
var sum = num1 + num2;
console.log("The sum should be 12: " + sum);
var difference = num1 - num2;
console.log("The differnce should be 4: " + difference);
var product = num1 * num2;
console.log("The product should be 12: " + product);
var quotient = num1 / num2;
console.log("The quotient should be 3: " + quotient);
var leftover = num1 % num2; //should be 0
console.log("The modulo should be 0: " + leftover);

/*
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality (===).
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality (==).

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Console.log the variables. Do you see the difference between strict equality vs. equality?
*/


/* 
* #11
* Logical AND Logical OR
* Use comparison and logic operators (>, <, >=, <=, ===, !==) with the logical && and logical || to make the following variables True of False:
*/

//Use && to make me True
var booya7 = 5 > 3 && 2 > 1;
console.log("booya7 should be true: ", booya7);


//Use && to make me False
var booya8;

//Use || to make me True
var booya9;

//Use || to make me False
var booya10;

//Console.log each variable


/*
* #12
* Assignments
* Variables with the outcome of an assignment operation (+=, -=, *=, /=, %=):
*
* Declare a variable named `myNum` and assign it with a number of your choosing.
* 
* Change the value of the muNum variable by using the assignment operators and console.log myNum after each assignment.
*/

var count = 1;
count += 1
console.log(count);

//increment and assign 3 (+=):

//decrement and assign 1 (-=):
var count = 1
count -= 1
console.log(count);

//multiple and assign 2 (*=);
var count = 2;
count *= 2;
console.log(count);

//divide and assign 5 (/=);
var count = 5;
count /= 5;
console.log(count);

//modulo and assign 4 (%=);
var count = 4;
count %= 4;
console.log(count);


/*===================================================================*/

/*
* Final Boss 

* The following exercises are designed to further challenge you and give you a jump start on the next topic that'll be covered. Let the boss battle begin!
*
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named bakePie which has a single parameter ingredient.
* 
* When the function is invoked, it should return a string, "Today's special is ingredient pie." Where ingredient will be the value that you pass into the function.
* 
* For example, if the value is `blueberry`, it should return "Today's special is blueberry pie."
* 
* Declare a variable pieResult and assign it to the function call.
* Console.log the variable to see the result.*/
function bakePie(){};
bakePie()
/*
* Declare a Function named jump which has a single parameter, height.
* 
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* 
* For example, if the value is 9, it should return "You jumped 9 feet high!"

* Declare a variable jumpResult and assign it to the function call.
* Console.log the variable to see the result.
*/
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
console.log(animals);

/*
* Declare a Function named makeFood which takes three parameters, ingredient1, ingredient2, recipeName.
* 
* This function should return a string ingredient1 and ingredient2 make a recipeName. Where ingredient1, ingredient2 and recipeName will be the values that you pass into the function.
* 
* For example, if the values are "Cheese", "Bacon", "pancake" it should return "Cheese and bacon make a pancake."
*
* Declare a variable foodResult and assign it to the function call. Console.log the variable to see the result.
*/

