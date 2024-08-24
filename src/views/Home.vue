<template>
  <div class="w-full">
    <div class="w-full">
      <Slider />
    </div>
    <div class="grid gap-10 pb-16">
      <div class="px-16 pt-16">
        <div class="flex justify-between items-center pb-10">
          <h2 class="font-medium" style="font-size: 24px">Live channels</h2>
          <DropDownMenu />
        </div>
        <div class="w-full grid grid-cols-4 gap-8 justify-center items-center">
          <div v-for="(item, index) in live_channels" :key="index" class="card w-[1/4] rounded-[30px] justify-center items-start">
            <img :src="item.img" alt="" class="rounded-t-[30px]">
            <div class="px-6 pt-6">
              <h2 class="font-medium" style="font-size: 18px">{{ item.title }}</h2>
            </div>
            <div class="px-6 py-4 flex items-center">
              <Avatar class="h-[32px] w-[32px]">
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div class="pl-2">
                <p class="flex items-center font-medium" style="font-size: 13px">{{ item.name_channel }}</p>
                <p class="flex items-center font-medium" style="font-size: 12px; color: #808191">{{ item.game }}</p>
              </div>
            </div>
            <div class="w-full h-[1px] bg-[#F0F3F6]" />
              <div class="flex items-center justify-between p-6">
                <img src="@/assets/tag.svg" alt="">
                <div class="flex">
                  <img src="../assets/dotblue.svg" alt="" class="pr-2">
                  <p class="font-medium" style="font-size: 12px; color: #808191">{{ item.spectators }}K watching</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="px-16">
        <div class="p-8 card rounded-[30px]">
          <h2 class="font-medium" style="font-size: 18px">From Channels You Follow</h2>
          <div class="grid grid-cols-8 gap-8">
            <div class="pt-10 pb-2" v-for="(item, index) in follow_channels" :key="index">
                <div class="flex justify-center">
                  <Avatar class="h-[62px] w-[62px]">
                    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <p class="font-medium text-[13px] text-center pt-4">{{item.name}}</p>
                <p class="font-medium text-[13px] text-[#808191] text-center pt-2">{{item.last_active}}</p>

            </div>
          </div>
        </div>
      </div>
      <div class="px-16">
        <div class="pt-2">
          <h2 class="font-medium pb-10" style="font-size: 24px">Popular Categories</h2>
          <div class="grid grid-cols-2 h-[700px] gap-8">
            <div class="h-full relative rounded-[30px] overflow-hidden">
              <img :src="popular_categories[0].img" alt="" class="w-full h-full object-cover">
              <div class="absolute bottom-10 left-10 z-10">
                <div class="grid gap-2">
                  <div class="flex gap-1">
                    <div class="" v-for="(item, index) in popular_categories[0].categories" :key="index">
                      <p class="text-white text-[13px] font-bold px-5 py-1 bg-[#6C5DD3] bg-opacity-50 rounded-[8px]">{{ item }}</p>
                    </div>
                  </div>
                  <h3 class="font-medium text-[24px] text-white">{{popular_categories[0].game}}</h3>
                  <div class="flex gap-2 pb-2">
                    <img class="w-[8px]" src="@/assets/dotgreen.svg" alt="">
                    <p class="font-medium w-fit text-white text-[12px]">{{popular_categories[0].viewers}}  Viewers</p>
                  </div>
                  <div class="py-4 px-11 w-fit bg-[#6C5DD3] rounded-[20px] font-bold text-[14px] text-white">
                    Follow
                  </div>
                </div>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent via-transparent"/>
            </div>
            <div class="grid gap-8">
              <div class="grid h-1/3 w-full" v-for="(index) in 3" :key="index">
                <div class="card flex p-2 h-full items-center rounded-[30px]">
                  <img :src="popular_categories[index].img" alt="" class="w-[240px] h-[188px] object-cover rounded-[25px]">
                  <div class="pl-6">
                    <p class="py-1 px-5 w-fit bg-[#6C5DD3] bg-opacity-10 rounded-[10px] font-bold text-[#3F8CFF] text-[13px] mb-2">Shooter</p>
                    <h3 class="font-medium mb-2">Fortnite</h3>
                    <div class="flex gap-2 mb-3">
                      <img src="@/assets/dotgreen.svg" alt="">
                      <p class="font-medium w-fit text-[#808191] text-[12px]">{{popular_categories[index].viewers}}  Viewers</p>
                    </div>
                    <div class="py-4 px-11 bg-[#E4E4E4] bg-opacity-50 rounded-[20px] font-bold text-[14px]">
                      Follow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-16">
        <div class="flex justify-between items-center pb-10">
          <h2 class="font-medium" style="font-size: 24px">Recommended Videos</h2>
          <DropDownMenu />
        </div>
        <div class="w-full grid grid-cols-4 gap-8 justify-center items-center">
          <div v-for="(item, index) in live_channels" :key="index" class="card w-[1/4] rounded-[30px] justify-center items-start">
            <img :src="item.img" alt="" class="rounded-t-[30px]">
            <div class="px-6 pt-6">
              <h2 class="font-medium" style="font-size: 18px">{{ item.title }}</h2>
            </div>
            <div class="px-6 py-4 flex items-center">
              <Avatar class="h-[32px] w-[32px]">
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div class="pl-2">
                <p class="flex items-center font-medium" style="font-size: 13px">{{ item.name_channel }}</p>
                <p class="flex items-center font-medium" style="font-size: 12px; color: #808191">{{ item.game }}</p>
              </div>
            </div>
            <div class="w-full h-[1px] bg-[#F0F3F6]" />
            <div class="flex items-center justify-between p-6">
              <img src="@/assets/tag.svg" alt="">
              <div class="flex">
                <img src="../assets/dotblue.svg" alt="" class="pr-2">
                <p class="font-medium" style="font-size: 12px; color: #808191">{{ item.spectators }}K watching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from '@/components/Slider.vue'
import DropDownMenu from "@/components/DropDownMenu.vue";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const live_channels = [
  {
    title: '2020 World Champs Gaming Warzone',
    img: new URL('@/assets/channels/1.png', import.meta.url).href,
    name_channel: 'Tam Tran ',
    game: 'Call of Duty®',
    spectators: 10
  },
  {
    title: 'Team Flash vs. Saigon Phantom',
    img: new URL('@/assets/channels/2.png', import.meta.url).href,
    name_channel: 'Dash UI8 ',
    game: 'Garena of Valor',
    spectators: 10
  },
  {
    title: '2020 World Champs Gaming Warzone',
    img: new URL('@/assets/channels/3.png', import.meta.url).href,
    name_channel: 'UI8 Gaming ',
    game: 'Call of Duty®',
    spectators: 10
  },
  {
    title: '2020 World Champs Gaming Warzone',
    img: new URL('@/assets/channels/4.png', import.meta.url).href,
    name_channel: 'Gabriel Erickson ',
    game: 'Garena Free Fire',
    spectators: 10
  }
]

const follow_channels = [
  {
    name: 'Gabriel Erickson',
    last_active: '14m ago'
  },
  {
    name: 'Gabriel Erickson ',
    last_active: '14m ago'
  },
  {
    name: 'Gabriel Erickson ',
    last_active: '14m ago'
  },
  {
    name: 'Gabriel Erickson ',
    last_active: '14m ago'
  },
  {
    name: 'Gabriel Erickson ',
    last_active: '14m ago'
  },
  {
    name: 'Gabriel Erickson ',
    last_active: '14m ago'
  },
  {
    name: 'Gabriel Erickson ',
    last_active: '14m ago'
  },
  {
    name: 'Gabriel Erickson ',
    last_active: '14m ago'
  }
]

const popular_categories = [
  {
    img: new URL('@/assets/PopularCategories/1.png', import.meta.url).href,
    viewers: '1.3k',
    categories: ['MOBA', 'ESport'],
    game: 'League of Legends®'
  },
  {
    img: new URL('@/assets/PopularCategories/2.png', import.meta.url).href,
    viewers: '1.3k',
    categories: ['Shooter'],
    game: 'Fortnite'
  },
  {
    img: new URL('@/assets/PopularCategories/3.png', import.meta.url).href,
    viewers: '1.3k',
    categories: ['Shooter'],
    game: 'Call of Duty'
  },
  {
    img: new URL('@/assets/PopularCategories/4.png', import.meta.url).href,
    viewers: '1.3k',
    categories: ['Shooter'],
    game: 'Call of Duty'
  },
]
</script>

<style scoped>
.card {
  box-shadow:  0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>