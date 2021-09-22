import faker from 'faker';

console.log('Cart has been loaded');
const cartNumber = faker.datatype.number(15);
const cartText = `<div>
                    You have ${cartNumber}
                    item${cartNumber !== 1 ? 's' : ''} 
                    in the cart. 🛒
                  </div>`;

document.querySelector('.dev-cart').innerHTML = cartText;
