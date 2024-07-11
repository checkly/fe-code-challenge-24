<script setup lang="ts">
import StatsChart from '@/components/StatsChart.vue'
import { useStatsStore } from '@/store/stats'

defineProps<{
  activeId: string
}>()

const statsStore = useStatsStore()
</script>

<template>
  <p v-if="statsStore.isLoading">Loading...</p>
  <p v-if="statsStore.error">{{ statsStore.error }}</p>
  <StatsChart v-if="statsStore.isReady" :stats="statsStore.statsByCheckId(activeId)" />
</template>
