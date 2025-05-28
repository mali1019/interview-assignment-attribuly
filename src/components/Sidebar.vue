<template>
  <div class="h-screen w-64 border-r bg-background">
    <div class="flex items-center p-4 border-b">
      <div class="flex items-center gap-2">
        <div class="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold text-sm">Store name</span>
          <span class="text-xs text-muted-foreground">Pro</span>
        </div>
      </div>
    </div>

    <div class="p-1">
      <div class="rounded-md bg-muted/50 p-2 mb-2">
        <div class="flex items-center gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </div>
      </div>

      <div class="p-2 mb-1 text-xs font-medium text-muted-foreground">
        <span>Getting started</span>
        <span class="float-right text-xs bg-muted px-1.5 py-0.5 rounded-sm">25% completed</span>
      </div>

      <div class="mb-2">
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <span>Live events</span>
        </div>

        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
          </svg>
          <span>Attribution</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div class="space-y-1">
        <div class="px-2 py-1 text-xs text-muted-foreground">
          <span>Ads</span>
        </div>
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <span>All</span>
        </div>
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <span>Creatives</span>
        </div>
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <span>Conversion paths</span>
        </div>
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <span>Product analytics</span>
        </div>
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <span>Ads automation</span>
        </div>
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <span>Link builder</span>
        </div>
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <span>Conversion feed</span>
        </div>
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <span>Store</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
        <div class="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded-md cursor-pointer">
          <span>Integrations</span>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 w-64 border-t">
      <div class="p-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
            <span class="text-sm font-medium">S</span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-medium">User Name</span>
            <span class="text-xs text-muted-foreground">username@site.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Sidebar component
</script> 