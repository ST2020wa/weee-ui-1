<demo>
支持显示加载中
</demo>
<template>
  <div>
    <Button loading>加载中</Button>
    <Button>已加载</Button>
  </div>
</template>

<script lang="ts">
import {Button} from '../lib/index'
// 注意：这里引用的是相对路径，使用时需要改成 from "weee-ui-1"

export default {
  components: {
    Button
  }
}
</script>