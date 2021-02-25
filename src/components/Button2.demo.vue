<demo>
支持三种字体大小规格
</demo>
<template>
  <div>
    <div>
      <Button size="big">大大大字</Button>
      <Button>普普通通</Button>
      <Button size="small">低调小字</Button>
    </div>
    <br />
    <div>
      <Button size="big" theme="link">大大大字</Button>
      <Button size="normal" theme="link">普普通通</Button>
      <Button size="small" theme="link" >低调小字</Button>
    </div>
    <br />
    <div>
      <Button size="big" theme="text">大大大字</Button>
      <Button theme="text">普普通通</Button>
      <Button size="small" theme="text">低调小字</Button>
    </div>
    </div>
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