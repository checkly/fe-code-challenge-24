<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useReportingStore } from '@/store/reporting'
import { useStatsStore } from '@/store/stats'

import ChecksTable from '@/components/ChecksTable.vue'

const reportingStore = useReportingStore()
const statsStore = useStatsStore()

const router = useRouter()
defineProps<{
  activeId?: string
}>()
</script>

<template>
  <header>
    <h1>
      <RouterLink :to="{ name: 'reporting' }"> Reporting </RouterLink>
    </h1>
    <p>
      Analyse long term performance of your checks and export aggregated metrics for external
      reporting duties.
    </p>
  </header>
  <section>
    <p v-if="reportingStore.isLoading">Loading...</p>
    <p v-if="reportingStore.error">{{ reportingStore.error }}</p>
    <ChecksTable
      v-if="reportingStore.isReady"
      :checks="reportingStore.state"
      :active-id="activeId"
      @update:activeId="
        (activeId: string) => router.push({ name: 'reporting', params: { activeId } })
      "
    >
      <template v-if="activeId">
        <p v-if="statsStore.isLoading">Loading...</p>
        <json-viewer :value="JSON.stringify({ datums: statsStore.statsByCheckId(activeId) })" />
      </template>
    </ChecksTable>
  </section>
</template>
