<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import ReconnectCard from './components/ReconnectCard.vue'
import BusinessSummaryCard from './components/BusinessSummaryCard.vue'
import StatCard from './components/StatCard.vue'
import DateRangePicker from './components/DateRangePicker.vue'
import EditTitlesDialog from './components/EditTitlesDialog.vue'
import AccountSelectDialog from './components/AccountSelectDialog.vue'
</script>

<template>
  <div class="flex h-screen bg-background">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header title="Home" />
      <main class="flex-1 overflow-auto p-6">
        <ReconnectCard />
        
        <BusinessSummaryCard title="Summary" dateRange="Jan 20, 2023 - Feb 09, 2023">
          <StatCard title="Tracked Revenue" value="$45,231.89" :percentage="12.56">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </template>
          </StatCard>
          
          <StatCard title="Mix-reported revenue" value="$45,231.89" :percentage="12.56">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </template>
          </StatCard>
          
          <StatCard title="Mix-reported revenue" value="$45,231.89" :percentage="12.56">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </template>
          </StatCard>
          
          <StatCard title="Enriched customer events" value="573" :percentage="12.56">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </template>
          </StatCard>
        </BusinessSummaryCard>
        
        <BusinessSummaryCard title="Business Performance Summary">
          <StatCard title="Total Sales" value="$45,231.89" :percentage="12.56">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </template>
          </StatCard>
          
          <StatCard title="Orders" value="231" :percentage="12.56">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </template>
          </StatCard>
          
          <StatCard title="Spend" value="$5,231.89" :percentage="12.56">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </template>
          </StatCard>
          
          <StatCard title="AOV" value="$31.89" :percentage="12.56">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </template>
          </StatCard>
        </BusinessSummaryCard>
        
        <!-- Uncomment these to show the dialogs -->
        <!-- <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <DateRangePicker />
        </div> -->
        
        <!-- <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <EditTitlesDialog />
        </div> -->
        
        <!-- <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <AccountSelectDialog />
        </div> -->
      </main>
    </div>
  </div>
</template>
