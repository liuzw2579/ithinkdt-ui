<markdown>
# Events

Handle events of buttons.
</markdown>

<script setup lang="ts">
import { useMessage } from 'ithinkdt-ui'

const message = useMessage()
function handleClick() {
  message.info('Button Clicked')
}
</script>

<template>
  <n-button @click="handleClick">
    Click Me
  </n-button>
</template>
