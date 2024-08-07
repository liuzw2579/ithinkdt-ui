<markdown>
# Highlight Tag

The `highlight-tag` property allows you to specify tag for highlighted text.
</markdown>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      text: 'iThinkDT UI is a Vue3 component library, it is relatively complete, tunable themes, written in TypeScript, fast.',
      patterns: ['iThinkDT UI', 'Vue3', 'TypeScript', 'fast']
    }
  }
})
</script>

<template>
  <n-highlight
    :text="text"
    highlight-tag="span"
    :patterns="patterns"
    highlight-style="text-decoration: underline"
  />
</template>
