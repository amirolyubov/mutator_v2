const data = require('./data.js');

function calculateOne(item) {
  let total_weight = 0, total_price = 0
  const arr_from_set = Object.values(data.set)
  const calculated = item
  .map((_item, index) => Boolean(_item) && ({
    weight: arr_from_set[index][0],
    price: arr_from_set[index][1]
  }))
  .filter(_item => _item)
  .map(_item => {
    total_weight += _item.weight
    total_price += _item.price
  })

  return { weight: total_weight, price: total_price }
}

// create initial population, just in case
// const initial_population = ((set, size) => Array.from({ length: size }, () => Object.values(set).map(value => Number(Math.random() < 0.5))))(data, config.pp_size)


module.exports = {
  calculateOne
}
