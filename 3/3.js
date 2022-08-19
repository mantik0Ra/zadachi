function randomComputer() {
    let randomNumber = getRandomInt(100000);
    return randomNumber;
}

let attempts = 3;
let randomComp = randomComputer();

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


function compareRandomNumber(randomComputer, randomHuman) {
    let randomC = randomComputer.toString().split("");
    let randomH = randomHuman.toString().split("");
    let countPlaces = 0
    let countNotPlaces = 0
    let maxLength = randomC.length > randomH ? randomC.length : randomH.length
    let countPlacesNumbers = []
    let countNotPlacesNumbers = []
    for (let i = 0; i < maxLength; i++) {

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

    if(countPlaces == randomComp.toString().length) {
        document.querySelector(".input").disabled = true;
        tryAgain();
    }

    return countPlaces == randomComp.toString().length ? "Вы угадали!" : (`совпавших цифр не на своих местах - ${countNotPlaces}(${countNotPlacesNumbers.join(" и ")}), цифр на своих местах - ${countPlaces}(${countPlacesNumbers.join(" и ")})`)
}

function inputUser() {
    const input = document.querySelector(".input");
    const answer = document.querySelector(".p")
    const trys = document.querySelector(".attempts")
    const form = document.forms[0];
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputUser = input.value;
        answer.innerText = compareRandomNumber(randomComp, inputUser);
        attempts--
        trys.innerText = `Осталось попыток: ${attempts}`;
        input.value = "";
        if(attempts == 0) {
            input.disabled = true;
            tryAgain();
        }
        
    });

}
inputUser();
function tryAgain() {
    const btn = document.querySelector(".button");
    btn.disabled = false;
    btn.addEventListener("click", () => {
        document.querySelector(".input").disabled = false;
        attempts = 3;
        document.querySelector(".attempts").innerText = `Осталось попыток:${attempts}`;
        document.querySelector(".p").innerText = ""
        randomComp = randomComputer();
        btn.disabled = true;
    });
}







