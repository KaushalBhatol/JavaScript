# Console

[Preview On web](https://kaushalbhatol.github.io/JavaScript/Module01/01_Console/index.html)

## Basic Information

* Console are built in browser just by pressing `F12` key.
* Console are very useful for finding javaScript errors.
* You can also use console to tweak websites from client site.

## Console Basic Syntax

### Simple log on console window.

```JavaScript
console.log('Hello world');
```

### Console object

```JavaScript
console.log({kaushal: 'this', marks: 343});
console.table({kaushal: 'this', marks: 343}); // table view
```

### Console time

* Show how much time used for runnig script.

```JavaScript
console.time('My Code Took');
/*
    Some Code
*/
console.timeEnd('My Code Took');
```

### Console assest

* Used for chacking conditions

```JavaScript
// age = 566
console.assert(566<189, 'Age > 189 is not Possible');
```

### Other Useful Functions

```JavaScript
alert('This is alert'); // Alert
clear();    // clear
console.clear(); // clear console screen
console.warn('This is warnning'); // Warning
console.error('This is error'); // error
```

## attachments

* [index.html](index.html)
* [script.js](script.js)
