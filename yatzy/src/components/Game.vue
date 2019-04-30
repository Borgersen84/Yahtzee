<template>
    <div>
        <div class="center">
            <app-dices></app-dices>
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
import Dices from './Dices.vue';
export default {
    components: {
        appDices: Dices
    },
    methods: {
        rollDices() {
           this.$store.commit('rollDice', 'index');
        }
    },
    computed: {
        
    }
    
}
</script>

<style>
    * {
        font-family: Helvetica, Arial, sans-serif;
        text-align: center;
    }

    .scoreboard-sum:hover {
        cursor: pointer;
    }

    .dice-holder:hover {
        cursor: pointer;
    }
</style>

