//Premative Data Type
console.warn("Premative Data Types");

// string
let name = "Kaushal Bhatol";
console.log(name);
console.log(`kaushal data type is ` + typeof (name));

// Numbers
let marks = 43;
let marks1 = 45.55;
console.log("43 is " + typeof (marks));
console.log("45.55 is " + typeof (marks1));

// boolean
let isDrive = true;
console.log(isDrive);
console.log('Boolean data type is ' + typeof (isDrive));

// null
let thisNull = null;
console.log(thisNull);
console.log('thisNull data type is ' + typeof (thisNull));

// undefined
let myUndefined = undefined;
console.log(myUndefined);
console.log('myUndefined data type is ' + typeof (myUndefined));


// Refrence data type
console.warn('Refrence data type');

// array
let myArray1 = [11, 22, 33, 'kaushal', true];
console.log(myArray1); //or
console.table(myArray1);
console.log('myArray data type is ' + typeof (myArray1));

// function
function myfunction() {
    console.log('hello function');
}
myfunction();
console.log('myFunction data type is ' + typeof (myfunction));

// date
let todayDate = new Date();
console.log(todayDate);
console.log('todayDate data type is ' + typeof (todayDate));