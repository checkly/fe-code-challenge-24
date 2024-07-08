<script setup lang="ts">
import { useReportingStore } from '@/store/reporting'
const reportingStore = useReportingStore()
</script>

<template>
  <header>
    <h1>Reporting</h1>
    <p>
      Analyse long term performance of your checks and export aggregated metrics for external
      reporting duties.
    </p>
  </header>
  <section>
    <p v-if="reportingStore.isLoading">Loading...</p>
    <p v-if="reportingStore.error">{{ reportingStore.error }}</p>
    <template v-if="reportingStore.isReady">
      <div v-for="check in reportingStore.state" :key="check.id">
        {{ check.name }}: {{ check.type }}
        <json-viewer :value="JSON.stringify(check)" />
      </div>
    </template>
  </section>
</template>
