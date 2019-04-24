<template>
    <div>
        <div class="center">
            <div class="dice">
                <p id="dice-one">{{newNumbers[0]}}</p>
                <p id="dice-two">{{newNumbers[1]}}</p>
                <p id="dice-three">{{newNumbers[2]}}</p>
                <p id="dice-four">{{newNumbers[3]}}</p>
                <p id="dice-five">{{newNumbers[4]}}</p>
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
                        <td id="ones"></td>
                    </tr>
                    <tr>
                        <td>Twos</td>
                        <td id="twos">0</td>
                    </tr>
                    <tr>
                        <td>Threes</td>
                        <td id="threes">0</td>
                    </tr>
                    <tr>
                        <td>Fours</td>
                        <td id="fours">0</td>
                    </tr>
                    <tr>
                        <td>Fives</td>
                        <td id="fives">0</td>
                    </tr>
                    <tr>
                        <td>Sixes</td>
                        <td id="sixes">0</td>
                    </tr>
                    <tr>
                        <td>Upper Total</td>
                        <td id="upper">0</td>
                    </tr>
                    <tr>
                        <td>Bonus</td>
                        <td id="bonus">0</td>
                    </tr>
                    <tr>
                        <td>3 of a kind</td>
                        <td id="three-of-a">0</td>
                    </tr>
                    <tr>
                        <td>4 of a kind</td>
                        <td id="four-of-a">0</td>
                    </tr>
                    <tr>
                        <td>Full House</td>
                        <td id="fullhouse">0</td>
                    </tr>
                    <tr>
                        <td>Small Straight</td>
                        <td id="smallstraight">0</td>
                    </tr>
                    <tr>
                        <td>Large Straight</td>
                        <td id="largestraight">0</td>
                    </tr>
                    <tr>
                        <td>YAHTZEE</td>
                        <td id="yahtzee">0</td>
                    </tr>
                    <tr>
                        <td>Chance</td>
                        <td id="chance">0</td>
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
            isValid: false,
            dices: [1, 4, 6, 3, 2],
            newNumbers: []
        }
    },
    methods: {
        rollDices() {
            this.newNumbers = [];
            var i;
            for(i = 0; i < this.dices.length; i++){
                this.dices[i] = Math.floor(Math.random() * 6) + 1;
                this.newNumbers += this.dices[i];
            }
            return this.newNumbers;
        },
        getResult() {
            var result = this.rollDices();

        }
    },
    computed: {
        returnDiceOne() {
            return this.dices[0];
        },
        returnDiceTwo() {
            return this.dices[1];
        },
        returnDiceThree() {
            return this.dices[2];
        },
        returnDiceFour() {
            return this.dices[3];
        },
        returnDiceFive() {
            return this.dices[4];
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
</style>

