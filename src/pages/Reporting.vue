<script setup lang="ts">
import { useReportingStore } from '@/store/reporting'
const reportingStore = useReportingStore()
</script>

<template>
  <h1>Reporting</h1>
  <div v-for="check of reportingStore.checks" :key="check.id">
    <pre>{{ check }}</pre>
  </div>
</template>
