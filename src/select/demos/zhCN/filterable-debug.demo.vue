<markdown>
# Filterable debug
</markdown>

<script lang="ts" setup>
import type { SelectFilter } from 'naive-ui'
import { ref } from 'vue'

const selectedValue = ref('song1')
const selectedValues = ref(['song1'])

const filter: SelectFilter = (pattern, option) => {
  console.log(pattern, option)
  return pattern === '1'
}

const options = [
  {
    label: 'Drive My Carfehjuwagheiuwhfiuawgheiawufhiuawghueiwahfaiuwgewiuafhw',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select
      v-model:value="selectedValue"
      style="width: 200px"
      filterable
      placeholder="选择歌曲"
      :filter="filter"
      :consistent-menu-width="false"
      :options="options"
    />
    <n-select
      v-model:value="selectedValues"
      style="width: 200px"
      multiple
      filterable
      placeholder="选择歌曲"
      :filter="filter"
      :consistent-menu-width="false"
      :options="options"
    />
  </n-space>
</template>
