// 'use strict'

const warrior = {
    name: 'Jujin Take',
    type: 'Ninja',
    weapon: 'Shuriken',
    agility: 79
}


// console.log('Hello')

// var warrior = 'Ninja' //warrior is defined here
// var warrior3 = 'Viking'
// gloabally scoped
const screamWarrior = () => {
    let warrior2 = 'Samurai'
    // wrapped in a function, now is a closure
    // console.log(warrior, warrior2)
    warrior3 = 'Viking'
    return {
        shootWarrior: () => {
            return console.log(warrior, warrior2)
        }
    }
}

const newWarrior = screamWarrior()

newWarrior.shootWarrior()

console.log(warrior, warrior3)

// var warrior

// var warrior3

// console.log(warrior, warrior2)
