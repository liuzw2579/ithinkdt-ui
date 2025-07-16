<markdown>
# useThemeVars

Naive UI provides `useThemeVars`. It contains common theme variables.
</markdown>

<script setup lang="ts">
import { useThemeVars } from 'ithinkdt-ui'

const themeVars = useThemeVars()
</script>

<template>
  <pre style="overflow: auto">{{ themeVars }}</pre>
</template>
