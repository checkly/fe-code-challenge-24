<script setup lang="ts">
import octicons from '@primer/octicons'
import type { IconName } from '@primer/octicons'

const props = withDefaults(
  defineProps<{
    name: IconName
    width?: number
  }>(),
  { width: 16 }
)

function getSvg() {
  const { name, width } = props
  try {
    return octicons[name].toSVG({ width })
  } catch (e) {
    throw new Error(`${name} is not an octicon icon`)
  }
}
</script>

<template>
  <span v-html="getSvg()" />
</template>
