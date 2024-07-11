<script setup lang="ts">
import { ref } from 'vue'
import type { Stat } from '@/types'
import Chart from './Chart.vue'
import type { SeriesItem } from '@/components/Chart.vue'

const props = defineProps<{
  stats: Stat[]
}>()

const activeChart = ref<'success' | 'responseTime'>('responseTime')
const data = ref<Record<
  'success' | 'responseTime',
  {
    title: string
    series: SeriesItem[]
    units: string
    min: number
  }
> | null>(null)
data.value = presenter(props.stats)

function roundup(value: number, decimalPlaces: number = 2) {
  return Number(Math.round(parseFloat(value + 'e' + decimalPlaces)) + 'e-' + decimalPlaces)
}

function presenter(data?: Stat[]) {
  if (!data) {
    return null
  }
  const sortedByTime = data.toSorted((a, b) => a.timestamp - b.timestamp)
  const success = []
  const p99 = []
  const p95 = []
  const avg = []
  for (let i = 0; i < data.length; i++) {
    const datum = sortedByTime[i]
    success.push([datum.timestamp, Math.round(datum.success * 100)])
    p99.push([datum.timestamp, roundup(datum.p99 / 1000)])
    p95.push([datum.timestamp, roundup(datum.p95 / 1000)])
    avg.push([datum.timestamp, roundup(datum.avg / 1000)])
  }
  const successMin = Math.min(...success.map((datum) => datum[1]))
  return {
    responseTime: {
      title: 'Response Time',
      units: 's',
      min: 0,
      series: [
        {
          type: 'line',
          name: 'p99',
          data: p99
        },
        {
          type: 'line',
          name: 'p95',
          data: p95
        },
        {
          type: 'line',
          name: 'avg',
          data: avg
        }
      ]
    },
    success: {
      title: 'Success',
      units: '%',
      min: successMin,
      series: [
        {
          type: 'line',
          name: 'success',
          data: success
        }
      ]
    }
  }
}
</script>

<template>
  <div v-if="data && data[activeChart]" style="position: relative">
    <div style="position: absolute; top: 1em; right: 1em; z-index: 1; display: flex; gap: 1em">
      <component
        :is="activeChart === 'responseTime' ? 'span' : 'button'"
        @click="() => (activeChart = 'responseTime')"
        >Response time</component
      >
      <component
        :is="activeChart === 'success' ? 'span' : 'button'"
        @click="() => (activeChart = 'success')"
        >Success</component
      >
    </div>
    <Chart v-bind="data[activeChart]" />
  </div>
</template>
