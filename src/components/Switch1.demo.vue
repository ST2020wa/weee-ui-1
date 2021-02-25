<demo>
常规模式
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import {Switch} from '../lib/index'
// 注意：这里引用的是相对路径，使用时需要改成 `from "weee-ui-1"`

import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>