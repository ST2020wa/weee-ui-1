<template>
  <div class="layout">
    <Topnav toggle-menu-button-visible class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <!--        当 menuVisible 变化的时候， aside 也要变化-->
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">简介</router-link>
          </li>
          <li>
            <router-link to="/doc/install">如何安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <br />
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible'); // 可以理解为 get
    return {menuVisible};
  }
};
</script>
<style lang="scss" scoped>
$aside-index : 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: linear-gradient(135deg, rgba(231,80,137,1) 0%, rgba(228,152,147,1) 50%, rgba(218,154,188,1) 100%);
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: rgba(246, 230, 222,0.5);
      }
    }
  }
}
main {
  overflow: auto;
}

</style>