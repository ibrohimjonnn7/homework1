// #1
// function myfunc(a) {
//     if (a < 10){

//         return a;
//     }
//     let b = (a % 10);
//     return Math.min(b, myfunc(Math.floor((a) / 10)));
// }

// console.log(myfunc(457));

// #2
// function myfunc(a) {
//     if (a < 10){

//         return a;
//     }
//     let b = (a % 10);
//     return Math.max(b, myfunc(Math.floor((a) / 10)));
// }

// console.log(myfunc(457));

// #3
// function myfunc(a, b) {
//     if (a <= b) {
//         func(a + 1, b);
//         console.log(a);
//     }
// }

// myfunc(7,14);

// #4
// function myfunc(a, b, c) {
//     let sum = (a + b + c) + (a - b) * c + (b / a) + (c % b);
//     return sum;
// }

// console.log(myfunc(3, 5, 7));

// #5
// function myfunc(a) {
//     const str = Math.abs(a).toString();
//     if (str.length === 1) {
//         return str;
//     }
//     return myfunc(str.slice(1, -1));
// }

// console.log(myfunc(7657534));
// console.log(myfunc(136));

// #6
// function myfunc(a){

//     return (b)=>{
//         return b=a/a
//     }
// }
// let second=myfunc(1)
// console.log(second(23));
// console.log(second());
// console.log(second());

// #7
// function myfunc(a) {
//     let b = a.toString();

//     return () => {
//         b = b.slice(1);
//         return b;
//     }
// }

// let second = myfunc(232343);

// console.log(second());
// console.log(second());
// console.log(second());
// console.log(second());

