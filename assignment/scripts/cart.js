console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Update the `cart.js` file to do the following:

// - Create a global variable named `basket` and set it to an empty array.


// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
let basket = []
function addItem (item){
basket.push(item);
return true;
}
addItem("carrot")
addItem("celery")
addItem("apple")
console.log(basket);

// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems (){
for (let i = 0; i < basket.length; i++) {
    console.log(basket [i]);
}
}
listItems();

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
//   - do not use `basket = []` to reset the array
function empty (){
for (let i = 0; i <= basket.length + 1; i++) {
    basket.shift ()
    console.log(basket);
}
}
empty (basket)
console.log(basket);

// > __IMPORTANT__
// > Make sure that you are writing code *in the file* to test every function that you write!

// For example, to test `addItem`:
// ```
// console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(`Basket is now ${basket}`);
// ```


// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
