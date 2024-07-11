<script setup lang="ts">
import * as Highcharts from 'highcharts'
import { createHighcharts } from 'vue-highcharts'
export interface SeriesItem {
  name: string
  type: string
  data: number[][]
}
const props = withDefaults(
  defineProps<{
    title?: string
    series?: SeriesItem[]
    min?: number
    units?: string
  }>(),
  { title: '', units: '', series: () => [] }
)
const Charts = createHighcharts('Highcharts', Highcharts)
function chartOptions(series: SeriesItem[], units: string, min: number): Highcharts.Options {
  return {
    chart: {
      zooming: {
        type: 'x'
      },
      type: 'spline',
      scrollablePlotArea: {
        minWidth: 400,
        scrollPositionX: 1
      },
      marginLeft: 60,
      marginRight: 100,
      spacingTop: 50,
      spacingBottom: 10,
      height: 250,
      backgroundColor: 'aliceblue'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b'
      },
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      title: { text: '' },
      labels: {
        format: `{value}${units}`
      },
      floor: min
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    title: { text: '' },
    credits: {
      enabled: false
    },
    tooltip: {
      valueSuffix: units
    },
    series: series as Highcharts.SeriesOptionsType[]
  }
}
</script>

<template>
  <Charts v-if="series" ref="highchartsRef" :options="chartOptions(props.series, props.units, 0)" />
</template>
