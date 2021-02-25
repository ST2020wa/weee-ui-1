<demo>
圆形图标
</demo>
<template>
  <div>
    <Button theme="round">
      <svg class="icon-button">
        <use xlink:href="#icon-like"></use>
      </svg>
    </Button>
    <Button theme="round-star">
      <svg class="icon-button">
        <use xlink:href="#icon-star"></use>
      </svg>
    </Button>
    <Button theme="round-share">
      <svg class="icon-button">
        <use xlink:href="#icon-Artboard"></use>
      </svg>
    </Button>
    <Button theme="round-pen">
      <svg class="icon-button">
        <use xlink:href="#icon-pen"></use>
      </svg>
    </Button>
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