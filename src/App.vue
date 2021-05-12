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
    padding-left: 16vw;

    .sidebar {
      width: 16vw;
    }

    .wrapper {
      width: 84vw;
      height: max-content;
      overflow: hidden;
      padding: 60px 40px;

      h1 {
        margin-top: 0px;
        margin-bottom: 35px;
        color: #37474f;
      }
    }
  }
}
</style>
