<script setup lang="ts">
import { Button } from '~/components/ui/button'
</script>

<template>
  <div
    class="container flex min-h-screen flex-col items-center justify-center gap-6 py-16"
    data-testid="home-page"
  >
    <div class="space-y-2 text-center">
      <h1 class="text-3xl font-bold tracking-tight">
        {{ $t('app.title') }}
      </h1>
      <p class="text-muted-foreground">
        {{ $t('app.subtitle') }}
      </p>
    </div>
    <Button as-child>
      <a href="http://localhost:6006" target="_blank" rel="noopener noreferrer">
        {{ $t('app.openStorybook') }}
      </a>
    </Button>
  </div>
</template>
