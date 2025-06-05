import type { LucideIcon } from 'lucide-vue-next'
import type { CalendarDate } from '@internationalized/date'

export interface Metric {
  title: string
  value: string
  change: string
  icon?: LucideIcon
}

export interface MetricSection {
  title: string
  metrics: Metric[]
}

export interface DateRange {
  start: CalendarDate | null
  end: CalendarDate | null
}

export type DateRangeType = 'custom' | 'today' | 'yesterday' | 'last7days'

export interface MetricsData {
  businessPerformance: Metric[]
  businessMetrics: Metric[]
  websiteAnalytics: Metric[]
  returningCustomers: Metric[]
} 