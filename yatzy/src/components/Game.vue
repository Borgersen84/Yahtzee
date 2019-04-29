<template>
    <div>
        <div class="center">
            <div class="dice">
                <div id="dice-one" @click="holdDice(0)">{{this.$store.state.dices[0].value}}</div>
                <div id="dice-two" @click="holdDice(1)">{{this.$store.state.dices[1].value}}</div>
                <div id="dice-three" @click="holdDice(2)">{{this.$store.state.dices[2].value}}</div>
                <div id="dice-four" @click="holdDice(3)">{{this.$store.state.dices[3].value}}</div>
                <div id="dice-five" @click="holdDice(4)">{{this.$store.state.dices[4].value}}</div>
            </div>
            <button 
            id="dice-button"
            @click="startGame"
            >Roll Dices</button>
            <div class="scoreboard">
                <table class="scoreboard-column">
                    <tr>
                        <th></th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>Ones</td>
                        <td class="scoreboard-sum"></td>
                    </tr>
                    <tr>
                        <td>Twos</td>
                        <td class="scoreboard-sum"></td>
                    </tr>
                    <tr>
                        <td>Threes</td>
                        <td class="scoreboard-sum"></td>
                    </tr>
                    <tr>
                        <td>Fours</td>
                        <td class="scoreboard-sum"></td>
                    </tr>
                    <tr>
                        <td>Fives</td>
                        <td class="scoreboard-sum"></td>
                    </tr>
                    <tr>
                        <td>Sixes</td>
                        <td class="scoreboard-sum"></td>
                    </tr>
                    <tr>
                        <td>Upper Total</td>
                        <td id="upper"></td>
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
                        <td class="scoreboard-sum"></td>
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
    methods: {
        startGame() {
            this.rollDices();
        },
        holdDice(index) {
            this.$store.commit('holdDices', index);
        },
        rollDices() {
           this.$store.commit('rollDice', 'index');
        },
        
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

