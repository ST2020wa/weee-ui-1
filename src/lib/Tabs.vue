<template>
  <div class="weee-tabs">
    <div class="weee-tabs-nav" ref="container">
      <div class="weee-tabs-nav-item"
           v-for="(t,index) in titles"
           :ref="el=> { if(t===selected) selectedItem = el }"
           @click="select(t)"
           :class="{selected: t=== selected}"
           :key="index">{{t}}</div>
      <div class="weee-tabs-nav-indicator"
      ref="indicator"></div>
    </div>
    <div class="weee-tabs-content">
      <component class="weee-tabs-content-item"
                 :class="{selected: c.props.title === selected}"
                 v-for="c in defaults"
                 :is="c" />
    </div>
  </div>
</template>
<script lang="ts">

import Tab from './Tab.vue';
import {computed, ref, watchEffect, onMounted} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    onMounted(() => {
      watchEffect(() => {
        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left: left1} = container.value.getBoundingClientRect();
        const {left: left2} = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
      },{flush: 'post'});
    });

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab～');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container
    };
  }
};
</script>

<style lang="scss">
$pink: #e75089;
$color: #333;
$border-color: #d9d9d9;
.weee-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $pink;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $pink;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>