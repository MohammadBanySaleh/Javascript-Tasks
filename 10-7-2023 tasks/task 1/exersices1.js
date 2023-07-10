/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
let x = 10;
let y = 20;
if (x > y) {
    console.log(x);
}
else {
    console.log(y);
}


/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

let number = -7;
if (number > 0) {
    window.alert('Positive');
}
else if (number == 0) {
    window.alert('Zero');
}
else {
    window.alert('Negative');
}

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let num1 = 0;
let num2 = -1;
let num3 = 4;
let smallest = 0;
let middle = 0;
let largest = 0;
if (num1 > num2 && num1 > num3) {
    largest = num1;
    if (num2 > num3) {
        middle = num2;
        smallest = num3;
    }
    else {
        middle = num3;
        smallest = num2;
    }
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
    if (num1 > num3) {
        middle = num1;
        smallest = nim2;
    }
    else {
        middle = num2;
        smallest = num1;
    }
}
else {
    largest = num3;
    if (num1 > num2) {
        middle = num1;
        smallest = num2;
    }
}
window.alert(largest + ',' + middle + ','+smallest)
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let myArray = [-5,-2,-6,0,-1]
let largestNumber = myArray[0];
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > largestNumber) {
        largestNumber = myArray[i];
    }
}
window.alert('largest between 5 is: ' + largestNumber);
/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let r = 10;
let t = 20;
if (r > t) {
    console.log('hello world');
}
else if (r == t) {
    console.log('r equal t');
}
else {
    alert('GoodBuy');
}
/******* End Your Code ********* */



