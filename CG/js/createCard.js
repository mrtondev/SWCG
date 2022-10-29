function createCard (side,name, attack, stamina, intelligence, speed, force, quote){
    this.side = side
    this.name = name
    this.attack = attack
    this.stamina = stamina
    this.intelligence = intelligence
    this.speed = speed
    this.force = force
    this.quote = quote
}

const char = new createChar('dSide','Darth Vader', 80, 80, 70, 70, 90, "I find your lack of faith disturbing.")

console.log(char)
