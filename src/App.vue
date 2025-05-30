<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { RangeCalendar } from './components/ui/range-calendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import { ScrollArea } from './components/ui/scroll-area'
import { Separator } from './components/ui/separator'

interface DateRange {
  start: any;
  end: any;
}

const start = today(getLocalTimeZone())
const end = start.add({ days: 14 })

const dateRange = ref({
  start,
  end,
}) as Ref<DateRange>

const metrics = {
  businessPerformance: [
    { title: 'Tracked Revenue', value: '$45,231.89', change: '+12.55%' },
    { title: 'Mis-reported revenue', value: '$45,231.89', change: '+12.55%' },
    { title: 'Mis-reported ad spend', value: '$45,231.89', change: '+12.55%' },
    { title: 'Enriched customer events', value: '573', change: '+12.55%' },
  ],
  websiteAnalytics: [
    { title: 'Visitors', value: '5,231', change: '+12.55%' },
    { title: 'Ad interaction', value: '231', change: '+12.55%' },
    { title: 'Email interaction', value: '45', change: '+12.55%' },
    { title: 'Influencer interaction', value: '73', change: '+12.55%' },
  ],
  returningCustomers: [
    { title: 'Order from Facebook ads', value: '51', change: '+12.55%' },
    { title: 'Order value from Facebook ads', value: '$431.89', change: '+12.55%' },
    { title: 'Order from Google ads', value: '145', change: '+12.55%' },
    { title: 'Order value from Google ads', value: '$1,434.89', change: '+12.55%' },
  ]
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="grid grid-cols-5 grid-rows-5 gap-4 ">
      <ScrollArea class="h-screen border-r">
        <div class="p-4 space-y-4">
          <div class="flex items-center gap-2">
            <div class="h-6 w-6 bg-primary rounded-sm" />
            <h2 class="text-lg font-semibold">Store name</h2>
          </div>

          <nav class="space-y-2">
            <Button variant="ghost" class="w-full justify-start">
              <span>Home</span>
            </Button>
            <Button variant="ghost" class="w-full justify-start">
              <span>Live events</span>
            </Button>
            <Button variant="ghost" class="w-full justify-start">
              <span>Attribution</span>
            </Button>
          </nav>
        </div>
      </ScrollArea>
      <div class="col-span-3 p-6 space-y-4">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-2xl font-bold">Home</h1>
            <p class="text-muted-foreground">Reconnect your integration</p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-semibold">Business Performance Summary</h2>
            <Button variant="outline">Edit titles</Button>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <Card v-for="metric in metrics.businessPerformance" :key="metric.title">
              <CardHeader>
                <CardTitle class="text-sm font-medium text-muted-foreground">{{ metric.title }}</CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold">{{ metric.value }}</div>
                <p class="text-sm text-green-600">{{ metric.change }}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-semibold">Website Analytics</h2>
            <Button variant="outline">Edit titles</Button>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <Card v-for="metric in metrics.websiteAnalytics" :key="metric.title">
              <CardHeader>
                <CardTitle class="text-sm font-medium text-muted-foreground">{{ metric.title }}</CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold">{{ metric.value }}</div>
                <p class="text-sm text-green-600">{{ metric.change }}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-semibold">Returning Customers</h2>
            <Button variant="outline">Edit titles</Button>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <Card v-for="metric in metrics.returningCustomers" :key="metric.title">
              <CardHeader>
                <CardTitle class="text-sm font-medium text-muted-foreground">{{ metric.title }}</CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold">{{ metric.value }}</div>
                <p class="text-sm text-green-600">{{ metric.change }}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div class="col-start-5 col-span-1 p-6">
        <RangeCalendar v-model="dateRange" class="border rounded-lg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.range-calendar) {
  --calendar-width: 600px;
}
</style>
