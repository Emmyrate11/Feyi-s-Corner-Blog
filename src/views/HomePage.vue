<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Post } from '@/types'

const posts = ref<Post[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)

const fetchPosts = async () => {
  try {
    // This is to fetch the API
    const response = await fetch('https://api.oluwasetemi.dev/posts')
    if (!response.ok) throw new Error('Failed to fetch posts')
    const json: { data: Post[] } = await response.json()
    posts.value = json.data
  } catch (err) {
    error.value = (err as Error).message
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchPosts)
</script>

<template>
  <div class="min-h-screen bg-gray-100 px-4 py-10">
    <!-- Header -->
    <div class="max-w-3xl mx-auto mb-8" flex flex-col justify-center>
      <h1
        class="text-3xl font-bold italic bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-400 bg-clip-text text-transparent tracking-tight"
      >
        Feyi's Corner
      </h1>
      <p class="text-gray-500 text-sm font-normal mt-1">Explore our latest articles</p>
    </div>

    <!-- loading state -->
    <div v-if="isLoading" class="max-w-3xl mx-auto flex items-center justify-center py-20">
      <p>Loading posts...</p>
    </div>

    <!-- error state -->
    <div
      v-else-if="error"
      class="max-w-3xl mx-auto bg-red-100 border border-red-200 text-red-600 rounded-lg p-6 text-center"
    >
      <p class="font-semibold">Something went wrong</p>
      {{ error }}
    </div>

    <!-- success state -->
    <ul v-else class="max-w-3xl mx-auto flex flex-col gap-6">
      <li
        v-for="post in posts"
        :key="post.id"
        class="bg-white rounded-xl shadow-sm border border-gray-250 p-6 hover:shadow-md transition-shadow"
      >
        <!-- Category -->
        <span class="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {{ post.category }}
        </span>

        <!-- Title -->
        <h2 class="text-xl font-bold text-gray-800 mt-3">{{ post.title }}</h2>

        <!-- Excerpt -->
        <p class="text-gray-500 text-sm mt-2">{{ post.excerpt }}</p>

        <!-- Footer -->
        <div class="flex items-center justify-between mt-4">
          <span class="text-xs text-gray-400">
            {{ new Date(post.publishedAt).toLocaleDateString() }}
          </span>
          <RouterLink
            :to="{ name: 'details', params: { id: post.id } }"
            class="text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
          >
            Read more →
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style></style>
