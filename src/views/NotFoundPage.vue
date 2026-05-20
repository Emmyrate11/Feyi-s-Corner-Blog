<script setup lang="ts"></script>

<template>
  <main class="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4 px-4">
    <h1 class="text-9xl font-bold text-gray-700">404</h1>
    <h2 class="text-2xl font-semibold text-gray-700">Whoops, seems like you are lost</h2>
    <p class="text-gray-500 mt-2">We are sorry, but the page you are looking for cannot be found</p>
    <RouterLink
      :to="{ name: 'home' }"
      class="bg-sky-500 hover:bg-sky-700 text-white py-2 px-6 rounded-full text-sm mt-4"
      >Back to Home</RouterLink
    >
  </main>
</template>
