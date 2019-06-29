const colors = require('colors')
const { calculateOne } = require('./utils')

function logger(p, from) {
  console.log(`\n${from.toUpperCase().bgYellow.black}`);
  console.log(`INDEX               POPULATION                 ${'WEIGHT'.green}  ${'PRICE'.red}`);
  console.log('------------------------------------------------------------');
  p.map((item, index) => {
    if (!item) {
      console.log(`${(index + 1).toString().red}${index < 9 ? ' ' : ''}        ${'                                                  '.bgRed}`)
      return 'null'
    }
    const calculated = calculateOne(item)
    console.log(`${index + 1}${index < 9 ? ' ' : ''}        ${item.join(' ')} |    ${calculated.weight.toString().green}  ${calculated.weight.toString().length === 3 ? '' : calculated.weight.toString().length === 1 ? '  ' : ' '}  ${calculated.price.toString().red}`)
  })
  console.log('------------------------------------------------------------');
}

function final(item, iteration, iteration_best) {
  if (!!item) {
    const calculated = calculateOne(item)
    console.log(`${`\nBEST RESULT`.bgYellow.black}       ${calculated.weight.toString().green}/${calculated.price.toString().red} ${'ON STEP'.bgYellow.black} ${iteration_best} ${'ITEMS'.bgYellow.black} ${item.join('')}`);
    console.log(`${`POPULATION COUNT`.bgYellow.black}  ${iteration}`);
  }
}

module.exports = {
  logger,
  final
};
