<markdown>
# Create debug
</markdown>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const options = ref<string[]>([])

    return {
      options,
      onCreate(index: number) {
        options.value.splice(index, 0, `insert-at-index: ${index}`)
        console.log('create', index)
      },
      onRemove(index: number) {
        options.value.splice(index, 1)
        console.log('remove', index)
      }
    }
  }
})
</script>

<template>
  <n-dynamic-input :value="options" @create="onCreate" @remove="onRemove">
    <template #default="{ index, value }">
      index: {{ index }} - {{ value }}
    </template>
  </n-dynamic-input>
</template>
