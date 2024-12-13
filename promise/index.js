// Promise = An Object that manages asynchronous operations.
// Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH


function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;

            if (dogwalked) {
                resolve("You walk the dog ");
            } else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });  
}
    
function cleanKitchen () {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clean = true;

            if (clean) {
                resolve("You clean the kitchen");
            } else{
                reject("You DIDN'T clean the kitchen");
            }
            }, 2500);
    }); 
}

function takeOutTrash () {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tekeTrash = true;

            if (tekeTrash) {
                resolve("You take out the trash");
            } else{
                reject("You DIDN'T take out the trash");
            }
            }, 500);
    }); 
}
   
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You finished all the chores!"));
//     });
// });

walkDog().then(value => { console.log(value); return cleanKitchen()})
         .then(value => { console.log(value); return takeOutTrash()})
         .then(value => { console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));
