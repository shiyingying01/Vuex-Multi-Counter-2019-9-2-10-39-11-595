import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        count: [],
    },
    getters: {
        getCounterByIndex(state) {
            return function (index) {
                return state.count[index - 1];
            };

        },
        getSum(state) {
            let sum = 0;
            for (let i of state.count) {
                sum += i;
            }
            return sum;
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        updateCounterByIndex(state, param) {
            let oldCounter = state.count;
            oldCounter[param.index-1] += param.value;
            state.count = [];
            for (let i = 0; i < oldCounter.length; i++) {
                state.count.push(oldCounter[i]);
            };
        },
        changeInput(state, inputNum) {
            while (inputNum > state.count.length) {
                state.count.push(state.count.length + 1);
            }
            while (inputNum < state.count.length) {
                state.count.pop();
            }
        }
    }

});

export default store;

