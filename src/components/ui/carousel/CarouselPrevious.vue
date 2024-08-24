<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :class="cn(
      'bg-[#3F8CFF] touch-manipulation absolute h-6 w-6 rounded-full p-0 hover:bg-[#3F8CFF] border-none',
      orientation === 'horizontal'
        ? '-left-5 top-1/2 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <img src="@/assets/Prev.svg" alt="" class="h-2 w-1 text-current" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
