# Variables

* Moder java use let and const instead of var, for making code more readable.

## attachment

* [Variables.html](Variables.html)
* [script.js](script.js)

## Rules for creating variables

1. can not start with number.
2. can start with letter, _ (underscore) and $ (doller).
3. Variables are __case sensetive__.
4. you are able to use (''), ("") and (``) for strings.

Note:

* **_ (underscore)** used as a private variable on object orianted JavaScript, so we are avoid to use it.
* __$ (doller)__ is confusable for code, so we also not using that.

## Keywords

* var, let and const are JavaScript keywords.

### var

* var is __global level scope__ variable.
* It means you can able to use declared variable in all the page.
* Modern JavaScript programers are not using var mostly to make thair code readable.

Syntax:

```JavaScript
var name = 'kaushal';
// or
var name;
name = 'kaushal';
```

### let

* let is __block level scope__ variable.
* let is mostly used in functions or in blocks.
* let is most used variables and it make code clean and readable.

Syntax:

```JavaScript
{
    let name;
    name = 'kaushal' ;
}
```

### const

* const make variable as constant.
* const values are not changable after it declared.
* const neede to be initilized when it declared.
* we are able to add values on const array.

Syntax:

```JavaScript
const ownerName = 'Kaushal Bhatol';

const arr1 = [12,34,55];
arr1.push(57); // for adding value on array
```

## Common Programming case types

* name as example used for batter knowledge.

1. camleCase
2. kubar-case
3. snake_case
4. PaskleCase

* camle case are most used case type.
