<script setup lang="ts">
import { Button } from './ui/button'
import type { MetricSection } from '../types/metrics'
import { computed } from 'vue'

interface Props {
  title: string
  customTitle?: string
  editable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
  customTitle: undefined
})

const emit = defineEmits<{
  (e: 'edit'): void
}>()

const displayTitle = computed(() => {
  if (props.customTitle) return props.customTitle
  
  // Convert camelCase to Title Case with spaces
  return props.title
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim()
})
</script>

<template>
  <div class="space-y-4 mt-4 mb-4">
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-semibold">{{ displayTitle }}</h2>
      <Button v-if="editable" variant="outline" @click="emit('edit')">
        Edit titles
      </Button>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <slot></slot>
    </div>
  </div>
</template> 