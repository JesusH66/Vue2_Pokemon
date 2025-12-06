import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemones: []
    },
    mutations: {
        setPokemones(state, payload){
            state.pokemones = payload
        }
    },
    actions: {
        async fetchPokemones({commit}){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
            commit('setPokemones', res.data.results)
        }
    },
    getters: {
        getPokemones: state => state.pokemones
    }
})