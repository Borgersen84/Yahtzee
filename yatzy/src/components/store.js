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
        rolls: 0,
        combinations: [{id: 0, combinations: 'Ones', isLocked: false, points: 0},
                       {id: 1, combinations: 'Twoes', isLocked: false, points: 0},
                       {id: 2, combinations: 'Threes', isLocked: false, points: 0},
                       {id: 3, combinations: 'Fours', isLocked: false, points: 0},
                       {id: 4, combinations: 'Fives', isLocked: false, points: 0},
                       {id: 5, combinations: 'Sixes', isLocked: false, points: 0},
                       {id: 6, combinations: 'Sum', isLocked: false, points: 0},
                       {id: 7, combinations: 'Bonus', isLocked: false, points: 0},
                       {id: 8, combinations: 'One Pair', isLocked: false, points: 0},
                       {id: 9, combinations: 'Two Pair', isLocked: false, points: 0},
                       {id: 10, combinations: 'Trips', isLocked: false, points: 0},
                       {id: 11, combinations: 'Quads', isLocked: false, points: 0},
                       {id: 12, combinations: 'Small Straight', isLocked: false, points: 0},
                       {id: 13, combinations: 'Large Straight', isLocked: false, points: 0},
                       {id: 14, combinations: 'Full House', isLocked: false, points: 0},
                       {id: 15, combinations: 'Chance', isLocked: false, points: 0},
                       {id: 16, combinations: 'Yahtzee', isLocked: false, points: 0},
                       {id: 17, combinations: 'Total', isLocked: false, points: 0},
                       ],
        columns: ['combinations', 'points'],
        roundOnHold: false,
        diceValues: [],
        rolls: 0,
        newRound: false,
        checkPairOne: 0,
        checkPairTwo: 0,
        clickOnPointsIsValid: true,
        pairs: []
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
        }
    },
    mutations: {
        rollDice: state => {
            
            state.pairs = [];
            console.log('round on hold = ' + state.roundOnHold);
            console.log('num of rolls: ' + state.rolls);
            state.clickOnPointsIsValid = true;
            state.newRound = true;

            if (state.rolls >= 3) {
                alert('Pls choose where to place your points');
                state.roundOnHold = true;
            }
            for (let i = 0; i < state.combinations.length; i ++) {
                if (!state.combinations[i].isLocked) {
                    state.combinations[i].points = 0;
                }
            }

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
        
            sortedDiceValues.push(... state.diceValues);
            sortedDiceValues.sort();
            console.log('Sorted dices: ' + sortedDiceValues);
            console.log(state.diceValues);

            state.diceValues.forEach((number) => {
                totalSumOfDices += number;
                if (number === 1 && !state.combinations[0].isLocked)  {
                    state.combinations[0].points += number;
                }
                if (number === 2 && !state.combinations[1].isLocked) {
                    state.combinations[1].points += number;
                }
                if (number === 3 && !state.combinations[2].isLocked) {
                    state.combinations[2].points += number;
                }
                if (number === 4 && !state.combinations[3].isLocked) {
                    state.combinations[3].points += number;
                }
                if (number === 5 && !state.combinations[4].isLocked) {
                    state.combinations[4].points += number;
                }
                if (number === 6 && !state.combinations[5].isLocked) {
                    state.combinations[5].points += number;
                }                
            });

            var cons = 0;
            var checkYahtzee = 0;

            for (let i = 0; i < sortedDiceValues.length -1; i++) {
                if (sortedDiceValues[i] + 1 === sortedDiceValues[i + 1]) {
                    cons++;
                }
                    if (sortedDiceValues[0] === 1 && cons > 3) {
                        state.combinations[12].points = 15;
                    }
                    if (sortedDiceValues[0] === 2 && cons > 3) {
                        state.combinations[13].points = 20;
                    }
                if (sortedDiceValues[i] === sortedDiceValues[i + 1]) {
                    checkYahtzee++;
                }
                    if (checkYahtzee >= 2 && sortedDiceValues[0] === sortedDiceValues[1] && sortedDiceValues[1] === sortedDiceValues[2] ||
                        checkYahtzee >= 2 && sortedDiceValues[1] === sortedDiceValues[2] && sortedDiceValues[2] === sortedDiceValues[3] ||
                        checkYahtzee >= 2 && sortedDiceValues[2] === sortedDiceValues[3] && sortedDiceValues[3] === sortedDiceValues[4] ) {

                        state.combinations[10].points = sortedDiceValues[2] * 3;
                    }
                    if (checkYahtzee >= 3 && sortedDiceValues[0] === sortedDiceValues[3] || checkYahtzee >= 3 && sortedDiceValues[1] === sortedDiceValues[4]) {
                        state.combinations[11].points = sortedDiceValues[2] * 4;
                    }
                    if (checkYahtzee === 3 && sortedDiceValues[0] === sortedDiceValues[1] && sortedDiceValues[3] === sortedDiceValues[4]) {
                        state.combinations[14].points = totalSumOfDices;
                    }
                    if (checkYahtzee > 3) {
                        state.combinations[16].points = 50;
                    } 
                
                if (sortedDiceValues[i] === sortedDiceValues[i + 1] && sortedDiceValues[i]) {
                    if (sortedDiceValues[i] + sortedDiceValues[i + 1] != state.pairs[0]) {
                        state.pairs.push(sortedDiceValues[i] + sortedDiceValues[i + 1]);
                    }
                }
                state.pairs.sort((a, b) => a - b);
                state.combinations[8].points = state.pairs[state.pairs.length - 1];

                if (state.pairs.length === 2) {
                    state.combinations[9].points = state.pairs[0] + state.pairs[1];
                }
                console.log('One first = ' + state.checkPairOne);
                console.log('Pairs array: ' + state.pairs);
            }

            if (!state.combinations[15].isLocked) {
                state.combinations[15].points = totalSumOfDices;
            }

            var sumOfUpperTable = state.combinations[0].points + state.combinations[1].points + state.combinations[2].points 
                                 + state.combinations[3].points + state.combinations[4].points + state.combinations[5].points;

            if (state.combinations[0].isLocked && state.combinations[1].isLocked && state.combinations[2].isLocked
                    && state.combinations[3].isLocked && state.combinations[4].isLocked && state.combinations[5].isLocked) {
                        state.combinations[6].points = sumOfUpperTable;
                    }

            if (sumOfUpperTable >= 63) {
                state.combinations[7].points = 50;
            }
            
            state.rolls++;

        },
        holdDices: (state, index) => {
            state.dices[index].isHeld = !state.dices[index].isHeld;
        },
        setPoints: (state, index) => {
            if (state.newRound && state.clickOnPointsIsValid) {
                state.combinations[index].isLocked = true;
            }
            state.roundOnHold = false;
            state.rolls = 0;
            state.clickOnPointsIsValid = false;
            state.pairs = [];
            
        },
        unlockDices: state => {
            for (let i = 0; i < state.dices.length; i++) {
                state.dices[i].isHeld = false;
            }
        }
    },
});