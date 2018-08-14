import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import toast from './modules/toast';
import prompt from './modules/prompt';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    getters,
    mutations,
    actions,
    modules: {
        toast,
        prompt
    }
});

export default store;