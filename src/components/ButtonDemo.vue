<template>
  <div>
    Hey I'm ButtonDemo!
  </div>
  <h1>
    Example 1
  </h1>
  <div>
    <Button @click="onClick"
            @focus="onClick"
            @mouseover="onClick"
    >
      Halo!
    </Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup(){
    const onClick = ()=> {
      console.log('Hey see if you could see me')
    }
    return {onClick}
  }
}
</script>