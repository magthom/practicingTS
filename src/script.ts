const diceContainer = <HTMLDivElement>document.getElementById("dice-container"),
    generateDie = <HTMLButtonElement>document.getElementById("generate-die"),
    sumDice = <HTMLButtonElement>document.getElementById("sum-dice"),
    rollDice = <HTMLButtonElement>document.getElementById("roll-dice");
let diceArr: Die[] = [];

generateDie.addEventListener("click", () => new Die(null));

sumDice.addEventListener("click", () => {
    let sum = 0;
    diceArr.forEach(die => sum += die.value);
    alert(sum);
});

rollDice.addEventListener("click", () => diceArr.forEach(die => die.roll()));

class Die {
    value: number;
    div: HTMLDivElement
    constructor(value) {
        this.value = value;
        this.div = document.createElement("div");
        this.div.className = "dice";
        this.div.addEventListener("click", () => this.roll());
        this.div.addEventListener("dblclick", () => {
            let index: number = diceArr.indexOf(this);
            diceArr.splice(index, 1);
            diceContainer.removeChild(this.div);
        });
        this.roll();
        diceContainer.appendChild(this.div);
        diceArr.push(this);
    }

    roll() {
        let randomNum: number = Math.floor((Math.random() * 6) + 1);
        this.value = randomNum;
        this.div.innerHTML = this.value.toString();
    }
}