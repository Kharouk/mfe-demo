import { commerce } from 'faker'

let products = ''

let productTag = document.querySelector('.products')

for (let i = 0; i < 6; i++) {
  const name = commerce.productName()
  products += `<div>${name}</div>`
}

productTag.innerHTML = products
