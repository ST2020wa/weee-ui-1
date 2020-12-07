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
  <ul>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <h3>Based on Vue 3</h3>
      <p>Proudly use Vue 3 Composition API</p>
    </li>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <h3>Based on TypeScript</h3>
      <p>Usage of Typescript (non-restrict mode)</p>
    </li>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-bulb"></use>
      </svg>
      <h3>Easy to read</h3>
      <p>Minimalism and reader-friendly code</p>
    </li>
  </ul>
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
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
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