<template>
  <div class="bg-white rounded-lg border shadow-sm w-full max-w-md">
    <div class="p-4 border-b flex items-center justify-between">
      <h3 class="text-lg font-semibold">Choose account</h3>
      <button class="p-1 rounded-full hover:bg-muted/50">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
    
    <div class="p-4">
      <div class="bg-blue-50 border border-blue-200 rounded-md p-3 mb-4">
        <div class="flex gap-2">
          <div class="mt-0.5 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <div class="text-xs text-blue-800">
            Only accounts for which you have admin access are shown here, and you need to have edit permissions for the account to use auto tracking.
          </div>
        </div>
      </div>
      
      <div class="flex items-center border rounded-md px-3 py-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input type="text" placeholder="Search..." class="w-full border-0 focus:outline-none focus:ring-0 text-sm ml-2" />
      </div>
      
      <div class="text-center py-8 text-sm text-muted-foreground">
        No available account was found
      </div>
    </div>
    
    <div class="flex justify-end gap-2 p-4 border-t">
      <button class="px-4 py-1.5 text-sm border rounded-md hover:bg-muted/50">Cancel</button>
      <button disabled class="px-4 py-1.5 text-sm bg-black text-white rounded-md opacity-50 cursor-not-allowed">Connect</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// AccountSelectDialog component
</script> 