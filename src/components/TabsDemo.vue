<template>
  <div>
    Hey I'm TabsDemo!
  </div>
  <h1>Sample 1</h1>
  <Tabs>
    <Tab title="Nav1"> Content 1 </Tab>
    <Tab title="Nav2"> Content 2 </Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  components: {
    Tabs,
    Tab
  }
}
</script>