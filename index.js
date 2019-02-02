const data = require('./data.js');
const config = require('./config.js')
const utils = require('./utils.js');
const Mutator = require('./mutator.js')

const initial_population = data.initial_population

function logger(p, from) {
  console.log(`\nlog from ${from}`);
  p.map((item, index) => {
    const calculated = utils.calculateOne(item)
    console.log(`${index + 1}${index < 9 ? ' ' : ''}        ${item} | w ${calculated.weight} p ${calculated.price}`)
  })
}

function mutate(p) {
  const _p = p
  const mutator = new Mutator({ p: _p })
  const mutated = mutator.rand_gen(1).done()

  logger(_p, 'mutate')
  return {
    population: mutated,
    meta: {

    }
  }
}
function sort(p) {
  const _p = p.population
  const sorted = _p.sort((a, b) => utils.calculateOne(a).price < utils.calculateOne(b).price ? 1 : -1)

  logger(sorted, 'sort')
  return {
    population: sorted,
    meta: {

    }
  }
}
function clean(p) {
  const _p = p.population

  logger(_p, 'clean')
  return {
    population: _p,
    meta: {

    }
  }
}
function evolute(pp) {
  console.clear()
  const mutated = mutate(pp)
  const sorted = sort(mutated)
  const next = clean(sorted)

  return next.population
}

function start() {
  let current = []
  setInterval(() => {
    if (current.length === 0) {
      current = evolute(initial_population)
    } else {
      current = evolute(current)
    }
  }, 200)
}

start()
