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
        newRound: 0
    },
    getters: {
        getColumns: state => {
            return state.columns;
        },
        getCombinations: state => {
            return state.combinations;
        }
    },
    mutations: {
        rollDice: state => {
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
            let sortedDiceValues = [];
            sortedDiceValues.push(... state.diceValues);
            sortedDiceValues.sort();
            console.log(sortedDiceValues);
            console.log(state.diceValues);
            
            state.diceValues.forEach((number) => {
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

            state.rolls++;


            
            
        },
        holdDices: (state, index) => {
            state.dices[index].isHeld = !state.dices[index].isHeld;
        },
        setPoints: (state, index) => {
            state.combinations[index].isLocked = true;
            state.rolls = 0;
            state.roundOnHold = false;
        }
    },
    actions: {

    }
});