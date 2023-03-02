console.log( NaN || 2 || undefined ); // 2

console.log( NaN && 2 && undefined ); // NaN

console.log( 1 && 2 && 3 ); // 3

console.log( !1 && 2 || !3 ); // false

console.log( 25 || null && !3 ); // 25

console.log( NaN || null || !3 || undefined || 5); // 5 

console.log( NaN || null && !3 && undefined || 5); // NaN || false || 5

console.log( 5 === 5 && 3 > 1 || 5); // true

console.log(3 > 1 ? '1' : '0')

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
} // done

let cheeseburger;
const villagePotatoes = NaN;
const fanta = 0;
const chickenWings = 2;

if (cheeseburger && fanta || villagePotatoes === 3 && chickenWings) {
   console.log('Done!')
} else {
    console.log("Yxodim")
} // Yxodim

