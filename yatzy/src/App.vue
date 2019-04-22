<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  :root {
	background-color: rgb(208, 235, 243);
	font-size: 62.5%;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  max-width: 80rem;
  padding: 2rem;
}

#play-button {
  font-size: 5rem;
  color: rgb(42, 23, 124);
  border: 0.1rem solid black;
  background-color: aliceblue;
}

#play-button:hover {
  cursor: pointer;
}

#dice-button {
  font-size: 2.5rem;
  color: rgb(74, 36, 172);
  background-color: rgb(255, 254, 254);
  border: 0.1rem solid black;
}

#dice-button:hover {
  cursor: pointer;
}

table, th, td {
  border: 1px solid black;
}

.sidesheet {
  font-size: 1.5rem;
  margin-top: 2.2rem;
  background-color: rgb(250, 235, 168);
}

.shit {
  width: 100%;
}
</style>
