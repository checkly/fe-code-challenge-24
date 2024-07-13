<script setup lang="ts">
import StatsChart from '@/components/stats-chart/StatsChart.vue'
import { useStatsStore } from '@/store/stats'

const props = defineProps<{
  activeId: string
}>()

const statsStore = useStatsStore()
statsStore.load(props.activeId)
</script>

<template>
  <BaseSpinner v-if="statsStore.isLoading" />
  <p v-if="statsStore.error">{{ statsStore.error }}</p>
  <StatsChart v-if="statsStore.isReady" :stats="statsStore.statsByCheckId" class="w-full" />
</template>
