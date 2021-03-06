module.exports = function() {
    let faker = require('faker');
    let _ = require('lodash');

    return {
        animals : _.times(100, function (num) {
            return {
                id : num,
                name : faker.name.findName(),
                species : faker.company.catchPhraseNoun(),
                gender: faker.helpers.randomize(['m' , 'f']),
                age : faker.random.number(100)
            }
        }),
        zookeeper : _.times(20, function (num) {
            return {
                id : num,
                name : faker.name.findName(),
                age : faker.random.number(100),
                salary : faker.random.number(5000, 20000)
            }
        })
    }
}