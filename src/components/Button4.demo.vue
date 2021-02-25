<demo>
支持禁用模式
</demo>
<template>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接</Button>
  <Button theme="text" disabled>禁用文字</Button>
</template>

<script lang="ts">
import {Button} from '../lib/index'
// 注意：这里引用的是相对路径，使用时需要改成 `from "weee-ui-1"`
export default {
  components: {
    Button
  }
}
</script>