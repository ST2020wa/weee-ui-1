<demo>
一行代码打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {
  ref,
  h
} from 'vue'
import {
  openDialog
} from '../lib/openDialog'
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '我是标题'),
        content: '你好，我是ST！第二种方法是仅调用一个 API 打开 Dialog 哦～',
        ok() {
          console.log('ok')
          return false
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>