const monster = {
    maxHealth: 25,
    physicArmour: 0,
    magicArmour: 0,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 4, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 2, // физическая броня
            "magicArmorPercents": 2,  // магическая броня
            "cooldown": 0     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 10,
            "physicArmorPercents": 5,
            "magicArmorPercents": 1,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 7,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 6,
            "cooldown": 2
        },
    ]
}
const efstafiy = {
    maxHealth: 30,
    physicArmour: 0,
    magicArmour: 0,
    name: "Евстафий",
    moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 1,
            "magicDmg": 3,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 6,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 3,
            "cooldown": 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 7,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 2,
            "physicArmorPercents": 4,
            "magicArmorPercents": 2,
            "cooldown": 4
        },
    ]
};



let moveCount = 1;
let clickCount = 0;
const damage = document.querySelector(".damage");
let monsterHealth = monster.maxHealth;
let monsterPhysicArmour = monster.physicArmour;
let monsterMagicArmour = monster.magicArmour;
let efstafiyHealth = efstafiy.maxHealth;
let efstafiyPhysicArmour = efstafiy.physicArmour;
let efstafiyMagicArmour = efstafiy.magicArmour;
const monsterHeal = document.querySelector(".heal-monster");
const monsterPhysic = document.querySelector(".physic-monster");
const monsterMagic = document.querySelector(".magic-monster");
const efstafiyHeal = document.querySelector(".heal-efstafiy");
const efstafiyPhysic = document.querySelector(".physic-efstafiy");
const efstafiyMagic = document.querySelector(".magic-efstafiy");
const form = document.forms.form;
const formMonster = document.forms[0];
const efstafiy1spell = form.elements[0];

startGame();

efstafiyMove();
monsterMove();

function efstafiyMove() {
    const moves = efstafiy.moves;
    form.addEventListener("click", (e) => {
        e.preventDefault();
        damage.innerText = `Евстафий наносит ${moves[e.target.id].name} удар, нанося ${moves[e.target.id].physicalDmg} физического урона и ${moves[e.target.id].magicDmg} магического урона`;
        efstafiyPhysicArmour += (moves[e.target.id].physicArmorPercents);
        efstafiyMagicArmour += (moves[e.target.id].magicArmorPercents);
        countDamage(monsterPhysicArmour, moves[e.target.id].physicalDmg, monsterMagicArmour, moves[e.target.id].magicDmg, monsterHealth, 1);
        console.log(`Евстафий наносит ${moves[e.target.id].physicalDmg} физического урона и ${moves[e.target.id].magicDmg} магического урона, здоровье евстафия = ${efstafiyHealth}, броня:${efstafiyPhysicArmour}, магическая:${efstafiyMagicArmour}`);
        disable(true, false);
        cooldown(formMonster);
        e.target.setAttribute("cooldown", moves[e.target.id].cooldown);
        document.querySelector(".move2").innerText = "Ход Лютого";
        gameOver(monsterHealth, efstafiy.name);
        refreshHealth();
        botMove();
        
    

    })
}


function monsterMove() {
    
    console.log("move "+moveCount);
    const moves = monster.moves;
    formMonster.addEventListener("click", (e) => {
        e.preventDefault();
        moveCount++;
        e.target.setAttribute("cooldown", moves[e.target.id].cooldown)
        damage.innerText = `Монстр наносит ${moves[e.target.id].name} удар, нанося ${moves[e.target.id].physicalDmg} физического урона и ${moves[e.target.id].magicDmg} магического урона`;
        monsterPhysicArmour += (moves[e.target.id].physicArmorPercents);
        monsterMagicArmour += (moves[e.target.id].magicArmorPercents);
        countDamage(efstafiyPhysicArmour, moves[e.target.id].physicalDmg, efstafiyMagicArmour, moves[e.target.id].magicDmg, efstafiyHealth, 2);
        console.log(`Монстр наносит ${moves[e.target.id].physicalDmg} физического урона и ${moves[e.target.id].magicDmg} магического урона, здоровье монстра = ${monsterHealth}, броня:${monsterPhysicArmour}, магическая:${monsterMagicArmour}`);
        refreshHealth();
        disable(false, true);
        document.querySelector(".move2").innerText = "Ход Евстафия";
        gameOver(efstafiyHealth, monster.name);
        cooldown(form);
        

    })

}
function disable(active, disable) {
    for(let i = 0; i < formMonster.elements.length; i++) {
        formMonster.elements[i].disabled = disable;
    }
    for(let i = 0; i < form.elements.length; i++) {
        form.elements[i].disabled = active;
    }
}

function countDamage(physicArmour, physicalDmg, magicArmour, magicDmg, health, player) {
    if(physicArmour - physicalDmg < 0) {
        health -= (physicalDmg - physicArmour);
        physicArmour = 0;
        console.log(physicArmour, player, efstafiyPhysicArmour, monsterPhysicArmour)
    } else {
        physicArmour = physicArmour - (physicalDmg) > 0 ? physicArmour - (physicalDmg) : 0
        console.log(physicArmour, player, efstafiyPhysicArmour, monsterPhysicArmour)
    }
    if(magicArmour - magicDmg < 0) {
        health -= (magicDmg - magicArmour);
        magicArmour = 0;
        console.log(magicArmour, player, efstafiyMagicArmour, monsterMagicArmour)
    } else {
        magicArmour = magicArmour - (magicDmg) > 0 ? magicArmour - (magicDmg) : 0
        console.log(magicArmour, player, efstafiyMagicArmour, monsterMagicArmour)
    }
    if(player == 1 ) {
        monsterHealth = health
        monsterPhysicArmour = physicArmour
        monsterMagicArmour = magicArmour
    } else {
       efstafiyHealth = health
       efstafiyPhysicArmour = physicArmour
       efstafiyMagicArmour = magicArmour
    }
    
}

function refreshHealth() {
    monsterHeal.innerText = `health: ${monsterHealth}`;
    monsterPhysic.innerText = `armour: ${monsterPhysicArmour}`;
    monsterMagic.innerText = `magic armour: ${monsterMagicArmour}`;
    efstafiyHeal.innerText = `health: ${efstafiyHealth}`;
    efstafiyPhysic.innerText = `armour: ${efstafiyPhysicArmour}`;
    efstafiyMagic.innerText = `magic armour: ${efstafiyMagicArmour}`;
    document.querySelector(".move").innerText = `Round ${moveCount}`;
};

function gameOver(playerHealth, player) {
    if(playerHealth <= 0) {
        disable(true, true);
        damage.innerText = `${player} одержал победу!`
        const over = document.createElement("div")
        over.innerHTML = `<h4>${player} одержал победу!</h4>`
        const battlefield = document.querySelector(".battlefield")
        battlefield.classList.add("collapse")
        const container = document.querySelector(".container")
        container.appendChild(over);
    }
    

}

function cooldown(formElement) {
    for(let i = 0; i < formElement.elements.length; i++) {
        if(formElement.elements[i].getAttribute("cooldown") > 0) {
            formElement.elements[i].disabled = true;
            formElement.elements[i].classList.add("disabled");
            let cooldown = formElement.elements[i].getAttribute("cooldown");
            cooldown--;
            formElement.elements[i].setAttribute("cooldown", cooldown);
        }
        if(formElement.elements[i].getAttribute("cooldown") == 0) {
            formElement.elements[i].disabled = false;
            formElement.elements[i].classList.remove("disabled")
        };
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let target = null


async function botMove() {
    let check = true
    while(check) {
        let move = getRandomInt(3);
        target = formMonster.elements[move];
        if(target.getAttribute("cooldown") <= 0) {
            check = false
            target.click();
            console.log("find")
        }

    }
}

function startGame() {
    const levelEz = document.querySelector("#ez");
    const levelMedium = document.querySelector("#medium");
    const levelHard = document.querySelector("#hard");
    levelEz.addEventListener("click", () => {
        console.log("click ez");
        addView();
        monsterHealth = 20;
        refreshHealth()
    })
    levelMedium.addEventListener("click", () => {
        console.log("click medium");
        addView();
        monsterHealth = 35;
        refreshHealth()
    });
    levelHard.addEventListener("click", () => {
        console.log("click hard");
        addView();
        monsterHealth = 45;
        refreshHealth()
    })

}

function addView() {
    const startDiv = document.querySelector(".start_game");
    const container = document.querySelector(".battlefield")
    container.classList.remove("collapse")
    startDiv.classList.add("collapse")
};








