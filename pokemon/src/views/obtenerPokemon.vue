<template>
  <div class="contenedor-pokedex" v-if="pokemon">
    <div class="panel">
      <h1 class="titulo">{{ pokemon.name }}</h1>

      <div class="card">
        <img :src="pokemon.sprites.front_default" class="imagen-pokemon" />

        <div class="informe">
          <p><strong>ID:</strong> #{{ pokemon.id }}</p>

          <p><strong>Tipo(s):</strong></p>
          <div class="tipos">
            <span 
              v-for="t in pokemon.types" 
              :key="t.type.name"
              class="chip"
            >
              {{ t.type.name }}
            </span>
          </div>

          <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
          <p><strong>Altura:</strong> {{ pokemon.height }}</p>

          <p><strong>Habilidades:</strong></p>
          <ul class="lista">
            <li v-for="a in pokemon.abilities" :key="a.ability.name">
              {{ a.ability.name }}
            </li>
          </ul>
        </div>
      </div>

      <button class="back-btn" @click="$router.push('/pokemones')">
        ⬅ Regresar
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ObtenerPokemon",

  data() {
    return {
      pokemon: null
    }
  },

  async created() {
    const nombre = this.$route.params.nombre
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    this.pokemon = res.data
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
  max-width: 900px;
  margin: auto;
  background: #ffcb05;
  border: 8px solid #2a75bb;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 0 25px rgba(0,0,0,0.3);
  text-align: center;
}

.titulo {
  font-size: 40px;
  font-weight: bold;
  color: #2a75bb;
  text-transform: capitalize;
  margin-bottom: 30px;
}

.card {
  background: #f7d849;
  border: 6px solid #2a75bb;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 0 #b99300;
}

.imagen-pokemon {
  width: 220px;
  height: 220px;
  image-rendering: pixelated;
}

.informe {
  text-align: left;
  font-size: 20px;
}

.tipos {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.chip {
  background: #2a75bb;
  color: white;
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 14px;
  text-transform: capitalize;
  box-shadow: 0 4px 0 #1a4f80;
}

.lista {
  margin-top: 5px;
  padding-left: 20px;
}

.back-btn {
  margin-top: 25px;
  padding: 12px 28px;
  background: #2a75bb;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 6px 0 #1a4f80;
  transition: 0.2s;
}

.back-btn:hover {
  background: #1a4f80;
  transform: translateY(2px);
}
</style>
