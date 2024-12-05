"use strict";
class Perro {
    name;
    color;
    edad;
    sexo;
    static size = 30;
    constructor(name, color, edad, sexo) {
        this.name = name;
        this.color = color;
        this.edad = edad;
        this.sexo = sexo;
    }
    get() {
        return this.name;
    }
    getEdad() {
        return this.edad;
    }
    getSuperEdad() {
        return this.getEdad();
    }
    set() {
        this.edad = 14;
    }
    static growSize() {
        return this.size + 1;
    }
}
const perro1 = new Perro("Firulais", "Marron", 10);
perro1.set();
console.log(`Mi perrito, se llama ${perro1.get()}, es de color ${perro1.color} y tiene ${perro1.getSuperEdad()} años`);
console.log(Perro.size);
console.log(Perro.growSize());
class Lobo extends Perro {
    pelaje;
    constructor(name, color, edad, pelaje, sexo) {
        super(name, color, edad, sexo);
        this.pelaje = pelaje;
    }
    aullar() {
        console.log("AAAAUUUUUUUU!");
    }
}
const lobo1 = new Lobo("Balto", "Gris", 8, "Resistente al frio");
console.log(lobo1.pelaje);
lobo1.aullar();
const getDragonBall = async () => {
    const response = await fetch("https://dragonball-api.com/api/characters?limit=30", {
        method: "GET",
    });
    if (response) {
        const dragonBall = response.json();
        return dragonBall;
    }
    else {
        console.log("La conexión fallo");
    }
};
const dragonBallChar = async () => {
    console.log(await getDragonBall());
};
dragonBallChar();
console.log(Perro.size);
//# sourceMappingURL=main.js.map