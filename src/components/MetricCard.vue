<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import type { Metric } from '../types/metrics'
// import type { LucideIcon } from 'lucide-vue-next'

type MetricCardProps = Metric

defineProps<MetricCardProps>()
</script>

<template>
  <Card class="relative">
    <CardHeader>
      <div class="card-icon" v-if="icon">
        <component :is="icon" />
      </div>
      <CardTitle>{{ title }}</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="text-2xl font-bold">{{ value }}</div>
      <p class="text-xs font-medium text-green-600">{{ change }}</p>
    </CardContent>
  </Card>
</template>

<style scoped>
:deep(.card) {
  padding: 0.75rem;
}

:deep(.card-header) {
  padding: 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

:deep(.card-header .card-title) {
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(100 116 139);
}

:deep(.card-content) {
  padding: 0;
  padding-top: 0.5rem;
}

:deep(.card-icon) {
  color: rgb(100 116 139);
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}
</style> 