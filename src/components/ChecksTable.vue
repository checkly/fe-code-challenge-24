<script setup lang="ts">
import type { Check } from '@/types'
import { formatSuccessValue, formatResponseTimeValue } from '@/formatters'

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
  <table width="100%">
    <thead>
      <tr>
        <th colspan="2">Type</th>
        <th width="20%">Name</th>
        <th>Success</th>
        <th>Avg</th>
        <th>P95</th>
        <th>p99</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="check in checks" :key="check.id">
        <tr @click="$emit('update:activeId', check.id)" style="cursor: pointer">
          <td>
            <BaseIcon :name="activeId === check.id ? 'chevron-down' : 'chevron-right'" />
          </td>
          <td>{{ check.type }}</td>
          <td>{{ check.name }}</td>
          <td>{{ formatSuccessValue(check.success) }}</td>
          <td>{{ formatResponseTimeValue(check.avg) }}</td>
          <td>{{ formatResponseTimeValue(check.p95) }}</td>
          <td>{{ formatResponseTimeValue(check.p99) }}</td>
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

<style>
th {
  text-align: left;
}
th,
td {
  padding: 0.5em;
}
</style>
