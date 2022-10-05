function createChar(name, quote, attack, stamina, intelligence, speed){
    return{
    name,
    quote,
    attack,
    stamina,
    intelligence,
    speed
    }
}


const char =createChar('Darth Vader','i find your lack of faith disturbing', 80, 100, 70, 80 , 70 )
console.log(char)