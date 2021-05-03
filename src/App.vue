<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0 0;
  padding: 0 0;
  color: #263238;

  .container {
    height: 100vh;
    display: flex;
    padding-left: 250px;

    .wrapper {
      padding: 35px 50px;
      height: max-content;

      h1 {
        margin-top: 0px;
        margin-bottom: 35px;
        color: #37474f;
      }
    }
  }
}
</style>
