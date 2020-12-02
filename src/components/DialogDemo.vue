<template>
  <div>
    Hey I'm DialogDemo!
  </div>
  <h1>Sample 1</h1>
  <div style="position: relative; z-index: 3;">
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false"
            :ok="f1" :cancel="f2"
    >
      <!-- 上面代码是本行代码的简写  <Dialog :visible="x" @update:visible="x = $event"></Dialog>-->
      <template v-slot:content>
        <strong>h111</strong>
        <div>h222</div>
      </template>
      <template v-slot:title>
        <strong>BOLD Title</strong>
      </template>
    </Dialog>
  </div>
<div style="position: relative; z-index: 2;
width: 300px; height: 300px; background: red;
"></div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
export default {
  components: {
    Dialog, Button
  },
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const f1 = ()=>{
      return false
    }
    const f2 = ()=>{
    }
    return {
      x, toggle, f1, f2
    }
  }
}
</script>