import axios from "axios";

const state = {
    publications: []
};

const getters = {
    //we returning props from state (publications)
    allPublications: state => state.publications
};

const actions = {
    async fetchPublication({ commit }) {
        const response = await axios.get(
            'http://localhost:8080/api/publication'
        );

        commit('setPublications', response.data);
    }
};

const mutations = {
    //use api data 
    setPublications: (state, publications) =>( state.publications = publications)
};






export default {
    state,
    getters,
    actions,
    mutations
}