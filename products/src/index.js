import { commerce } from 'faker'

let products = ''

let bodyTag = document.querySelector('.products')
console.log(bodyTag)

for (let i = 0; i < 6; i++) {
  const name = commerce.productName()
  products += `<div>${name}</div>`
}

bodyTag.innerHTML = products

console.log({products})