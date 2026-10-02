<script setup lang="ts">
import { Button } from '~/components/ui/button'
</script>

<template>
  <div class="container flex min-h-screen flex-col items-center justify-center gap-4 py-16 text-center">
    <h1 class="text-3xl font-bold tracking-tight">403</h1>
    <p class="text-muted-foreground">{{ $t('forbidden.subtitle') }}</p>
    <Button as-child variant="outline">
      <NuxtLink to="/">{{ $t('common.ok') }}</NuxtLink>
    </Button>
  </div>
</template>
