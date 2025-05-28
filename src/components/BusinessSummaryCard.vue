<template>
  <div class="bg-white rounded-lg border mb-6">
    <div class="p-6 flex items-center justify-between border-b">
      <h2 class="text-lg font-semibold">{{ title }}</h2>
      <div class="flex items-center gap-2">
        <div v-if="dateRange" class="flex items-center gap-1 text-xs border rounded px-2 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span>{{ dateRange }}</span>
        </div>
        <button class="flex items-center gap-1 text-xs border rounded px-2 py-1 hover:bg-muted/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
          <span>Edit titles</span>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  dateRange?: string;
}>()
</script> 