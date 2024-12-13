// Dates

const currentDate = new Date();

console.log(currentDate);
console.log("");

const specificDate = new Date('2024-12-25T10:00:00');

console.log(specificDate);
console.log("");



currentDate.setFullYear(2025);
currentDate.setMonth(11); 
currentDate.setDate(31);
currentDate.setHours(23);
currentDate.setMinutes(59);
currentDate.setSeconds(59);

console.log(currentDate);
console.log("");



console.log('Year:', currentDate.getFullYear());
console.log('Month:', currentDate.getMonth() + 1); 
console.log('Day:', currentDate.getDate());
console.log('Hour:', currentDate.getHours());
console.log('minutes:', currentDate.getMinutes());
console.log('sec:', currentDate.getSeconds());

const formattedDate = currentDate.toLocaleString('en-EN');
console.log(formattedDate);
console.log("");



const startDate = new Date('2024-11-01');
const endDate = new Date('2024-12-01');

const diffTime = endDate - startDate; 
const diffDays = diffTime / (1000 * 3600 * 24);

console.log(`days different: ${diffDays}`);
console.log("");



const timestamp = currentDate.getTime();

console.log('Time in ms from January 1, 1970:', timestamp);
console.log("");

