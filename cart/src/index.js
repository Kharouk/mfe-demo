import faker from 'faker';

console.log('Cart has been loaded');
const cartText = `<div>You have ${faker.datatype.number()}</div>`;

document.querySelector('.dev-cart');
