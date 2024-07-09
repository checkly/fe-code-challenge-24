<script setup lang="ts">
import type { Check } from '@/types'

withDefaults(
  defineProps<{
    checks: Check[]
    activeId?: string
  }>(),
  { checks: () => [] }
)

defineEmits(['update:activeId'])
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Success</th>
        <th>Avg</th>
        <th>P95</th>
        <th>p99</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="check in checks" :key="check.id">
        <tr @click="$emit('update:activeId', check.id)" style="cursor: pointer">
          <td>{{ check.type }}</td>
          <td>{{ check.name }}</td>
          <td>{{ check.success }}</td>
          <td>{{ check.avg }}</td>
          <td>{{ check.p95 }}</td>
          <td>{{ check.p99 }}</td>
        </tr>
        <tr v-if="activeId === check.id">
          <td colspan="6">
            <slot />
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
