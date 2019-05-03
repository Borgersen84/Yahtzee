<template>
    <div>
        <div>
            <img src="src\images\dice_background.png" height="300" width="300">
        </div>
        <div class="center">
        <router-link to="/game">
            <button id="play-button">Click To Play</button>
        </router-link>
        </div>  
    </div>
</template>

<style>
    #play-button {
        font-size: 5rem;
        color: rgb(42, 23, 124);
        border: 0.1rem solid black;
        background-color: aliceblue;
    }

    #play-button:hover {
         cursor: pointer;
    }
</style>

