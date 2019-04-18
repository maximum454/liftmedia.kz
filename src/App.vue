<template>
  <div id="app">
    <app-header></app-header>
    <app-map></app-map>
    <app-what></app-what>
    <app-benefits></app-benefits>
    <app-number></app-number>
    <app-step></app-step>
    <app-tariff></app-tariff>
    <app-footer></app-footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  #app {
    font-family: 'PT Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img{
    max-width: 100%;
  }
  h1{
    font-size: 78px;
    line-height: 1;
    font-weight: bold;
    margin-bottom: 58px;
  }
  h2{
    font-size: 63px;
    font-weight: bold;
  }
  h3{
    font-size: 37px;
      font-weight: bold;
  }
  p{
    font-size: 14px;
  }
  .text-norm{
    transform: skewX(8deg);
    display: inline-block;
  }
  .bg-light{
    position: relative;
    transform: skewX(-8deg);
    display: inline-block;
    padding: 0 10px;
  }
  .bg-success{
    position: relative;
    transform: skewX(-8deg);
    display: inline-block;
    padding: 0 10px;
  }
</style>
