<script setup lang="ts">
import { useRouter } from 'vue-router'
import LatestChecks from '@/partials/LatestChecks.vue'

const router = useRouter()

defineProps<{
  activeId?: string
}>()
</script>

<template>
  <header class="mb-10">
    <h2 class="typography-h2 heading mb-2" role="heading">Reporting</h2>
    <p>
      Analyse long term performance of your checks and export aggregated metrics for external
      reporting duties.
    </p>
  </header>
  <section>
    <LatestChecks
      :active-id="activeId"
      @update:activeId="
        (id: string) =>
          router.push(
            id === activeId ? { name: 'checks' } : { name: 'check-stats', params: { activeId: id } }
          )
      "
    />
  </section>
</template>
