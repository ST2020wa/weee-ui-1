<demo>
支持四种分类规格
</demo>
<template>
  <div>
    <div>
      <Button level="main">重要级别</Button>
      <Button>普普通通</Button>
      <Button level="safe">安全操作</Button>
      <Button level="danger">危险操作</Button>
    </div>
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