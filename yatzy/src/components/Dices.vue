<template>
    <div class="dice-holder">
        <app-dice></app-dice>        
    </div>
</template>

<script>
import Dice from './Dice.vue';
export default {
    components: {
        appDice: Dice
    }
}
</script>


<style>
    .dice-holder {
        display: flex;
        border: 1px solid rgb(0, 0, 0);
        margin: 0 auto;
        margin-bottom: 1rem;
        background-color: rgb(250, 235, 168);
    }
</style>

