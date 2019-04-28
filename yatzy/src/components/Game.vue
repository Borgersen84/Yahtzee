<template>
    <div>
        <div class="center">
            <div class="dice">
                <div id="dice-one" @click="dicesHeld[0]=true">{{diceValues[0]}}</div>
                <div id="dice-two">{{diceValues[1]}}</div>
                <div id="dice-three">{{diceValues[2]}}</div>
                <div id="dice-four">{{diceValues[3]}}</div>
                <div id="dice-five">{{diceValues[4]}}</div>
            </div>
            <button 
            id="dice-button"
            @click="rollDices"
            >Roll Dices</button>
            <div class="scoreboard">
                <table class="scoreboard-column">
                    <tr>
                        <th></th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>Ones</td>
                        <td class="scoreboard-sum" @click="freezeOnes()">{{checkForOnes()}}</td>
                    </tr>
                    <tr>
                        <td>Twos</td>
                        <td class="scoreboard-sum" @click="freezeTwoes()">{{checkForTwos()}}</td>
                    </tr>
                    <tr>
                        <td>Threes</td>
                        <td class="scoreboard-sum" @click="freezeThrees()">{{checkForThrees()}}</td>
                    </tr>
                    <tr>
                        <td>Fours</td>
                        <td class="scoreboard-sum" @click="freezeFours()">{{checkForFours()}}</td>
                    </tr>
                    <tr>
                        <td>Fives</td>
                        <td class="scoreboard-sum" @click="freezeFives()">{{checkForFives()}}</td>
                    </tr>
                    <tr>
                        <td>Sixes</td>
                        <td class="scoreboard-sum" @click="freezeSixes()">{{checkForSixes()}}</td>
                    </tr>
                    <tr>
                        <td>Upper Total</td>
                        <td id="upper">{{calculateUpperTotal()}}</td>
                    </tr>
                    <tr>
                        <td>Bonus</td>
                        <td id="bonus">0</td>
                    </tr>
                    <tr>
                        <td>3 of a kind</td>
                        <td class="scoreboard-sum">0</td>
                    </tr>
                    <tr>
                        <td>4 of a kind</td>
                        <td class="scoreboard-sum">0</td>
                    </tr>
                    <tr>
                        <td>Full House</td>
                        <td class="scoreboard-sum">0</td>
                    </tr>
                    <tr>
                        <td>Small Straight</td>
                        <td class="scoreboard-sum">0</td>
                    </tr>
                    <tr>
                        <td>Large Straight</td>
                        <td class="scoreboard-sum">0</td>
                    </tr>
                    <tr>
                        <td>YAHTZEE</td>
                        <td class="scoreboard-sum">0</td>
                    </tr>
                    <tr>
                        <td>Chance</td>
                        <td class="scoreboard-sum">{{sumOfDices()}}</td>
                    </tr>
                    <tr>
                        <td>Yahtzee Bonus</td>
                        <td id="yahtzee-bonus">0</td>
                    </tr>
                    <tr>
                        <td>Sum</td>
                        <td id="sum">0</td>
                    </tr>
                </table>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            dicesHeld: [false, false, false, false, false],
            diceValues: [],
            sum: 0,
            rolls: 0,
            hold: true,
            ones: 0,
            twos: 0,
            threes: 0,
            fours: 0,
            fives: 0,
            sixes: 0,
            upperTotal: 0,
            onesIsValid: true,
            twosIsValid: true,
            threesIsValid: true,
            foursIsValid: true,
            fivesIsValid: true,
            sixesIsValid: true
        }
    },
    methods: {
        startGame() {

        },
        holdDice() {

        },
        sumOfDices() {
            this.sum = 0;
            let i;
            for(i = 0; i < 5; i++){
                this.sum += i;
            }
            return this.sum;

        },
        rollDices() {
            this.diceValues = [];
            let i;
            for(i = 0; i < 5; i++){
                if(this.dicesHeld[i] === false){
                    this.diceValues[i] = Math.floor(Math.random() * 6) + 1;
                }    
            }
            
            console.log(this.onesIsValid);
            this.rolls ++;
            return this.diceValues;
            
        },
        checkForOnes() {
            if(this.onesIsValid) {
                this.ones = 0;
                this.diceValues.forEach((number) => {
                    if(number === 1){
                        this.ones += number;
                    }
                });
            }
            return this.ones;
        },
        checkForTwos() {
            if(this.twosIsValid) {
                this.twos = 0;
                this.diceValues.forEach((number) => {
                if(number === 2){
                    this.twos += number;
                }
                });
            }
            return this.twos;
        },
        checkForThrees() {
            if(this.threesIsValid) {
                this.threes = 0;
                this.diceValues.forEach((number) => {
                if(number === 3){
                    this.threes += number;
                }
                });
            }
            return this.threes;
        },
        checkForFours() {
            if(this.foursIsValid) {
                this.fours = 0;
                this.diceValues.forEach((number) => {
                if(number === 4){
                    this.fours += number;
                }
                });
            }
            return this.fours;
        },
        checkForFives() {
            if(this.fivesIsValid) {
                this.fives = 0;
                this.diceValues.forEach((number) => {
                if(number === 5){
                    this.fives += number;
                }
                });
            }
            return this.fives;
        },
        checkForSixes() {
            if(this.sixesIsValid) {
                this.sixes = 0;
                this.diceValues.forEach((number) => {
                if(number === 6){
                    this.sixes += number;
                }
                });
            }
            return this.sixes;
        },
        calculateUpperTotal() {
           this.upperTotal = this.ones + this.twos + this.threes + this.fours
            + this.fives + this.sixes;
            return this.upperTotal;
        },
        freezeOnes() {
            return this.onesIsValid = false;
        },
        freezeTwoes() {
            return this.twosIsValid = false;
        },
        freezeThrees() {
            return this.threesIsValid = false;
        },
        freezeFours() {
            return this.foursIsValid = false;
        },
        freezeFives() {
            return this.fivesIsValid = false;
        },
        freezeSixes() {
            return this.sixesIsValid = false;
        }
    }
    
}
</script>

<style>
    * {
        font-family: Helvetica, Arial, sans-serif;
        text-align: center;
    }

    .dice {
        display: flex;
        border: 1px solid gray;
        margin: 0 auto;
        margin-bottom: 1rem;
        background-color: rgb(250, 235, 168);
    }

    #dice-one,
    #dice-two,
    #dice-three,
    #dice-four,
    #dice-five {
        height: 7rem;
        width: 7rem;
        padding: 2.2rem;
        margin: 0 auto;
        border: 1px solid gray;
        border-radius: 1rem;  
        font-size: 3rem;
        background-color: white;
    }

    .scoreboard-sum:hover {
        cursor: pointer;
    }
</style>

