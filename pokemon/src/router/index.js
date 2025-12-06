import Vue from "vue"
import VueRouter from "vue-router"

// Vistas de Pokémon
import HomeView from "../views/Home.vue"
import listarPokemones from "../views/listarPokemones.vue"
import obtenerPokemon from  "../views/obtenerPokemon.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/pokemones',
        name: 'Pokemones',
        component: listarPokemones
    },
    {
        path: '/pokemon/:nombre',
        name: 'detallesPokemon',
        component: obtenerPokemon
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router