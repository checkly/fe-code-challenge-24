<script setup lang="ts">
import * as Highcharts from 'highcharts'
import { createHighcharts } from 'vue-highcharts'
import accessibility from 'highcharts/modules/accessibility'
accessibility(Highcharts)

export interface SeriesItem {
  name: string
  type: string
  data: number[][]
}
const props = withDefaults(
  defineProps<{
    series?: SeriesItem[]
    min?: number
    units?: string
  }>(),
  { series: () => [], min: 0, units: '' }
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
      spacingTop: 60,
      spacingBottom: 20,
      height: 250
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
    accessibility: {
      keyboardNavigation: {
        focusBorder: {
          style: {
            lineWidth: 3,
            color: '#aa1111',
            borderRadius: 5
          },
          margin: 4
        }
      }
    },
    series: series as Highcharts.SeriesOptionsType[]
  }
}
</script>

<template>
  <Charts v-if="series" :options="chartOptions(props.series, props.units, 0)" />
</template>
