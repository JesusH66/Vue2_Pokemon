<template>
  <div class="detail-container" v-if="pokemon">
    <h1 class="title">{{ pokemon.name }}</h1>

    <div class="card">
      <img :src="pokemon.sprites.front_default" class="pokemon-img" />

      <div class="info">
        <p><strong>ID:</strong> {{ pokemon.id }}</p>
        <p><strong>Tipo(s):</strong> 
          <span v-for="t in pokemon.types" :key="t.type.name">
            {{ t.type.name }}
          </span>
        </p>
        <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
        <p><strong>Altura:</strong> {{ pokemon.height }}</p>
        <p><strong>Habilidades:</strong></p>
        <ul>
          <li v-for="a in pokemon.abilities" :key="a.ability.name">
            {{ a.ability.name }}
          </li>
        </ul>
      </div>
    </div>

    <button class="back-btn" @click="$router.push('/pokemons')">Regresar</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "obtenerPokemon",

  data() {
    return {
      pokemon: null
    }
  },

  async created() {
    const name = this.$route.params.name
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    this.pokemon = res.data
  }
}
</script>

<style>
.detail-container {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 36px;
  color: #e60000;
  margin-bottom: 20px;
  text-transform: capitalize;
}

.card {
  background-color: #ffcb05;
  border: 6px solid #2a75bb;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.pokemon-img {
  width: 200px;
  height: 200px;
}

.info {
  text-align: left;
  font-size: 18px;
}

.back-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: #2a75bb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.back-btn:hover {
  background: #1a4f80;
}
</style>
