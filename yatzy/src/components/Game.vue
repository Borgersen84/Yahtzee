<template>
    <div>
        <div class="center">
            <app-dices></app-dices>
            <button 
            id="dice-button"
            @click="rollDices"
            >Roll Dices</button>
            <div class="round-counter">
                <p id="roll-count">Rolls: {{diceRolls}} / 3</p>
                <p id="rounds">Rounds left: {{roundsLeft}}</p>
            </div>
            <app-scoresheet></app-scoresheet>
        </div>  
    </div>
</template>

<script>
import Dices from './Dices.vue';
import Scoresheet from './Scoresheet.vue';
export default {
    components: {
        appDices: Dices,
        appScoresheet: Scoresheet
    },
    methods: {
        rollDices() {
           this.$store.commit('rollDice', 'index');
        }
    },
    computed: {
        diceRolls() {
            return this.$store.getters.getRolls;
        },
        roundsLeft() {
            return this.$store.getters.getRounds;
        }
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

    #dice-button {
        font-size: 2.5rem;
        color: rgb(74, 36, 172);
        background-color: rgb(255, 254, 254);
        border: 0.1rem solid black;
    }

    #dice-button:hover {
        cursor: pointer;
    }

    .round-counter {
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
    }
    #roll-count {
        margin-right: 2rem;
    }
    #rounds {
        margin-left: 2rem;
    }
</style>

