<template>
    <div>
        <h1>Inicio</h1>
        <p>Pokédex de primera generación.</p>

        <router-link to="/pokemones">
            <button>Ver Pokemones</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'HomeView'
    }
</script>