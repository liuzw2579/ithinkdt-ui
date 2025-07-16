<markdown>
# Theme

Set theme of inner components of `n-config-provider`.
</markdown>

<script lang="ts" setup>
import type { GlobalTheme } from 'ithinkdt-ui'
import { darkTheme } from 'ithinkdt-ui'
import { ref } from 'vue'

const theme = ref<GlobalTheme | null>(null)
</script>

<template>
  <n-config-provider :theme="theme">
    <n-card>
      <n-space>
        <n-button @click="theme = darkTheme">
          Dark
        </n-button>
        <n-button @click="theme = null">
          Light
        </n-button>
      </n-space>
    </n-card>
  </n-config-provider>
</template>
