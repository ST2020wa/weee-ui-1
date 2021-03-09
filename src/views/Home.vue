<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>无意 UI</h1>
        <h2>An AWESOME UI-frame</h2>
        <p class="actions">
          <a href="https://github.com/ST2020wa">GitHub</a>
          <router-link to="/doc">开始探索</router-link>
        </p>
      </div>
    </div>
<div class="features">
  <ul>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <h3>基于 Vue 3</h3>
      <p>基于 Vue 3 Composition API 开发</p>
    </li>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <h3>全面支持 TypeScript</h3>
      <p>使用 Typescript 非严格模式</p>
    </li>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-bulb"></use>
      </svg>
      <h3>轻巧易读</h3>
      <p>外观简洁 功能直观 易于上手</p>
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
$pink: #e75089;
$sandypink: #f6e6de;
$border-radius: 25px;
.topnavAndBanner {
  background: $pink;
  background: linear-gradient(135deg, $pink 0%, rgba(228,152,147,1) 50%, rgba(218,154,188,1) 100%);
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