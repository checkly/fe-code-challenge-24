<script setup lang="ts">
import { useChecksStore } from '@/store/checks'
import ChecksTable from '@/components/checks-table/ChecksTable.vue'

const checksStore = useChecksStore()

defineProps<{
  activeId?: string
}>()

defineEmits<{
  'update:activeId': [id: string]
}>()
</script>

<template>
  <BaseSpinner v-if="checksStore.isLoading" />
  <p v-if="checksStore.error">{{ checksStore.error }}</p>
  <ChecksTable
    v-if="checksStore.isReady"
    :checks="checksStore.state"
    :active-id="activeId"
    @update:activeId="(id: string) => $emit('update:activeId', id)"
    ><RouterView />
  </ChecksTable>
</template>
