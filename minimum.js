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

let sorted = shoppingList.sort((a, b) => {
  if (a.isBought && !b.isBought) {
    return 1
  } else if (b.isBought && !a.isBought) {
    return -1
  } else {
    return 0
  }
})

console.log(sorted)

const markProductAsBought = (shoppingList, productName) => {
  for (const item of shoppingList) {
    if (item.name === productName) {
      item.isBought = true
      break
    }
  }
}


markProductAsBought(shoppingList, 'orange')
console.log(shoppingList)