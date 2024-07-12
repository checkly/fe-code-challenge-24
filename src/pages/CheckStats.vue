<script setup lang="ts">
import ActiveCheckStats from '@/partials/ActiveCheckStats.vue'

defineProps<{
  activeId: string
}>()
</script>

<template>
  <ActiveCheckStats :active-id="activeId" />
</template>
