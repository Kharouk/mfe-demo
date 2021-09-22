import { commerce } from 'faker';

const mountProduct = (element) => {
  let products = '';

  for (let i = 0; i < 6; i++) {
    const name = commerce.productName();
    products += `<div>${name}</div>`;
  }

  // ala ReactDOM.render(<App />, element);
  element.innerHTML = products;
};

/*
 * Assuming that the container 'team' knows of us (products) attaching the code to a
 * tag with class 'products'
 *
 * Context/Situation #1
 * - We are running the file isolated from production
 *    - therefore we use our local index.html file
 *    - we are sure we will have a div with class 'products'
 *    - we want to immediately render our app into that element.
 */

// webpack replaces this env var:
if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('.dev-products');
  // assuming the container doesn't have an element with class 'dev-products':
  if (element) mountProduct(element);
}

/*
 * Context/Situation #2
 * - We are running this sub-project/file in development/production WITHIN container (HOST)
 *    - No guarantee that there will be a div with class 'products'
 *    - we do not want to immediately render this app
 */

export { mountProduct };
