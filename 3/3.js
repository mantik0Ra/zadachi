function randomComputer() {
    return randomNumber = getRandomInt(100000);
}

function getRandomInt(max) {
    let bool = true
    let random = Math.floor(Math.random() * max)
    while (bool) {
        if (random > 100) {
            bool = false
            return random;
        } else {
            random = Math.floor(Math.random() * max) > 100
        };
    }
};

compareRandomNumber(randomComputer(), 53412);

function compareRandomNumber(randomComputer, randomHuman) {
    let randomC = randomComputer.toString().split("");
    let randomH = randomHuman.toString().split("");
    let countPlaces = 0
    let countNotPlaces = 0
    let maxLength = randomC.length > randomH ? randomC.length : randomH.length
    let countPlacesNumbers = []
    let countNotPlacesNumbers = []
    for (let i = 0; i < maxLength; i++) {
        console.log(randomH[i], randomC[i])

        if (randomH[i] == randomC[i]) {
            countPlaces++;
            countPlacesNumbers.push(randomH[i]);
            continue;
        }
        if (randomC.includes(randomH[i])) {
            countNotPlaces++;
            countNotPlacesNumbers.push(randomH[i]);
            continue;
        }

    }

    return console.log(`совпавших цифр не на своих местах - ${countNotPlaces}(${countNotPlacesNumbers.join(" и ")}), цифр на своих местах - ${countPlaces}(${countPlacesNumbers.join(" и ")})`)
}

const read = require("readline-sync");
const question = read.question("Ваше число?");
console.log(question);


