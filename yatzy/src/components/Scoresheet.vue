<template>
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
</template>

<style>
    table, th, td {
        border: 1px solid black;
    }

    .scoreboard {
        font-size: 1.5rem;
        margin-top: 2.2rem;
        background-color: rgb(250, 235, 168);
    }   

    .scoreboard-column {
        width: 100%;
    }
</style>

