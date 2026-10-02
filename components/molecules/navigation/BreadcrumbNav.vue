<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/utils/cn'

export interface BreadcrumbItem {
  label: string
  href?: string
}

const props = defineProps<{
  items: BreadcrumbItem[]
  class?: HTMLAttributes['class']
  /** Root nav test id; items → `{testId}-item-{n}`, current → `{testId}-current` */
  testId?: string
}>()

function isInternalLink(href?: string) {
  return Boolean(href?.startsWith('/'))
}
</script>

<template>
  <nav aria-label="breadcrumb" :class="cn(props.class)" :data-testid="testId">
    <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground">
      <li
        v-for="(item, index) in items"
        :key="`${item.label}-${index}`"
        class="inline-flex items-center gap-1.5"
        :data-testid="testId ? `${testId}-item-${index}` : undefined"
      >
        <span v-if="index > 0" class="text-muted-foreground/60" aria-hidden="true">/</span>
        <NuxtLink
          v-if="item.href && isInternalLink(item.href) && index < items.length - 1"
          :to="item.href"
          class="transition-colors hover:text-foreground"
          :data-testid="testId ? `${testId}-link-${index}` : undefined"
        >
          {{ item.label }}
        </NuxtLink>
        <a
          v-else-if="item.href && index < items.length - 1"
          :href="item.href"
          class="transition-colors hover:text-foreground"
          :data-testid="testId ? `${testId}-link-${index}` : undefined"
        >
          {{ item.label }}
        </a>
        <span
          v-else
          class="font-normal text-foreground"
          :data-testid="testId ? `${testId}-current` : undefined"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
