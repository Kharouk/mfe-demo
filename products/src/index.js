import { commerce } from 'faker'

let products = ''

for (let i = 0; i < 3; i++) {
  const name = commerce.productName()
  products += `<div>${name}</div>`
}

console.log({products})