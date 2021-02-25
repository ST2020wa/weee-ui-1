<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航栏1">内容1</Tab>
    <Tab title="导航栏2">内容2</Tab>
    <Tab title="导航栏3">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs,Tab} from '../lib/index'
// 注意：这里引用的是相对路径，使用时需要改成 from "weee-ui-1"

import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('导航栏1')
    return {
      x
    }
  }
}
</script>