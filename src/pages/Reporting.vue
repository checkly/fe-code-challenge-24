<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useReportingStore } from '@/store/reporting'
import ChecksTable from '@/components/ChecksTable.vue'
import ActiveCheckStats from '@/partials/ActiveCheckStats.vue'

const reportingStore = useReportingStore()
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
        (id: string) =>
          router.push({ name: 'reporting', params: { activeId: id === activeId ? null : id } })
      "
    >
      <ActiveCheckStats v-if="activeId" :activeId="activeId" />
    </ChecksTable>
  </section>
</template>
