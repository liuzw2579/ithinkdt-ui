<markdown>
# 禁用
</markdown>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      value: ref(0),
      disabled: ref(true)
    }
  }
})
</script>

<template>
  <n-space align="center">
    <n-switch v-model:value="disabled" />
    <n-input-number v-model:value="value" :disabled="disabled" />
  </n-space>
</template>
