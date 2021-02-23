<demo>
支持三种字体大小规格
</demo>
<template>
  <div>
    <div>
      <Button size="big">越大越好</Button>
      <Button>普普通通</Button>
      <Button size="small">小而精悍</Button>
    </div>
    <br>
    <div>
      <Button size="big" theme="link" >越大越好</Button>
      <Button theme="link">普普通通</Button>
      <Button size="small" theme="link" >小而精悍</Button>
    </div>
    <br>
    <div>
      <Button size="big" theme="text">越大越好</Button>
      <Button theme="text">普普通通</Button>
      <Button size="small" theme="text">小而精悍</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>