<template>
    <div class="contenedor-home">
        <div class="pokedex">
            <h1 class="titulo">Pokédex</h1>
            <p class="subtitulo">Primera Generación</p>

            <router-link to="/pokemones">
                <button class="pokedex-btn">Ver Pokemones</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeView'
    }
</script>

<style scoped>
.contenedor-home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e60000;
  padding: 20px;
}

.pokedex {
  background: #ffcb05;
  border: 8px solid #2a75bb;
  border-radius: 20px;
  padding: 40px;
  width: 400px;
  text-align: center;
  box-shadow: 0 0 25px rgba(0,0,0,0.3);
}

.titulo {
  font-size: 40px;
  font-weight: bold;
  color: #2a75bb;
}

.subtitulo {
  margin-top: -10px;
  font-size: 18px;
  color: #1a1a1a;
  margin-bottom: 30px;
}

.pokedex-btn {
  background: #2a75bb;
  color: white;
  font-size: 18px;
  padding: 12px 25px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;
  width: 80%;
  font-weight: bold;
  box-shadow: 0 6px 0 #1a4f80;
}

.pokedex-btn:hover {
  background: #1a4f80;
  box-shadow: 0 4px 0 #0f2e4f;
  transform: translateY(2px);
}
</style>