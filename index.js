const data = require('./data.js');
const config = require('./config.js')
const { calculateOne } = require('./utils.js');
const Mutator = require('./mutator.js')
const { logger, final } = require('./logger.js')

const initial_population = data.initial_population

function clean(p) {
  const _p = p

  logger(_p, 'clean')
  return {
    population: _p,
    meta: {

    }
  }
}
function mutate(p) {
  const _p = p.population
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
  const sorted = _p.sort((a, b) => calculateOne(a).price < calculateOne(b).price ? 1 : -1)

  logger(sorted, 'sort')
  return {
    population: sorted,
    meta: {

    }
  }
}
function evolute(pp) {
  console.clear()
  const cleaned = clean(pp)
  const mutated = mutate(cleaned)
  const next = sort(mutated)
  final(next.population[0])

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
