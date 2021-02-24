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
<!--    <br/>-->
<!--    <div>-->
<!--      <Button theme="link" level="main">重要级别链接</Button>-->
<!--      <Button theme="link">普普通通链接</Button>-->
<!--      <Button theme="link" level="danger">危险操作链接</Button>-->
<!--    </div>-->
<!--    <br/>-->
<!--    <div>-->
<!--      <Button theme="text" level="main">重要级别文字</Button>-->
<!--      <Button theme="text">普普通通文字</Button>-->
<!--      <Button theme="text" level="danger">危险操作文字</Button>-->
<!--    </div>-->
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