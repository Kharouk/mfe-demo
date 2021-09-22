import faker from 'faker';

const mountCart = (el) => {
  const cartNumber = faker.datatype.number(15);
  const cartText = `<div>
                    You have ${cartNumber}
                    item${cartNumber !== 1 ? 's' : ''} 
                    in the cart. 🛒
                  </div>`;
  el.innerHTML = cartText;
};

// for Isolated/dev environments:
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('.dev-cart');
  if (el) mountCart(el);
}

export { mountCart };
