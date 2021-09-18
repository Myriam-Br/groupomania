import Vue from 'vue';
import Vuex from 'vuex';
import publications from './modules/publications'

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        publications
    }
})