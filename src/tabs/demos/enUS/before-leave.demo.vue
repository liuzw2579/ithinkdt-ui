<markdown>
# Hook before tab switching

You can prevent or postpone tab switching.
</markdown>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function handleBeforeLeave(tabName: string) {
  switch (tabName) {
    case 'not-allowed':
      message.error('Not allowed')
      return false
    case 'wait':
      return new Promise<boolean>((resolve) => {
        const messageInstance = message.loading('Wait for 1s')
        setTimeout(() => {
          messageInstance.destroy()
          resolve(true)
        }, 1000)
      })
    default:
      return true
  }
}

function handleUpdateValue(value: string) {
  message.info(value)
}
</script>

<template>
  <n-tabs
    type="line"
    default-value="okay"
    @before-leave="handleBeforeLeave"
    @update:value="handleUpdateValue"
  >
    <n-tab-pane name="wait" tab="Wait for 1s">
      +1s
    </n-tab-pane>
    <n-tab-pane name="not-allowed" tab="Not allowed">
      ???
    </n-tab-pane>
    <n-tab-pane name="okay" tab="Okay">
      Just so so
    </n-tab-pane>
  </n-tabs>
</template>
