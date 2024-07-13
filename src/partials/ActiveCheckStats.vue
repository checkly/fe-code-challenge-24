<script setup lang="ts">
import { onMounted } from 'vue'
import StatsChart from '@/components/stats-chart/StatsChart.vue'
import { useStatsStore } from '@/store/stats'

defineProps<{
  activeId: string
}>()

const statsStore = useStatsStore()
onMounted(() => {
  statsStore.execute()
})
</script>

<template>
  <BaseSpinner v-if="statsStore.isLoading" />
  <p v-if="statsStore.error">{{ statsStore.error }}</p>
  <StatsChart
    v-if="statsStore.isReady"
    :stats="statsStore.statsByCheckId(activeId)"
    class="w-full"
  />
</template>
