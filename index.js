const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let hero = {
    name: "",
    age: 0,
    type: {
        1: ["Mago"],
        2: ["Guerreiro"],
        3: ["Monge"],
        4: ["Ninja"]
    }
};
async function dadosHero() {
    const name = await new Promise((resolve) => {
        r1.question("Digite o nome de seu herói: ", resolve);
    });
    const age = await new Promise((resolve) => {
        r1.question("Digite a idade de seu herói: ", resolve);
    });
    const type = await new Promise((resolve) => {
        r1.question("Digite o tipo de seu herói: ", resolve);
    });
    return { name, age, type };
}
dadosHero().then(({ name, age, type }) => {
    let poder;

if (type == 1) {
    poder = "Magia";
    }
else if (type == 2) {
    poder = "Espada";
    }
else if (type == 3) {
    poder = "Artes Marciais";
    }
else if (type == 4) {
    poder = "Shuriken";
    }

hero.name = name;
hero.age = age;

generateHero(hero, type, poder)
});

function generateHero(hero, tipo, poder) {
    console.log(`O nome do herói é ${hero.name}`);
    console.log(`A idade do herói é ${hero.age}`);
    console.log(`O tipo do herói é ${hero.type[tipo]}`);
    console.log("O " + hero.type[tipo] + " atacou usando " + poder);

    r1.close();
};