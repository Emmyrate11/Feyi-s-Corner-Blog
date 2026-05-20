<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Post } from '@/types'

const post = ref<Post | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)

const route = useRoute()

const fetchPost = async () => {
  try {
    // This is to fetch the API
    const response = await fetch(`https://api.oluwasetemi.dev/posts/${route.params.id}`)
    if (!response.ok) throw new Error('Failed to fetch posts')
    const post_data: Post = await response.json()
    post.value = post_data
  } catch (err) {
    error.value = (err as Error).message
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchPost)
</script>

<template>
  <main class="min-h-screen bg-gray-50 px-4 py-10">
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
    <div v-else class="max-w-3xl mx-auto flex flex-col gap-6">
      <!-- For the Back button-->
      <RouterLink
        :to="{ name: 'home' }"
        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm mt-4"
        >Back to Home</RouterLink
      >
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
      >
        <!-- Title -->
        <h2 class="text-xl font-bold text-gray-800 mt-3">{{ post?.title }}</h2>

        <!-- Content -->
        <p class="text-gray-700 leading-relaxed mt-4 text-sm">
          {{ post?.content }}
        </p>

        <!-- Category -->
        <span class="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {{ post?.category }}
        </span>

        <!-- Tags -->
        <p class="text-gray-500 text-sm mt-2">{{ post?.tags }}</p>
        <!-- Footer -->
        <div class="flex items-center justify-between mt-4">
          <span class="text-xs text-gray-400">
            {{ post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : '' }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>
