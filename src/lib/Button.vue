<template>
  <button class="weee-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="weee-loadingIndicator"></span>
      <slot />
    </button>
</template>
<script lang="ts">
  import { computed } from 'vue';
  export default {
    props: {
      theme: {type: String, default:'button'},
      round: {type: String, default:'normal'},
      size: {type: String, default: 'normal'},
      level: {type: String, default: 'normal'},
      disabled: {type: Boolean, default: false},
      loading: {type: Boolean, default: false}
    },
  setup(props){
    const {theme,size,level} = props
    const classes = computed(()=>{
      return {
        [`weee-theme-${theme}`]: theme,
        [`weee-size-${size}`]: size,
        [`weee-size-${level}`]: level
      };
    });
      return {classes}
    }
  }
</script>
<style lang="scss">
$h: 32px;
$radius: 4px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$dark-blue: #303ca6;
$green: #3fa33f;
$p-pink: #e1004f;
$pink: #e75089;
$mid-pink: #e49893;
$sandypink: #f6e6de;
$orange: #f9970e;
.weee-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & {
    margin-left: 8px;
  }
  &:hover {
    color: $pink;
    border-color: $pink;
  }
  &:focus {
    color: white;
    background: $pink;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.weee-theme-round {
    border: none;
    border-radius: 40px;
    height: 1.5 * $h;
    width: 1.5 * $h;
    background: $p-pink;
    &:hover {
      background: lighten($p-pink, 20%);
    }
    &:focus {
      background: $sandypink;
    }
  }
  &.weee-theme-round-star {
    border: none;
    border-radius: 40px;
    height: 1.5 * $h;
    width: 1.5 * $h;
    background: $orange;
    &:hover {
      background: lighten($orange, 20%);
    }
    &:focus {
      background: $sandypink;
    }
  }
  &.weee-theme-round-share {
    border: none;
    border-radius: 40px;
    height: 1.5 * $h;
    width: 1.5 * $h;
    background: $dark-blue;
    &:hover {
      background: lighten($dark-blue, 20%);
    }
    &:focus {
      background: $sandypink;
    }
  }
  &.weee-theme-round-pen {
    border: none;
    border-radius: 40px;
    height: 1.5 * $h;
    width: 1.5 * $h;
    background: $green;
    &:hover {
      background: lighten($green, 20%);
    }
    &:focus {
      background: $sandypink;
    }
  }
  &.weee-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover{
      color: lighten($blue, 20%);
    }
    &:focus{
      color: white;
      background: $blue;
    }
  }
  &.weee-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover{
      color: lighten(darkgrey, 20%);
    }
    &:focus {
      color: black;
      background: $sandypink;
    }
  }
  &.weee-size-big{
      font-size: 28px;
      height: 52px;
      padding: 0 20px
    }
  &.weee-size-small{
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
  &.weee-level-main{
    background: red;
  }

  > .weee-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 20px;
    animation: weee-spin 1s infinite linear;
  }
}
@keyframes weee-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>
