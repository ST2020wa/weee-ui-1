<template>
  <div>
    Hey I'm DialogDemo!
  </div>
  <h1>Sample 1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
          :ok="f1" :cancel="f2"
  ></Dialog>
  <!-- 上面代码是本行代码的简写  <Dialog :visible="x" @update:visible="x = $event"></Dialog>-->

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