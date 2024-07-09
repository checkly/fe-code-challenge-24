<script setup lang="ts">
import type { Stat } from '@/types'

withDefaults(
  defineProps<{
    stats: Stat[]
  }>(),
  { stats: () => [] }
)
</script>

<template>
  <json-viewer :value="JSON.stringify({ datums: stats })" />
</template>
