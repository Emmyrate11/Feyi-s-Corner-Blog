<script setup lang="ts">
import ErrorBoundary from './components/ErrorBoundary.vue'
</script>

<template>
  <ErrorBoundary>
    <Suspense>
      <template #default>
        <RouterView />
      </template>

      <!-- Shows while page component is loading -->
      <template #fallback>
        <div class="min-h-screen bg-gray-100 flex items-center justify-center">
          <p class="text-gray-400 text-lg animate-pulse">Loading page...</p>
        </div>
      </template>
    </Suspense>
  </ErrorBoundary>
</template>

<style scoped></style>
