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
  background-image: url("./images/dice_background.png");
}


</style>
