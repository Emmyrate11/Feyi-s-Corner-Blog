<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const error = ref<string | null>(null)

// onErrorCaptured will help to catches all errors from child components
onErrorCaptured((err: Error) => {
  error.value = err.message
  return false
})
</script>

<template>
  <div
    v-if="error"
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4"
  >
    <h2 class="text-2xl font-bold text-red-500">Something went wrong</h2>
    <p class="text-gray-500 text-sm">{{ error }}</p>
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm"
      @click="error = null"
    >
      Try again
    </button>
  </div>

  <slot v-else />
</template>
