import { mountProduct } from 'products/ProductsIndex'; // set up the alias in products/webpack.config.js
import 'cart/CartShow';

console.log('Imported products and cart, now in bootstrap.js');

// mount the Products app into the container:
mountProduct(document.querySelector('.products'));
