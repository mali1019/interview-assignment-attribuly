<script setup lang="ts">
import { ref } from 'vue'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card'
import { RangeCalendar } from './components/ui/range-calendar'
import { getLocalTimeZone, today, type CalendarDate } from '@internationalized/date'
import { ScrollArea } from './components/ui/scroll-area'
import { Separator } from './components/ui/separator'
import { Input } from './components/ui/input/index'
import draggable from 'vuedraggable'
import MetricCard from './components/MetricCard.vue'
import MetricSection from './components/MetricSection.vue'
import SidebarButton from './components/SidebarButton.vue'
import type { DateRange, DateRangeType, MetricsData } from './types/metrics'
import {
  Home,
  Activity,
  Target,
  LineChart as AdsIcon,
  LayoutGrid,
  Image as CreativesIcon,
  GitFork,
  BarChart3,
  Bot,
  Link,
  FileDown,
  Store,
  Plug2,
  Settings,
  HelpCircle,
  MessageSquarePlus,
  Share,
  User,
  GripVertical,
  CircleAlert,
  Search,
  LineChart,
  Receipt,
  DollarSign,
  ShoppingCart,
  Users,
  MousePointerClick,
  Mail,
  UserSquare2,
  Share2,
  FileText,
  ShoppingBasket,
  ClipboardCheck,
  CreditCard,
  Video,
  Globe,
  Sparkles,
  Bell,
  // X,
  Facebook,
  Chrome
} from 'lucide-vue-next'

const tiles = ref([
  { id: 1, name: 'Tracked revenue' },
  { id: 2, name: 'Mis-reported revenue' },
  { id: 3, name: 'Mis-reported ad spend' },
  { id: 4, name: 'Enriched customer events' },
])

const save = () => {
  console.log('Saving tiles:', tiles.value)
}

const cancel = () => {
  console.log('Cancel clicked')
}

const formatDate = (date: CalendarDate | null) => {
  if (!date) return ''
  return date.toString()
}

const startDate = today(getLocalTimeZone())
const endDate = startDate.add({ days: 14 })

const dateRange = ref<DateRange>({
  start: startDate,
  end: endDate,
})

const dateType = ref<DateRangeType>('custom')

const metrics: MetricsData = {
  businessPerformance: [
    { title: 'Tracked Revenue', value: '$45,231.89', change: '+12.55%', icon: LineChart },
    { title: 'Mis-reported revenue', value: '$45,231.89', change: '+12.55%', icon: Receipt },
    { title: 'Mis-reported ad spend', value: '$45,231.89', change: '+12.55%', icon: DollarSign },
    { title: 'Enriched customer events', value: '573', change: '+12.55%', icon: Users },
  ],
  businessMetrics: [
    { title: 'Total Sales', value: '$45,231.89', change: '+12.55%', icon: ShoppingCart },
    { title: 'Orders', value: '231', change: '+12.55%', icon: Receipt },
    { title: 'Spend', value: '$5,231.89', change: '+12.55%', icon: DollarSign },
    { title: 'AOV', value: '$31.89', change: '+12.55%', icon: LineChart },
    { title: 'LTV', value: '$45.89', change: '+20.00%', icon: LineChart },
    { title: 'CPA', value: '$431.89', change: '+20.00%', icon: LineChart },
    { title: 'CVR', value: '11.31%', change: '+12.55%', icon: LineChart },
    { title: 'Blended ROAS', value: '0.14', change: '+12.55%', icon: LineChart },
    { title: 'Facebook ROAS', value: '45.89', change: '+12.55%', icon: LineChart },
    { title: 'Google ROAS', value: '31.89', change: '+12.55%', icon: LineChart },
    { title: 'Net Profit', value: '$431.89', change: '+12.55%', icon: LineChart },
    { title: 'Net Margin', value: '31.89%', change: '+12.55%', icon: LineChart },
    { title: 'Unknown traffic orders', value: '11.31%', change: '+12.55%', icon: LineChart },
    { title: 'Cost of goods sold', value: '$431.89', change: '+12.55%', icon: LineChart },
    { title: 'Overlapping', value: '11.31%', change: '+12.55%', icon: LineChart },
  ],
  websiteAnalytics: [
    { title: 'Visitors', value: '5,231', change: '+12.55%', icon: Users },
    { title: 'Ad interaction', value: '231', change: '+12.55%', icon: MousePointerClick },
    { title: 'Email interaction', value: '45', change: '+12.55%', icon: Mail },
    { title: 'Influencer interaction', value: '73', change: '+12.55%', icon: UserSquare2 },
    { title: 'Social media interaction', value: '131', change: '+12.55%', icon: Share2 },
    { title: 'Organic search interaction', value: '131', change: '+12.55%', icon: Search },
    { title: 'Page view', value: '7,245', change: '+12.55%', icon: FileText },
    { title: 'Add to cart', value: '473', change: '+12.55%', icon: ShoppingBasket },
    { title: 'Checkout start', value: '211', change: '+12.55%', icon: ClipboardCheck },
    { title: 'Payment info submit', value: '191', change: '+12.55%', icon: CreditCard },
  ],
  returningCustomers: [
    { title: 'Order from Facebook ads', value: '51', change: '+12.55%', icon: Facebook },
    { title: 'Order value from Facebook ads', value: '$431.89', change: '+12.55%', icon: Facebook },
    { title: 'Order from Google ads', value: '145', change: '+12.55%', icon: Chrome },
    { title: 'Order value from Google ads', value: '$1,434.89', change: '+12.55%', icon: LineChart },
    { title: 'Order from TikTok ads', value: '31', change: '+12.55%', icon: Video },
    { title: 'Order value from TikTok ads', value: '$443.89', change: '+12.55%', icon: LineChart },
    { title: 'Order from Bing ads', value: '0', change: '+12.55%', icon: Globe },
    { title: 'Order value from Bing ads', value: '$0.00', change: '+12.55%', icon: LineChart },
  ]
}

const handleEditSection = (section: string) => {
  console.log('Editing section:', section)
}

const navigationItems = [
  { icon: Home, label: 'Home' },
  { icon: Activity, label: 'Live events' },
  { icon: Target, label: 'Attribution' },
  { icon: AdsIcon, label: 'Ads' },
  { icon: LayoutGrid, label: 'All' },
  { icon: CreativesIcon, label: 'Creatives' },
  { icon: GitFork, label: 'Conversion paths' },
  { icon: BarChart3, label: 'Product analytics' },
  { icon: Bot, label: 'Ads automation' },
  { icon: Link, label: 'Link builder' },
  { icon: FileDown, label: 'Conversion feed' },
  { icon: Store, label: 'Store' },
  { icon: Plug2, label: 'Integrations' },
]

const settingsItems = [
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help center' },
  { icon: MessageSquarePlus, label: 'Feature request' },
  { icon: Share, label: 'Refer us', badge: '30% commission' },
]
</script>

<template>
  <div class="min-h-screen bg-custom-bg">
    <div class="grid grid-cols-12 gap-4 min-h-screen">
      <ScrollArea class="col-span-2 border-r h-auto">
        <div class="p-4 space-y-4">
          <div class="flex items-center gap-2">
            <div class="h-6 w-6 bg-primary rounded-sm" />
            <div>
              <h2 class="text-lg font-semibold">Store name</h2>
              <p class="text-xs text-muted-foreground">Pro</p>
            </div>
          </div>

          <div class="space-y-1">
            <div class="flex items-center justify-between px-2 py-1.5">
              <span class="text-sm text-muted-foreground">Getting started</span>
              <span class="text-xs text-muted-foreground">25% completed</span>
            </div>
          </div>

          <nav class="space-y-1">
            <SidebarButton
              v-for="item in navigationItems"
              :key="item.label"
              :icon="item.icon"
              :label="item.label"
            />
          </nav>

          <Separator />

          <nav class="space-y-1">
            <SidebarButton
              v-for="item in settingsItems"
              :key="item.label"
              :icon="item.icon"
              :label="item.label"
              :badge="item.badge"
            />
          </nav>

          <div class="pt-4">
            <SidebarButton
              :icon="User"
              label="User Name"
              badge="username@site.com"
            />
          </div>
        </div>
      </ScrollArea>
      <div class="col-span-6 p-6 space-y-6">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-semibold">Home</h1>
          <div class="flex items-center gap-4">
            <Button variant="ghost" class="gap-2">
              <Chrome class="h-5 w-5" />
              <span>Chrome extension</span>
            </Button>
            <Button variant="ghost" class="gap-2">
              <Sparkles class="h-5 w-5" />
              <span>Ask Gemini</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell class="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Card class="bg-white shadow-none border">
          <CardHeader class="flex flex-col gap-2">
            <CardTitle>Reconnect your integration</CardTitle>
            <CardDescription>Your Google ad account (ads account name) has been disconnected.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" class="text-gray-600">Reconnect</Button>
          </CardContent>
        </Card>

        <div class="border rounded-lg">
          <div class="space-y-4">
            <div class="flex justify-between items-center pr-4 pl-4 pt-2">
              <h2 class="text-lg font-semibold">Summary</h2>
              <div class="flex items-center gap-2">
                <span class="text-sm text-muted-foreground">
                  {{ formatDate(dateRange.start) }} - {{ formatDate(dateRange.end) }}
                </span>
              </div>
            </div>
            <Separator />

            <div class="px-4">
              <MetricSection
                v-for="(section, key) in metrics"
                :key="key"
                :title="key"
                :custom-title="key === 'returningCustomers' ? 'Returning Customers' : undefined"
                @edit="handleEditSection(key)"
              >
                <MetricCard
                  v-for="metric in section"
                  :key="metric.title"
                  v-bind="metric"
                />
              </MetricSection>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4 p-6 space-y-6 bg-muted/50">

        <div class="bg-white rounded-lg border shadow-sm">
          <div class="p-4 space-y-4">
            <div class="flex justify-between items-center">
              <h3 class="text-sm font-medium">Pick a date</h3>
              <select v-model="dateType" class="text-sm border-0 bg-transparent">
                <option value="custom">Custom</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="last7days">Last 7 days</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-sm text-muted-foreground">Starting</label>
                <div class="mt-1">
                  <Input :model-value="formatDate(dateRange.start)" readonly class="bg-transparent" />
                </div>
              </div>
              <div>
                <label class="text-sm text-muted-foreground">Ending</label>
                <div class="mt-1">
                  <Input :model-value="formatDate(dateRange.end)" readonly class="bg-transparent" />
                </div>
              </div>
            </div>

            <div class="border rounded-lg p-4">
              <RangeCalendar v-model="dateRange" class="border-0" :numberOfMonths="2" mode="range" />
            </div>

            <div class="flex justify-end gap-2">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Apply</Button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm mt-2 p-0">
          <Card class="w-full p-4">
            <CardHeader class="p-0">
              <CardTitle>Edit tiles</CardTitle>
            </CardHeader>

            <CardContent class="p-0">
              <div class="space-y-3">
                <draggable v-model="tiles" item-key="id" class="space-y-2">
                  <template #item="{ element }">
                    <div class="bg-white p-2 flex items-center justify-between">
                      <span>{{ element.name }}</span>
                      <GripVertical class="text-muted-foreground w-4 h-4" />
                    </div>
                  </template>
                </draggable>
              </div>
            </CardContent>

            <CardFooter class="flex justify-end gap-2">
              <Button variant="outline" @click="cancel">Cancel</Button>
              <Button @click="save">Save</Button>
            </CardFooter>
          </Card>
        </div>

        <div class="bg-white rounded-lg shadow-sm mt-2 p-0">
          <Card class="max-w-2xl mx-auto mt-10 p-4">
            <CardHeader class="flex items-center justify-between p-0">
              <CardTitle>Choose account</CardTitle>
            </CardHeader>

            <CardContent class="space-y-4 p-0">
              <div class="flex items-start gap-2 p-3 bg-blue-50 text-blue-700 border border-blue-200 rounded text-sm">
                <CircleAlert class="w-4 h-4 mt-1" />
                <p>
                  Only accounts for which you have admin access are shown here, and you need to have editing permissions
                  for the account to use auto tracking.
                </p>
              </div>

              <div class="grid grid-cols-2 px-4 text-muted-foreground text-sm font-medium">
                <div>Account</div>
                <div>Auto tracking</div>
              </div>

              <div class="flex flex-col items-center justify-center p-10 text-muted-foreground">
                <Search class="w-8 h-8 mb-2" />
                <p>No available account was found</p>
              </div>
            </CardContent>

            <CardFooter class="flex justify-end gap-2 p-0">
              <Button variant="outline">Cancel</Button>
              <Button disabled>Connect</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.range-calendar) {
  --calendar-width: 100%;
}

:deep(.calendar-grid) {
  width: 100%;
}

:deep(.calendar-header) {
  margin-bottom: 0.5rem;
}

:deep(.calendar-days) {
  gap: 0;
}

:deep(.calendar-cell) {
  height: 2.25rem;
}

:deep(.calendar-cell-inner) {
  width: 2.25rem;
  height: 2.25rem;
}

:deep(.calendar-cell.selected) {
  background-color: #000;
  color: white;
}

:deep(.calendar-cell.in-range) {
  background-color: #f5f5f5;
}

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

:deep(.dialog-content) {
  max-width: 400px;
}

:deep(.dialog-header) {
  margin-bottom: 1rem;
}

:deep(.dialog-footer) {
  margin-top: 1rem;
}

:deep(.scroll-area) {
  --scrollbar-size: 0px;
}

:deep(button.ghost) {
  height: 32px;
  padding: 6px 8px;
  font-size: 14px;
}

:deep(button.ghost:hover) {
  background-color: #f1f5f9;
}

:deep(button.ghost.active) {
  background-color: #f1f5f9;
  font-weight: 500;
}
</style>
