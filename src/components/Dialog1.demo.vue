<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <strong>我是加粗的第一行</strong>
        <div>我是正文的第一行</div>
        <div>如果你对Weee-UI有什么建议，可以联系我哦^^</div>
        <div>退出请点击右上角"❌ "或者"取消"～</div>
      </template>
      <template v-slot:title>
        <strong>我是加粗标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {Dialog,Button} from '../lib/index'
// 注意：这里引用的是相对路径，使用时需要改成 from "weee-ui-1"

import {
  ref
} from 'vue'
import {openDialog} from '../lib/openDialog';

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>