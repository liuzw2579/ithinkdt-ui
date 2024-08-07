<markdown>
# Case sensitive

By default, highlighting is case-sensitive, which you can turn on using the `case-sensitive` property.
</markdown>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      text: 'iThinkDT UI is written in full TypeScript and works seamlessly with your TypeScript projects',
      patterns: ['iThinkDT UI', 'typeScript']
    }
  }
})
</script>

<template>
  <n-highlight :text="text" :patterns="patterns" :case-sensitive="true" />
</template>
