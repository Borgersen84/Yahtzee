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
@media screen and (min-width: 320px) and (max-width: 480px) {
	:root {
		font-size: 50%;
		background-color: rgb(80, 240, 106);
	}
 }

 @media screen and (min-width: 700px) and (max-width: 768px) {
	:root {
		font-size: 95%;
		background-color: rgb(221, 117, 48);
	}
 }

@media screen and (min-width: 769px) and (max-width: 1024px) {
	:root {
		font-size: 140%;
		background-color: rgb(238, 218, 36);
	}
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
