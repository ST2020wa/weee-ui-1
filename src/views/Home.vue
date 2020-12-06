<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Weee-UI</h1>
        <h2>An AWESOME UI-frame</h2>
        <p class="actions">
          <a href="https://github.com/ST2020wa">GitHub</a>
          <router-link to="/doc">Get Started</router-link>
        </p>
      </div>
    </div>
<div class="features">
  <svg class="icon">
    <use xlink:href="#icon-vue"></use>
  </svg>
  <svg class="icon">
    <use xlink:href="#icon-ts"></use>
  </svg>
  <svg class="icon">
    <use xlink:href="#icon-bulb"></use>
  </svg>
</div>
  </div>
</template>
<script lang="ts">
 import Topnav from '../components/Topnav.vue'
  export default {
    components: {Topnav}
  }
</script>
<style lang="scss" scoped>
$sandypink: #f6e6de;
$border-radius: 25px;
.topnavAndBanner {
  background: rgb(231,80,137);
  background: linear-gradient(135deg, rgba(231,80,137,1) 0%, rgba(228,152,147,1) 50%, rgba(218,154,188,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  >svg {
    width: 48px;
    height: 48px;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $sandypink;
      border-radius: $border-radius;
      display: inline-block;
      padding: 8px 24px;
      border-bottom: 3px solid darkred;
      cursor: cell;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>