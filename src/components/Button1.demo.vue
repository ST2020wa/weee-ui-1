<demo>
常规模式
</demo>
<template>
  <div>
    <Button>常规</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
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