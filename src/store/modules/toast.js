const toastModule = {
    state: {
        totastOptions: {}
    },
    mutations: {
        SET_TOASTOPTIONS(state, options) {
            console.log('set state');
            state.totastOptions = options;
        }
    },
    actions: {
        setTotastOptions({ commit }, options) {
            console.log('action state');
            commit('SET_TOASTOPTIONS', options);
        }
    },
    getters: {
        getTotastOptions: (state) => {
            console.log('get state');
            return state.totastOptions;
        }
    }
};

export default toastModule;