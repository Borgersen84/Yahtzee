import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        dices: [{id: 0, isHeld: false, value: 0},
                {id: 1, isHeld: false, value: 0},
                {id: 2, isHeld: false, value: 0},
                {id: 3, isHeld: false, value: 0},
                {id: 4, isHeld: false, value: 0},],
        rolls: 0,
        combinations: [{id: 1, combinations: 'Ones', isLocked: false, points: 0},
                       {id: 2, combinations: 'Twoes', isLocked: false, points: 0},
                       {id: 3, combinations: 'Threes', isLocked: false, points: 0},
                       {id: 4, combinations: 'Fours', isLocked: false, points: 0},
                       {id: 5, combinations: 'Fives', isLocked: false, points: 0},
                       {id: 6, combinations: 'Sixes', isLocked: false, points: 0},
                       {id: 7, combinations: 'Sum', isLocked: false, points: 0},
                       {id: 8, combinations: 'Bonus', isLocked: false, points: 0},
                       {id: 9, combinations: 'One Pair', isLocked: false, points: 0},
                       {id: 10, combinations: 'Two Pair', isLocked: false, points: 0},
                       {id: 11, combinations: 'Trips', isLocked: false, points: 0},
                       {id: 12, combinations: 'Quads', isLocked: false, points: 0},
                       {id: 13, combinations: 'Small Straight', isLocked: false, points: 0},
                       {id: 14, combinations: 'Large Straight', isLocked: false, points: 0},
                       {id: 15, combinations: 'Full House', isLocked: false, points: 0},
                       {id: 16, combinations: 'Chance', isLocked: false, points: 0},
                       {id: 17, combinations: 'Yahtzee', isLocked: false, points: 0},
                       {id: 18, combinations: 'Total', isLocked: false, points: 0},
                       ],
        columns: ['combinations', 'points']
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
            for (let i = 0; i < 5; i++){
                if (!state.dices[i].isHeld) {
                    state.dices[i].value = Math.floor(Math.random() * 6) + 1;
                    console.log(state.dices[i].value);
                }
            }
            
        },
        holdDices: (state, index) => {
            state.dices[index].isHeld = true;
        }
    },
    actions: {

    }
});