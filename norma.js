let shoppingList = [
  {
    name: 'tangerine',
    price: 50,
    isBought: true,
    quantity: 10,
    sum: 500,
  },
  {
    name: 'lime',
    price: 110,
    isBought: false,
    quantity: 10,
    sum: 1100
  },
  {
    name: 'lemon',
    price: 45,
    isBought: true,
    quantity: 20,
    sum: 900,
  },
  {
    name: 'orange',
    price: 60,
    isBought: false,
    quantity: 40,
    sum: 2400,
  },
]


const updatedShoppingList = shoppingList.filter(item => item.name !== 'lime')
console.log(updatedShoppingList)


let tomato = {
  name: 'tomato',
  price: 20,
  isBought: true,
  quantity: 10,
  sum: 200,
}

let lemon = {
  name: 'lemon',
  price: 45,
  isBought: true,
  quantity: 10,
  sum: 450,
}

function addProduct(shoppingList, product) {
  let updated = false
  for (const item of shoppingList) {
    if (item.name === product.name) {
      item.quantity += product.quantity
      item.sum += product.sum
      updated = true
      break
    }
  }

  if (!updated) {
    shoppingList.push(product)
  }
}

addProduct(shoppingList, tomato)
addProduct(shoppingList, lemon)
console.log(shoppingList)