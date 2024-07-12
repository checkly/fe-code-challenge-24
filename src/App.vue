<script setup lang="ts"></script>

<template>
  <div class="relative flex h-full min-h-0 flex-row flex-nowrap overflow-hidden">
    <nav role="navigation" aria-label="Sidebar navigation" class="px-2 py-2">
      <RouterLink :to="{ name: 'checks' }"> Reporting </RouterLink>
    </nav>
    <main class="border-box w-full flex-1 px-10 pt-10">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
