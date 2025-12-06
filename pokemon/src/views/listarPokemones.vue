<template>
    <div class="contenedor">
        <h1 class="titulo">Pokemones de Primera Generación</h1>

        <div class="pokemon-grid">
            <div
                class="pokemon-card"
                v-for="pokemon in pokemones"
                :key="pokemon.name"
                @click="verPokemon(pokemon)"
            >
                <img src="obtenerPokemonImagen(pokemon.url)" class="imagen-pokemon">
                <h3>{{ pokemon.name }}</h3>
            </div>
        </div>
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
            verPokemon(pokemon){
                this.$router.push(`/pokemon/${pokemon.name}`)
            },
            obtenerPokemonImagen(url){
                const id = url.split('/').filter(Boolean).pop()
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            }
        },

        created(){
            this.$store.dispatch("fetchPokemones")
        }
    }
</script>

<style>

.contenedor {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.titulo {
  font-size: 32px;
  color: #e60000;
  font-weight: bold;
  margin-bottom: 20px;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}

.pokemon-card {
  background: #ffcb05;
  border: 4px solid #2a75bb;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  transition: transform .2s;
}

.pokemon-card:hover {
  transform: scale(1.05);
}

.imagen-pokemon {
  width: 120px;
  height: 120px;
}
</style>