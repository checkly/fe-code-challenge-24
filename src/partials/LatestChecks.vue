<script setup lang="ts">
import { useReportingStore } from '@/store/reporting'
import ChecksTable from '@/components/checks-table/ChecksTable.vue'

const reportingStore = useReportingStore()

defineProps<{
  activeId?: string
}>()

defineEmits<{
  'update:activeId': [id: string]
}>()
</script>

<template>
  <BaseSpinner v-if="reportingStore.isLoading" />
  <p v-if="reportingStore.error">{{ reportingStore.error }}</p>
  <ChecksTable
    v-if="reportingStore.isReady"
    :checks="reportingStore.state"
    :active-id="activeId"
    @update:activeId="(id: string) => $emit('update:activeId', id)"
    ><RouterView />
  </ChecksTable>
</template>
