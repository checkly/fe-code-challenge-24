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
  <table class="mb-10 w-full">
    <thead>
      <tr>
        <th colspan="2">Type</th>
        <th>Name</th>
        <th class="text-center">Success</th>
        <th class="text-center">Avg</th>
        <th class="text-center">P95</th>
        <th class="text-center">p99</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="activeId && !checks.find((check) => check.id === activeId)" class="tr tr-active">
        <td colspan="100">
          <div class="flex w-full bg-white px-2 py-2">
            <p class="font-semibold text-red-500">
              Check <code class="bg-red-50 px-1 py-1 font-normal">{{ activeId }}</code> not found
            </p>
          </div>
        </td>
      </tr>
      <template v-for="check in checks" :key="check.id">
        <tr
          @click="$emit('update:activeId', activeId === check.id ? undefined : check.id)"
          @keydown.space="$emit('update:activeId', activeId === check.id ? undefined : check.id)"
          class="tr tr-expandable"
          :class="{ 'tr-active': activeId === check.id }"
          tabindex="0"
          :aria-expanded="activeId === check.id"
        >
          <td class="w-[20px]">
            <BaseIcon
              :name="activeId === check.id ? 'chevron-down' : 'chevron-right'"
              class="text-center"
            />
          </td>
          <td class="td-short">{{ check.type }}</td>
          <td>
            <strong :id="check.id">{{ check.name }}</strong>
          </td>
          <td class="td-short text-center">{{ formatSuccessValue(check.success) }}</td>
          <td class="td-short text-center">{{ formatResponseTimeValue(check.avg) }}</td>
          <td class="td-short text-center">{{ formatResponseTimeValue(check.p95) }}</td>
          <td class="td-short text-center">{{ formatResponseTimeValue(check.p99) }}</td>
        </tr>
        <tr v-if="activeId === check.id" class="tr tr-active" :aria-labelledby="check.id">
          <td colspan="100">
            <div class="flex h-[250px] w-full items-center justify-center bg-white">
              <slot />
            </div>
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
