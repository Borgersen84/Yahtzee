import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        dices: [{id: 0, isHeld: false, value: 0},
                {id: 1, isHeld: false, value: 0},
                {id: 2, isHeld: false, value: 0},
                {id: 3, isHeld: false, value: 0},
                {id: 4, isHeld: false, value: 0},
                ],
        combinations: [{id: 0, combinations: 'Ones', isLocked: false, points: 0},
                       {id: 1, combinations: 'Twoes', isLocked: false, points: 0},
                       {id: 2, combinations: 'Threes', isLocked: false, points: 0},
                       {id: 3, combinations: 'Fours', isLocked: false, points: 0},
                       {id: 4, combinations: 'Fives', isLocked: false, points: 0},
                       {id: 5, combinations: 'Sixes', isLocked: false, points: 0},
                       {id: 6, combinations: 'Sum', isLocked: true, points: 0, style: {color: 'black', cursor: 'text' }},
                       {id: 7, combinations: 'Bonus', isLocked: true, points: 0, style: {color: 'red', cursor: 'text' }},
                       {id: 8, combinations: 'One Pair', isLocked: false, points: 0},
                       {id: 9, combinations: 'Two Pair', isLocked: false, points: 0},
                       {id: 10, combinations: 'Trips', isLocked: false, points: 0},
                       {id: 11, combinations: 'Quads', isLocked: false, points: 0},
                       {id: 12, combinations: 'Small Straight', isLocked: false, points: 0},
                       {id: 13, combinations: 'Large Straight', isLocked: false, points: 0},
                       {id: 14, combinations: 'Full House', isLocked: false, points: 0},
                       {id: 15, combinations: 'Chance', isLocked: false, points: 0},
                       {id: 16, combinations: 'Yahtzee', isLocked: false, points: 0},
                       {id: 17, combinations: 'Total', isLocked: true, points: 0, style: {color: 'black', cursor: 'text' }},
                       ],
        columns: ['combinations', 'points'],
        roundOnHold: false,
        diceValues: [],
        rolls: 0,
        newRound: false,
        clickOnPointsIsValid: true,
        pairs: [],
        holdDiceIsValid: true,
        sumOfUpperTable: 0,
        finalScore: 0,
        roundsleft: 15
    },
    getters: {
        getColumns: state => {
            return state.columns;
        },
        getCombinations: state => {
            return state.combinations;
        },
        getDiceValues: state => {
            return state.diceValues;
        },
        getDices: state  => {
            return state.dices;
        },
        getRolls: state => {
            return state.rolls;
        },
        getRounds: state => {
            return state.roundsleft;
        }
    },
    mutations: {
        rollDice: state => {

            state.pairs = [];
            console.log('Final score: ' + state.finalScore);
            state.clickOnPointsIsValid = true;
            state.newRound = true;
            state.holdDiceIsValid = true;

            // Making sure player can't keep rolling dices more than 3 times per round
            if (state.rolls >= 3) {
                alert('Pls choose where to place your points');
                state.roundOnHold = true;
            }

            // Reset values in scoreboard where no option were chosen
            for (let i = 0; i < state.combinations.length; i ++) {
                if (!state.combinations[i].isLocked) {
                    state.combinations[i].points = 0;
                }
            }

            // Pass values of dices to array
            if (!state.roundOnHold) {
                for (let i = 0; i < 5; i++){
                    if (!state.dices[i].isHeld) {
                        state.dices[i].value = Math.floor(Math.random() * 6) + 1;
                        state.diceValues[i] = state.dices[i].value;
                    }
                }
            }
            var sortedDiceValues = [];
            var totalSumOfDices = 0;
            
            // Push values of dices to a new array for sorting making it easier to find valid combinations
            sortedDiceValues.push(... state.diceValues);
            sortedDiceValues.sort();

            // Search for combinations
            state.diceValues.forEach((number) => {
                totalSumOfDices += number;
                // Search for ones
                if (number === 1 && !state.combinations[0].isLocked)  {
                    state.combinations[0].points += number;
                }
                // Search for twoes
                if (number === 2 && !state.combinations[1].isLocked) {
                    state.combinations[1].points += number;
                }
                // Search for threes
                if (number === 3 && !state.combinations[2].isLocked) {
                    state.combinations[2].points += number;
                }
                // Search for fours
                if (number === 4 && !state.combinations[3].isLocked) {
                    state.combinations[3].points += number;
                }
                // Search for fives
                if (number === 5 && !state.combinations[4].isLocked) {
                    state.combinations[4].points += number;
                }
                // Search for sixes
                if (number === 6 && !state.combinations[5].isLocked) {
                    state.combinations[5].points += number;
                }                
            });

            var cons = 0;
            var checkYahtzee = 0;

            for (let i = 0; i < sortedDiceValues.length -1; i++) {
                // Counts how many consecutive values our dices have
                if (sortedDiceValues[i] + 1 === sortedDiceValues[i + 1]) {
                    cons++;
                }
                    // Search for small straight
                    if (!state.combinations[12].isLocked && sortedDiceValues[0] === 1 && cons > 3) {
                        state.combinations[12].points = 15;
                    }
                    // Search for large straight
                    if (!state.combinations[13].isLocked && sortedDiceValues[0] === 2 && cons > 3) {
                        state.combinations[13].points = 20;
                    }
                // Counts how many dices of the same value we have
                if (sortedDiceValues[i] === sortedDiceValues[i + 1]) {
                    checkYahtzee++;
                }
                    // Search for three in a row
                    if (!state.combinations[10].isLocked && checkYahtzee >= 2 && sortedDiceValues[0] === sortedDiceValues[1] && sortedDiceValues[1] === sortedDiceValues[2] ||
                        !state.combinations[10].isLocked && checkYahtzee >= 2 && sortedDiceValues[1] === sortedDiceValues[2] && sortedDiceValues[2] === sortedDiceValues[3] ||
                        !state.combinations[10].isLocked && checkYahtzee >= 2 && sortedDiceValues[2] === sortedDiceValues[3] && sortedDiceValues[3] === sortedDiceValues[4] ) {

                        state.combinations[10].points = sortedDiceValues[2] * 3;
                    }
                    // Search for four in a row
                    if (!state.combinations[11].isLocked && checkYahtzee >= 3 && sortedDiceValues[0] === sortedDiceValues[3] || 
                        !state.combinations[11].isLocked && checkYahtzee >= 3 && sortedDiceValues[1] === sortedDiceValues[4]) {
                        state.combinations[11].points = sortedDiceValues[2] * 4;
                    }
                    // Search for full house
                    if (!state.combinations[14].isLocked && checkYahtzee === 3 && sortedDiceValues[0] === sortedDiceValues[1] && sortedDiceValues[3] === sortedDiceValues[4]) {
                        state.combinations[14].points = totalSumOfDices;
                    }
                    // Search for Yahtzee
                    if (!state.combinations[16].isLocked && checkYahtzee > 3) {
                        state.combinations[16].points = 50;
                    } 
                
                // Search for pairs and place them in an array, but avoiding duplicate pairs
                if (sortedDiceValues[i] === sortedDiceValues[i + 1] && sortedDiceValues[i]) {
                    if (sortedDiceValues[i] + sortedDiceValues[i + 1] != state.pairs[0]) {
                        state.pairs.push(sortedDiceValues[i] + sortedDiceValues[i + 1]);
                    }
                }
                // Sorting pairs to make sure the biggest one gets presented first
                state.pairs.sort((a, b) => a - b);
                if (!state.combinations[8].isLocked && state.pairs.length > 0) {
                    state.combinations[8].points = state.pairs[state.pairs.length - 1];
                }
                // Check to see if we have two pairs
                if (state.pairs.length === 2 && !state.combinations[9].isLocked) {
                    state.combinations[9].points = state.pairs[0] + state.pairs[1];
                }
        
            }
            // Chance combination
            if (!state.combinations[15].isLocked) {
                state.combinations[15].points = totalSumOfDices;
            }
            else {
                state.finalScore += state.combinations[15].points;
            }
           
            state.combinations[6].points = state.sumOfUpperTable;
            state.combinations[17].points = state.finalScore;

            // Check to see if we are eligible for bonus points
            if (state.sumOfUpperTable >= 63) {
                state.combinations[7].points = 50;
            }
            
            // Making sure roll counter never exceeds 3
            if (state.rolls < 3) {
                state.rolls++;
            }
            

        },
        // Choose which dices we wanna hold
        holdDices: (state, index) => {
            if (state.holdDiceIsValid && state.dices[index].value != 0) {
                state.dices[index].isHeld = !state.dices[index].isHeld;
            }
            else {
                alert('Please roll dices');
            }
            
        },
        // Place our points freely on the scoresheet before starting next round
        setPoints: (state, index) => {
            // Prevents to set score of more than one combination per round
            if (state.rolls < 1 && !state.combinations[index].isLocked) {
                alert('Please roll again');
            }
            // Prevents to set score of the same combination more than once
            if (state.combinations[index].isLocked) {
                alert('Not a valid choice')
                return;
            }
            else if (state.newRound && state.clickOnPointsIsValid) {
                state.combinations[index].isLocked = true;
                state.roundsleft--;
                if (state.roundsleft === 0) {
                   alert('Game Over! You scored ' + state.finalScore + ' points');
                }
            }

            state.roundOnHold = false;
            // resets roll count before new round
            state.rolls = 0;
            // Prevents player from placing scores on more than one combination per round
            state.clickOnPointsIsValid = false;
            // Prevents player from re-using same dice values in the next round
            state.holdDiceIsValid = false;
        },
        // Unlocks dices automatically before eaach new round
        unlockDices: state => {
            for (let i = 0; i < state.dices.length; i++) {
                state.dices[i].isHeld = false;
            }
        }
    },
});