<template>
    <div class="dices-row">
        <div class="dice" @click="holdDice(dice.id)" v-for="(dice, index) in getDices()" :key="index" :class="{'dice-clicked': dice.isHeld}">{{dice.value}}</div>
    </div>
</template>

<script>
export default {
    methods: {
        holdDice(index) {
            this.$store.commit('holdDices', index);
        },
        
        diceValue(index) {
            return this.$store.state.dices[index].value;
        },
        getDices() {
            return this.$store.getters.getDices;
        },
        getDiceValues() {
            return this.$store.getters.getDiceValues;
        }
    }
}
</script>


<style>
    .dices-row {
        display: flex;
    }
    .dice {
        display: flex;
        height: 7rem;
        width: 7rem;
        padding: 2.2rem;
        margin: 0 auto;
        border: 1px solid gray;
        border-radius: 1rem;  
        font-size: 3rem;
        background-color: white;
    }

    .dice-clicked {
        background-color: rgb(255, 94, 201);
    }
</style>

