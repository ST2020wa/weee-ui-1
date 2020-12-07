<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <component :is="Switch1Demo" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{Switch1Demo.__sourceCode}}</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled </h2>
      <div class="demo-component">
        <component :is="Switch2Demo" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{Switch2Demo.__sourceCode}}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import {ref} from 'vue'
export default {
  components: {Button},
  setup(){
    const bool = ref(false)
    return {
      bool,
      Switch1Demo,
      Switch2Demo
    }
  }
}
</script>