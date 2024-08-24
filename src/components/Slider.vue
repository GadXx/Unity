<template>
  <div class="relative w-full h-full">
    <Carousel
        class="relative w-full h-full"
        @init-api="(val) => emblaMainApi = val"
    >
      <CarouselContent>
        <CarouselItem v-for="(item, index) in slider_items" :key="index">
          <div class="h-full relative">
            <Card class="slider">
              <CardContent class="flex h-[550px] items-center justify-center relative">
                <img :src="item.img" alt="" class="w-full h-full object-cover">
                <div class="absolute z-50 bottom-24 left-24">
                  <img src="@/assets/tag.svg" alt="" class="pb-[5px]">
                  <h2 class="font-medium w-[510px] text-white" style="line-height: 48px; font-size: 32px">{{ item.title }}</h2>
                  <div class="flex items-center gap-4 pt-1 pb-6">
                    <Avatar class="h-[24px] w-[24px]">
                      <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div class="text-white" style="font-size: 14px">League of Legends®</div>
                    <img src="@/assets/divider.svg" alt="" class="">
                    <div class="text-white" style="font-size: 14px">🇺🇸 English</div>
                  </div>
                  <Button class="bg-[#6C5DD3] hover:bg-[#6C5DD3] font-bold py-6 px-10 rounded-xl" style="font-size: 14px">Watch</Button>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent via-transparent"/>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <Carousel
        class="absolute bottom-16 right-36"
        @init-api="(val) => emblaThumbnailApi = val"
    >
      <CarouselContent class="flex gap-1 ml-0 items-center">
        <CarouselItem v-for="(item, index) in slider_items" :key="index" class="pl-0 basis-1/4 cursor-pointer" @click="onThumbClick(index)">
          <div >
            <Card>
              <CardContent class="flex w-[96px] h-[56px] items-center justify-center">
                <img
                    :src="item.img"
                    alt=""
                    class="w-full h-full object-cover rounded-[14px]"
                    :class="index === selectedIndex ? 'border-4 scale-100' : 'scale-90'"
                >
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious @click="onPreviousClick" />
      <CarouselNext @click="onNextClick" />
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { watchOnce } from '@vueuse/core'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

const slider_items = [
  {
    img: new URL('@/assets/slider/img1.png', import.meta.url).href,
    title: 'Renegades vs Chiefs - ESL Pro League Season 16 - Playoffs',
  },
  {
    img: new URL('@/assets/slider/img2.png', import.meta.url).href,
    title: 'Renegades vs Chiefs - ESL Pro League Season 16 - Playoffs',
  },
  {
    img: new URL('@/assets/slider/img3.png', import.meta.url).href,
    title: 'Renegades vs Chiefs - ESL Pro League Season 16 - Playoffs',
  },
  {
    img: new URL('@/assets/slider/img4.png', import.meta.url).href,
    title: 'Renegades vs Chiefs - ESL Pro League Season 16 - Playoffs',
  },
];

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  emblaMainApi.value.scrollTo(index)
}

function onPreviousClick() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  emblaMainApi.value.scrollPrev()
  emblaThumbnailApi.value.scrollPrev()
}

function onNextClick() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  emblaMainApi.value.scrollNext()
  emblaThumbnailApi.value.scrollNext()
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi)
    return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})

watchOnce(emblaThumbnailApi, (emblaThumbnailApi) => {
  if (!emblaThumbnailApi)
    return

  onSelect()
  emblaThumbnailApi.on('select', onSelect)
  emblaThumbnailApi.on('reInit', onSelect)
})
</script>

<style scoped>
.slider img {
  object-position: 0 35%;
}
</style>
