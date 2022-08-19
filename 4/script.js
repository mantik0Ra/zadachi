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
            "physicArmorPercents": 0, // физическая броня
            "magicArmorPercents": 0,  // магическая броня
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
            "physicalDmg": 8,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 5,
            "cooldown": 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 10,
            "physicArmorPercents": 2,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 2,
            "physicArmorPercents": 8,
            "magicArmorPercents": 4,
            "cooldown": 4
        },
    ]
};

let moveCount = 0
let clickCount = 0
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
console.log(monsterHealth, monsterPhysicArmour, monsterMagicArmour);
const form = document.forms.form;
const formMonster = document.forms[0];


function efstafiyMove() {
    clickCount++
    console.log(clickCount)
    const moves = efstafiy.moves
    form.addEventListener("click", (e) => {
        e.preventDefault();
        damage.innerText = `Монстр наносит ${moves[e.target.id].name} удар, нанося ${moves[e.target.id].physicalDmg} физического урона и ${moves[e.target.id].magicDmg} магического урона`;
        if(monsterPhysicArmour - moves[e.target.id].physicalDmg < 0) {
            monsterHealth -= (moves[e.target.id].physicalDmg - monsterPhysicArmour)
            monsterPhysicArmour = 0
        } else {
            monsterPhysicArmour - (moves[e.target.id].physicalDmg) > 0 ? monsterPhysicArmour - (moves[e.target.id].physicalDmg) : 0
        }
        if(monsterMagicArmour - moves[e.target.id].magicDmg < 0) {
            monsterHealth -= (moves[e.target.id].magicDmg - monsterMagicArmour)
            monsterMagicArmour = 0
        } else {
            monsterMagicArmour - (moves[e.target.id].magicDmg) > 0 ? monsterMagicArmour - (moves[e.target.id].magicDmg) : 0
        }
        efstafiyPhysicArmour += (moves[e.target.id].physicArmorPercents)
        efstafiyMagicArmour += (moves[e.target.id].magicArmorPercents)
        console.log(monsterHealth, monsterPhysicArmour, monsterMagicArmour);
        disable(true, false);
        document.querySelector(".move2").innerText = "Ход Лютого"
        
        
        refreshHealth();
        monsterMove();

    })
}
efstafiyMove();

function monsterMove() {
    moveCount++
    console.log(moveCount)
    const moves = monster.moves;
    formMonster.addEventListener("click", (e) => {
        e.preventDefault();
        damage.innerText = `Монстр наносит ${moves[e.target.id].name} удар, нанося ${moves[e.target.id].physicalDmg} физического урона и ${moves[e.target.id].magicDmg} магического урона`;
        if(efstafiyPhysicArmour - moves[e.target.id].physicalDmg < 0) {
            efstafiyHealth -= (moves[e.target.id].physicalDmg - efstafiyPhysicArmour)
            efstafiyPhysicArmour = 0
        } else {
            efstafiyPhysicArmour - (moves[e.target.id].physicalDmg) > 0 ? efstafiyPhysicArmour - (moves[e.target.id].physicalDmg) : 0
        }
        if(efstafiyMagicArmour - moves[e.target.id].magicDmg < 0) {
            efstafiyHealth -= (moves[e.target.id].magicDmg - efstafiyMagicArmour)
            efstafiyMagicArmour = 0
        } else {
            efstafiyMagicArmour - (moves[e.target.id].magicDmg) > 0 ? efstafiyMagicArmour - (moves[e.target.id].magicDmg) : 0
        }
        monsterPhysicArmour += (moves[e.target.id].physicArmorPercents)
        monsterMagicArmour += (moves[e.target.id].magicArmorPercents)
        console.log(efstafiyHealth, efstafiyPhysicArmour, efstafiyMagicArmour);
        refreshHealth();
        disable(false, true);
        document.querySelector(".move2").innerText = "Ход Евстафия";
        
        efstafiyMove();

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

function refreshHealth() {
    monsterHeal.innerText = `health: ${monsterHealth}`;
    monsterPhysic.innerText = `armour: ${monsterPhysicArmour}`;
    monsterMagic.innerText = `magic armour: ${monsterMagicArmour}`;
    efstafiyHeal.innerText = `health: ${efstafiyHealth}`;
    efstafiyPhysic.innerText = `armour: ${efstafiyPhysicArmour}`;
    efstafiyMagic.innerText = `magic armour: ${efstafiyMagicArmour}`;
    document.querySelector(".move").innerText = `Round ${moveCount}`;
};







