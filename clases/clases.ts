//! CLASES

class Perro {
  static size: number = 30;
  constructor(
    private name: string,
    public color: string,
    public edad: number,
    public sexo?: string
  ) {}
  get() {
    return this.name;
  }

  public getEdad() {
    return this.edad;
  }

  public getSuperEdad() {
    return this.getEdad();
  }

  set() {
    this.edad = 14;
  }

  static growSize() {
    return this.size + 1;
  }
}

const perro1: Perro = new Perro("Firulais", "Marron", 10);
perro1.set();
console.log(
  `Mi perrito, se llama ${perro1.get()}, es de color ${
    perro1.color
  } y tiene ${perro1.getSuperEdad()} años`
);

console.log(Perro.size);
console.log(Perro.growSize());

class Lobo extends Perro {
  constructor(
    name: string,
    color: string,
    edad: number,
    public pelaje: string,
    sexo?: string
  ) {
    super(name, color, edad, sexo);
  }

  public aullar(): void {
    console.log("AAAAUUUUUUUU!");
  }
}

const lobo1: Lobo = new Lobo("Balto", "Gris", 8, "Resistente al frio");
console.log(lobo1.pelaje);
lobo1.aullar();

const getDragonBall = async () => {
  const response = await fetch(
    "https://dragonball-api.com/api/characters?limit=30",
    {
      method: "GET",
    }
  );
  if (response) {
    const dragonBall = response.json();
    return dragonBall;
  } else {
    console.log("La conexión fallo");
  }
};

const dragonBallChar = async () => {
  console.log(await getDragonBall());
};

dragonBallChar();
