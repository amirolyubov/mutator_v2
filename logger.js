const colors = require('colors')
const { calculateOne } = require('./utils')

function logger(p, from) {
  console.log(`\n${from.toUpperCase().bgYellow.black}`);
  console.log('--------------------------------------------------------');
  console.log(`INDEX               POPULATION             ${'WEIGHT'.green}  ${'PRICE'.red}`);
  console.log('--------------------------------------------------------');
  p.map((item, index) => {
    const calculated = calculateOne(item)
    console.log(`${index + 1}${index < 9 ? ' ' : ''}        ${item.join(' ')} |    ${calculated.weight.toString().green}  ${calculated.weight.toString().length === 3 ? '' : calculated.weight.toString().length === 1 ? '  ' : ' '}  ${calculated.price.toString().red}`)
  })
  console.log('--------------------------------------------------------');
}

function final(item, ) {
  const calculated = calculateOne(item)
  console.log(`${`\nBEST RESULT`.bgYellow.black}       ${calculated.weight.toString().green}${calculated.weight.toString().length === 1 ? '  ' : calculated.weight.toString().length === 2 ? ' ' : ''} ${calculated.price.toString().red}`);
  console.log(`${`POPULATION COUNT`.bgYellow.black}  50`);
}

module.exports = {
  logger,
  final
};
