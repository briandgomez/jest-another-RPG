function Potion(name) {
    this.types = ['strengths','agility','health'];
    //Checks to see if name exists. If name does NOT exist then select a random option from types array
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        //Selects a random number between 30 and 40 NOT including 40
        this.value = Math.floor(Math.random() * 10 + 30);
    }
    else {
        //Selects a random number between 7 and 12 NOT including 12
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;