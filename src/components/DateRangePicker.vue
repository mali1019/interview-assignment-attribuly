<template>
  <div class="bg-white rounded-lg border shadow-sm w-full max-w-md">
    <div class="p-4 border-b">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold">Pick a date</h3>
        <div class="relative">
          <select class="appearance-none bg-white border rounded-md px-3 py-1 text-sm pr-8">
            <option>Custom</option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-2 top-1/2 -translate-y-1/2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs mb-1">Starting</label>
          <input type="text" value="2025-02-28" class="w-full border rounded-md px-3 py-1.5 text-sm" />
        </div>
        <div>
          <label class="block text-xs mb-1">Ending</label>
          <input type="text" value="2025-03-13" class="w-full border rounded-md px-3 py-1.5 text-sm" />
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-2 gap-4 p-4">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Feb 2025</span>
          <div class="flex">
            <button class="p-1 rounded hover:bg-muted/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-7 text-center text-xs mb-1">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>
        
        <div class="grid grid-cols-7 gap-1 text-xs">
          <div class="h-7 flex items-center justify-center">4</div>
          <div class="h-7 flex items-center justify-center">5</div>
          <div class="h-7 flex items-center justify-center">6</div>
          <div class="h-7 flex items-center justify-center">7</div>
          <div class="h-7 flex items-center justify-center">8</div>
          <div class="h-7 flex items-center justify-center">9</div>
          <div class="h-7 flex items-center justify-center">10</div>
          
          <div class="h-7 flex items-center justify-center">11</div>
          <div class="h-7 flex items-center justify-center">12</div>
          <div class="h-7 flex items-center justify-center">13</div>
          <div class="h-7 flex items-center justify-center">14</div>
          <div class="h-7 flex items-center justify-center">15</div>
          <div class="h-7 flex items-center justify-center">16</div>
          <div class="h-7 flex items-center justify-center">17</div>
          
          <div class="h-7 flex items-center justify-center">18</div>
          <div class="h-7 flex items-center justify-center">19</div>
          <div class="h-7 flex items-center justify-center">20</div>
          <div class="h-7 flex items-center justify-center">21</div>
          <div class="h-7 flex items-center justify-center">22</div>
          <div class="h-7 flex items-center justify-center">23</div>
          <div class="h-7 flex items-center justify-center">24</div>
          
          <div class="h-7 flex items-center justify-center">25</div>
          <div class="h-7 flex items-center justify-center">26</div>
          <div class="h-7 flex items-center justify-center">27</div>
          <div class="h-7 flex items-center justify-center bg-black text-white rounded-full">28</div>
        </div>
      </div>
      
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Mar 2025</span>
          <div class="flex">
            <button class="p-1 rounded hover:bg-muted/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-7 text-center text-xs mb-1">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>
        
        <div class="grid grid-cols-7 gap-1 text-xs">
          <div class="h-7 flex items-center justify-center"></div>
          <div class="h-7 flex items-center justify-center"></div>
          <div class="h-7 flex items-center justify-center"></div>
          <div class="h-7 flex items-center justify-center"></div>
          <div class="h-7 flex items-center justify-center"></div>
          <div class="h-7 flex items-center justify-center">1</div>
          <div class="h-7 flex items-center justify-center">2</div>
          
          <div class="h-7 flex items-center justify-center">3</div>
          <div class="h-7 flex items-center justify-center">4</div>
          <div class="h-7 flex items-center justify-center">5</div>
          <div class="h-7 flex items-center justify-center">6</div>
          <div class="h-7 flex items-center justify-center">7</div>
          <div class="h-7 flex items-center justify-center">8</div>
          <div class="h-7 flex items-center justify-center">9</div>
          
          <div class="h-7 flex items-center justify-center">10</div>
          <div class="h-7 flex items-center justify-center">11</div>
          <div class="h-7 flex items-center justify-center">12</div>
          <div class="h-7 flex items-center justify-center bg-black text-white rounded-full">13</div>
          <div class="h-7 flex items-center justify-center">14</div>
          <div class="h-7 flex items-center justify-center">15</div>
          <div class="h-7 flex items-center justify-center">16</div>
          
          <div class="h-7 flex items-center justify-center">17</div>
          <div class="h-7 flex items-center justify-center">18</div>
          <div class="h-7 flex items-center justify-center">19</div>
          <div class="h-7 flex items-center justify-center">20</div>
          <div class="h-7 flex items-center justify-center">21</div>
          <div class="h-7 flex items-center justify-center">22</div>
          <div class="h-7 flex items-center justify-center">23</div>
          
          <div class="h-7 flex items-center justify-center">24</div>
          <div class="h-7 flex items-center justify-center">25</div>
          <div class="h-7 flex items-center justify-center">26</div>
          <div class="h-7 flex items-center justify-center">27</div>
          <div class="h-7 flex items-center justify-center">28</div>
          <div class="h-7 flex items-center justify-center">29</div>
          <div class="h-7 flex items-center justify-center">30</div>
          
          <div class="h-7 flex items-center justify-center">31</div>
        </div>
      </div>
    </div>
    
    <div class="flex justify-end gap-2 p-4 border-t">
      <button class="px-4 py-1.5 text-sm border rounded-md hover:bg-muted/50">Cancel</button>
      <button class="px-4 py-1.5 text-sm bg-black text-white rounded-md hover:bg-black/80">Apply</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// DateRangePicker component
</script> 