const { pp_size } = require('./config')

const set = {
  ring: [2, 20],
  amulet: [1, 70],
  potato: [6, 2],
  cabbage: [10, 3],
  gold: [3, 13],
  grafen: [1, 40],
  silk: [3, 7],
  table: [20, 6],
  laptop: [10, 10],
  coffee: [4, 5],
  car: [35, 30],
  sugar: [1, 2],
  ыфде: [1, 3],
  man: [4, 40],
  woman: [4, 40],
  apple: [2, 3],
  tea: [1, 4],
  elephant: [15, 20],
}

const initial_population = Array.from({ length: pp_size }, () =>
  Array.from({ length: Object.keys(set).length }, () => 0))

module.exports = {
  set, initial_population
}
