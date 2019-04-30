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
        rolls: 0
    },
    getters: {
        getDiceHeldOne: state => {
            return state.dices[0].isHeld;
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