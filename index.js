const data = require('./data.js');
const { max_bag_size, pp_size } = require('./config.js')
const { calculateOne } = require('./utils.js');
const Mutator = require('./mutator.js')
const { logger, final } = require('./logger.js')

const initial_population = data.initial_population
console.log(initial_population);
let interval = null

function child(p) {
  const _p = p
  const _best = _p.filter(item => !!item).filter((_, index) => index < 5)[0]

  const _new = Array.from({ length: pp_size }, () => _best)

  logger(_new, 'child')
  return {
    population: _new,
    meta: {

    }
  }
}
function mutate(p) {
  const _p = p.population
  const _mutator = new Mutator({ p: _p })
  const _mutated = _mutator.rand_gen(1).done()

  logger(_mutated, 'mutate')
  return {
    population: _mutated,
    meta: {

    }
  }
}
function sort(p) {
  const _p = p.population
  const _sorted = _p.filter(item => !!item)
                    .sort((a, b) => calculateOne(a).price < calculateOne(b).price ? 1 : -1)
                    .filter(item => calculateOne(item).weight <= max_bag_size)
  const _final = Array.from({ length: pp_size }, (_, index) => _sorted[index] || null)

  logger(_final, 'sort')
  return {
    population: _final,
    meta: {

    }
  }
}
function evolute(pp, best) {
  console.clear()
  if (!pp.every(item => item === null)) {

    // const cleaned = clean(pp)
    const children = child(pp)
    const mutated = mutate(children)
    const next = sort(mutated)

    if (best) {

    } else {
    }


    return {
      population: next.population,
      best: next.population[0],
    }
  } else { return [] }
}

function start() {
  let current = [],
      count = 0,
      best = [0],
      count_best = 0

  interval = setInterval(() => {
    count++
    if (current.length === 0) {
      current = evolute(initial_population).population
    } else {
      const step = evolute(current, best)
      if (calculateOne(step.best)) {
        const isBetter = calculateOne(step.best).price > calculateOne(best).price
        current = step.population
        best = isBetter ? step.best : best
        count_best = isBetter ? count : count_best
        final(best, count, count_best)
      } else {
        clearInterval(interval)
        final(best, count, count_best)
      }
    }
  }, 100)
}

start()
