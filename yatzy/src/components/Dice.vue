<template>
    <div class="dices-row">
        <div class="dice" @click="holdDice(0)">{{diceValue(0)}}</div>
        <div class="dice" @click="holdDice(1)">{{diceValue(1)}}</div>
        <div class="dice" @click="holdDice(2)">{{diceValue(2)}}</div>
        <div class="dice" @click="holdDice(3)">{{diceValue(3)}}</div>
        <div class="dice" @click="holdDice(4)">{{diceValue(4)}}</div>
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
        height: 9rem;
        width: 9rem;
        padding: 2.2rem;
        margin: 0 auto;
        border: 1px solid gray;
        border-radius: 1rem;  
        font-size: 3rem;
        background-color: white;
    }

    .dice-clicked {
        color: rgb(226, 133, 133);
    }
</style>

