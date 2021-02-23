<template>
  <button class="weee-switch" @click="toggle" :class="{'weee-checked':value}">
<!--    如果x为true，button class是checked；反之则不是checked-->
    <span></span>
  </button>
</template>
<script lang="ts">
import {ref} from 'vue'
  export default {
  props: {
    value: Boolean
    //外部传的值可以直接获取
  },
    setup(props, context){
      const toggle = () => {
        context.emit('update:value', !props.value)
        // toggle的作用是把当前值取反，通过update:value事件发给外面，告诉外面有用户点击了value
        // this.$emit()
      }
      return {toggle}
    }
  }
</script>

<style lang="scss">
$mid-pink: #e49893;
$h: 22px;
$h2: $h - 4px;
.weee-switch {
  background: lightgrey;
  height: $h;
  width: $h*2;
  border: none;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
  > span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
  &.weee-checked{
    background: $mid-pink;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus{
    outline: none;
  }
  &:active {
    > span {width: $h2 + 4px;}
  }
  &.weee-checked:active {
    > span { width: $h2 + 4px;
      margin-left: -4px;}
  }
}


</style>