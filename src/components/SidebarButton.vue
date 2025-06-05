<script setup lang="ts">
import { Button } from './ui/button'
import type { LucideIcon } from 'lucide-vue-next'

interface Props {
  icon: LucideIcon
  label: string
  badge?: string
  variant?: 'default' | 'ghost' | 'outline'
}

withDefaults(defineProps<Props>(), {
  variant: 'ghost'
})
</script>

<template>
  <Button :variant="variant" class="w-full justify-start gap-2">
    <component :is="icon" class="h-4 w-4" />
    <div class="flex flex-col items-start">
      <span>{{ label }}</span>
      <span v-if="badge" class="text-xs text-muted-foreground">{{ badge }}</span>
    </div>
  </Button>
</template> 