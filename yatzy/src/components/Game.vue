<template>
    <div>
        <div class="center">
            <button id="dice-button">Roll Dices</button>
            <div class="scoreboard">
                <table class="scoreboard-column">
                    <tr>
                        <th></th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>Ones</td>
                        <td id="ones">0</td>
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
