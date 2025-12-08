<template>
  <div class="contenedor-pokedex">
    <div class="panel">
      <h1 class="titulo">Pokémon - Primera Generación</h1>

      <div class="pokemon-grid">
        <div
          class="pokemon-card"
          v-for="pokemon in pokemones"
          :key="pokemon.name"
          @click="verPokemon(pokemon)"
        >
          <img :src="obtenerPokemonImagen(pokemon.url)" class="imagen-pokemon">
          <h3 class="pokemon-nombre">{{ pokemon.name }}</h3>
        </div>
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

<style scoped>
.contenedor-pokedex {
  background: #e60000;
  min-height: 100vh;
  padding: 40px 20px;
}

.panel {
  max-width: 1000px;
  margin: auto;
  background: #ffcb05;
  border: 8px solid #2a75bb;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 0 25px rgba(0,0,0,0.3);
  text-align: center;
}

.titulo {
  font-size: 38px;
  font-weight: bold;
  color: #2a75bb;
  margin-bottom: 30px;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 25px;
}

.pokemon-card {
  background: #f7d849;
  border: 5px solid #2a75bb;
  border-radius: 20px;
  padding: 15px;
  cursor: pointer;
  transition: 0.25s ease;
  box-shadow: 0 6px 0 #b99300;
}

.pokemon-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 0 #a38200;
}

.imagen-pokemon {
  width: 130px;
  height: 130px;
  image-rendering: pixelated; 
}

.pokemon-nombre {
  text-transform: capitalize;
  color: #2a75bb;
  font-weight: bold;
  margin-top: 10px;
  font-size: 18px;
}
</style>