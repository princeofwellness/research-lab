<script setup lang="ts">
import {cn} from '@/lib/utils'
</script>

<template>
  <nav :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
    <a href="/" class="text-sm font-medium transition-colors hover:text-primary">
      Dashboard
    </a>
    <a href="/cards" class="text-sm font-medium transition-colors hover:text-primary">
      cards
    </a>
    <a href="/forms" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      forms
    </a>
    <a href="/mail" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      mail
    </a>
    <a href="/playground" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      playground
    </a>
    <a href="/tasks" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      tasks
    </a>
    <a href="/authentication" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      authentication
    </a>
  </nav>
</template>
