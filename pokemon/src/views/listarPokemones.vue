<template>
    <div>
        <h1>Pokemones de Primera Generación</h1>

        <button @click="cargarPokemones">Cargar Pokemones</button>

        <ul>
            <li v-for="pokemon in pokemones" :key="pokemon.name">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "listarPokemones",

        computed: {
            pokemones(){
                return this.$store.getters.getPokemones
            }
        },

        methods: {
            cargarPokemones(){
                this.$store.dispatch("fetchPokemones")
            }
        },

        created(){
            this.cargarPokemones()
        }
    }
</script>