<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
    rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Volkhov:wght@400;700&display=swap" rel="stylesheet">
   <router-view/>
</template>

<script>

import "../output.css"

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
