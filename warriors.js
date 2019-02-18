// this array is globally scoped

const warriors = [
    {
        name: 'Kenny',
        type: 'Master',
        weapon: 'Code',
        agility: 88
    },
    {
        name: 'Nick',
        type: 'Chameleon',
        weapon: 'Wig',
        agility: 87
    },
    {
        name: 'Data',
        type: 'Andriod',
        weapon: 'Positronic Brain',
        agility: 87 
    },
]

// this function is globally scoped

const screamWarriors = () => {
    return console.log(warriors)
}

// no issues running this function
screamWarrior()
