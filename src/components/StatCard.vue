<template>
  <div class="flex flex-col">
    <div class="flex items-center gap-1 text-sm text-muted-foreground mb-2">
      <slot name="icon"></slot>
      <span>{{ title }}</span>
    </div>
    <div class="text-2xl font-bold mb-1">{{ value }}</div>
    <div class="flex items-center gap-1 text-xs" :class="percentageClass">
      <svg v-if="percentage > 0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 9-6-6-6 6" />
        <path d="M12 3v18" />
      </svg>
      <svg v-else-if="percentage < 0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6 15 6 6 6-6" />
        <path d="M12 3v18" />
      </svg>
      <span>{{ Math.abs(percentage).toFixed(2) }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string;
  value: string | number;
  percentage: number;
}>()

const percentageClass = computed(() => {
  if (props.percentage > 0) {
    return 'text-green-500'
  } else if (props.percentage < 0) {
    return 'text-red-500'
  }
  return ''
})
</script> 