//
// p map
//
//
//
//
//
//
//

class Mutator {
  constructor(props) {
    this.p = props.p
    this.length = props.p.length
    this.item_length = props.p[0].length
  }

  rand_gen(count) {
    this.p = this.p.map(_item => {
      const gens = Array.from({ length: count }, () => Math.floor(Math.random() * this.item_length))
      return _item.map((gen, index) => gens.includes(index) ? Number(!Boolean(gen)) : gen)
    })
    return this
  }

  done() {
    return this.p
  }
}

module.exports = Mutator
