// var
var name, city;
name = 'kaushal';
city = 'Ahemdabad';
console.log(name);

// let
{
    let name, $test, _test2, a;
    a = 4;
    name = `Aarav`;
    $test = 'doller';
    _test2 = 'underscore';
    console.log(name, $test, _test2, city, a);
}
console.log(name); // value not changed on outside of block

// const
const ownerName = 'Kaushal Bhatol';
console.log(ownerName);
const arr1 = [12, 44, 55];
arr1.push(45);
console.log(arr1);
console.log(arr1[0]);
