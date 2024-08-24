<template>
  <div class="pl-16 pt-16">
    <div>
      <h2 class="text-[24px] font-medium">Unity Gaming</h2>
      <h3 class="text-[48px] font-semibold pb-8">Trending</h3>
      <div class="relative w-full h-full">
        <Carousel
            class="relative w-full h-full"
            @init-api="(val) => emblaMainApi = val"
        >
          <CarouselContent class="-ml-0 flex space-x-4">
            <CarouselItem v-for="(item, index) in slider_items" :key="index" class="w-2/3 basis-auto rounded-[26px] overflow-hidden">
              <div class="h-full relative">
                <Card class="slider">
                  <CardContent class="flex h-[600px] items-center justify-center relative">
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
      </div>
    </div>
    <div class="flex justify-between pt-16 pb-8">
      <div class="w-2/3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <div class="sort_pointer">All</div>
            <div class="sort_pointer">ESport</div>
            <div class="sort_pointer">Game Online</div>
          </div>
          <div>
            <DropDownMenu />
          </div>
        </div>
        <h2 class="py-8 text-[18px] font-medium">Top Trending Now</h2>
        <div class="gap-6 grid">
          <div
              class="w-full h-[250px] card flex relative p-2"
              v-for="(item, index) in displayed_content"
              :key="index"
          >
            <img
                :src="item.img"
                alt=""
                class="h-full object-cover rounded-[35px] w-[290px]"
            />
            <div class="grid gap-2 px-6 py-6">
              <div class="flex items-center gap-2">
                <img src="@/assets/tag.svg" alt="" />
                <p
                  class="py-1 px-5 w-fit h-fit bg-[#6C5DD3] bg-opacity-10 rounded-[10px] font-bold text-[#3F8CFF] text-[13px]"
                  v-for="(category, index) in item.categories"
                  :key="index"
                >
                  {{category}}
                </p>
              </div>
              <h3 class="font-medium text-[18px] w-3/4">
                {{item.text}}
              </h3>
              <div class="flex items-center gap-3">
                <div class="flex gap-2">
                  <img src="@/assets/dotblue.svg" alt="" />
                  <p class="font-medium text-[12px] text-[#808191]">
                    {{item.viewers}} watching
                  </p>
                </div>
                <div class="flex gap-2">
                  <img src="@/assets/dotgreen.svg" alt="" />
                  <p class="font-medium text-[12px] text-[#808191]">
                    {{item.last_activity}}
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <Avatar class="h-[32px] w-[32px]">
                  <AvatarImage
                      src="https://github.com/radix-vue.png"
                      alt="@radix-vue"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-medium" style="font-size: 13px">
                    {{item.channel}}
                  </p>
                  <p class="font-medium  text-[12px] text-[#808191]">
                    {{item.channel}}
                  </p>
                </div>
              </div>
            </div>
            <div
                class="hover-menu h-fit absolute top-2 right-2 flex flex-col items-center justify-center p-2 bg-[#6C5DD3] rounded-[35px] opacity-0 transition-opacity duration-300"
            >
              <button class="p-6 rounded-[25px] hover:bg-[#CFC8FF] duration-300">
                <img src="@/assets/NavCard/respond-arrow.svg" alt="icon1" class="h-4 w-4" />
              </button>
              <button class="p-6 rounded-[25px] hover:bg-[#CFC8FF] duration-300">
                <img src="@/assets/NavCard/video-playlist.svg" alt="icon2" class="h-4 w-4" />
              </button>
              <button class="p-6 rounded-[25px] hover:bg-[#CFC8FF] duration-300">
                <img src="@/assets/NavCard/favorite.svg" alt="icon3" class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center py-8">
          <div
              class="w-fit px-11 py-4 bg-[#E4E4E4] rounded-2xl font-bold text-[14px] cursor-pointer"
              @click="loadMore"
          >
            Load more
          </div>
        </div>
      </div>
      <div class="w-1/3 pl-8 pt-[94px] grid gap-12 h-fit">
        <div class="">
          <h2 class="text-[18px] font-medium pb-5">Trending Streamers</h2>
          <div v-for="(item, index) in all_streams" :key="index">
            <div class="flex items-center gap-4 py-3">
              <Avatar class="h-[56px] w-[56px]">
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p class="font-medium text-[13px]">
                  {{item.channel}}
                </p>
                <p class="font-medium text-[12px] text-[#808191]">
                  {{item.game}}
                </p>
                <div class="flex items-center gap-2">
                  <img src="@/assets/dotorange.svg" alt="">
                  <p class="font-medium text-[12px] text-[#808191]">{{item.viewers}} viewers</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-start pt-6">
            <div class="w-fit px-11 py-4 bg-[#E4E4E4] rounded-2xl font-bold text-[14px] cursor-pointer">Load more</div>
          </div>
        </div>
        <div class="pr-16">
          <h2 class="text-[18px] font-medium pb-5">Trending Games</h2>
          <div v-for="(item, index) in all_games" :key="index">
            <div class="flex items-center gap-4 py-3">
              <div class="w-[80px] h-[100px] bg-red-500 rounded-[8px] overflow-hidden">
                <img class="w-full h-full object-cover" :src="item.img" alt="">
              </div>
              <div class="w-full">
                <p class="font-medium text-[13px]">
                  {{ item.game }}
                </p>
                <p class="font-medium text-[12px] text-[#808191] w-1/2">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-start pt-6">
            <div class="w-fit px-11 py-4 bg-[#E4E4E4] rounded-2xl font-bold text-[14px] cursor-pointer">Load more</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { watchOnce } from '@vueuse/core'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import DropDownMenu from "@/components/DropDownMenu.vue";

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

const all_content  = [
  {
    img: new URL('@/assets/Trending/1.png', import.meta.url).href,
    text: 'Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE',
    viewers: '2.8K',
    last_activity: '1 week ago',
    channel: 'Gabriel Erickson ',
    game: 'Call of Duty',
    categories: ['Shooter']
  },
  {
    img: new URL('@/assets/Trending/2.png', import.meta.url).href,
    text: 'Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE',
    viewers: '2.8K',
    last_activity: '1 week ago',
    channel: 'Gabriel Erickson ',
    game: 'Call of Duty',
    categories: ['Shooter']
  },
  {
    img: new URL('@/assets/Trending/3.png', import.meta.url).href,
    text: 'New Sub Emotes And Badges! Lets Goooo',
    viewers: '2.8K',
    last_activity: '1 week ago',
    channel: 'Gabriel Erickson ',
    game: 'Call of Duty',
    categories: ['Shooter']
  },
  {
    img: new URL('@/assets/Trending/4.png', import.meta.url).href,
    text: 'Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE',
    viewers: '2.8K',
    last_activity: '1 week ago',
    channel: 'Gabriel Erickson ',
    game: 'Call of Duty',
    categories: ['Shooter']
  },
  {
    img: new URL('@/assets/Trending/5.png', import.meta.url).href,
    text: 'New Sub Emotes And Badges! Lets Goooo',
    viewers: '2.8K',
    last_activity: '1 week ago',
    channel: 'Gabriel Erickson ',
    game: 'Call of Duty',
    categories: ['Shooter']
  },
  {
    img: new URL('@/assets/Trending/6.png', import.meta.url).href,
    text: 'Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE',
    viewers: '2.8K',
    last_activity: '1 week ago',
    channel: 'Gabriel Erickson ',
    game: 'Call of Duty',
    categories: ['Shooter']
  }
]

const all_streams = [
  {
    channel: 'Unity Gaming',
    viewers: '2.8K',
    game: 'Call of Duty'
  },
  {
    channel: 'Daniel Brothers',
    viewers: '2.8K',
    game: 'Call of Duty'
  },
  {
    channel: 'Amazing Channel ',
    viewers: '2.8K',
    game: 'Call of Duty'
  },
  {
    channel: 'Dash UI8',
    viewers: '2.8K',
    game: 'Call of Duty'
  },
  {
    channel: 'Tran Mau Tri Tam',
    viewers: '2.8K',
    game: 'Call of Duty'
  }
]

const all_games = [
  {
    img: new URL('@/assets/rightPanel/img1.png', import.meta.url).href,
    game: 'Call of Duty®',
    text: 'The massive free-to-play experience from the world of Modern Warfare.'
  },
  {
    img: new URL('@/assets/rightPanel/img2.png', import.meta.url).href,
    game: 'Counter-Strike®',
    text: 'Counter-Strike is a series of multiplayer first-person shooter video games'
  },
  {
    img: new URL('@/assets/rightPanel/img3.png', import.meta.url).href,
    game: 'Fortnite®',
    text: 'Live tournaments, match highlights, and your favorite'
  },
  {
    img: new URL('@/assets/rightPanel/img4.png', import.meta.url).href,
    game: 'League of Legends®',
    text: 'League of Legends is a team-based game with over 140 champions.'
  }
]

const page_size = 3; // количество элементов на одной странице
const current_page = ref(1);
const displayed_content = ref(all_content.slice(0, page_size));

// Функция загрузки следующей страницы
function loadMore() {
  const start = current_page.value * page_size;
  const end = start + page_size;
  const more_content = all_content.slice(start, end);

  if (more_content.length > 0) {
    displayed_content.value.push(...more_content);
    current_page.value++;
  }
}

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
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

.space-x-4 > :not(:last-child) {
  margin-right: 16px;
}

.sort_pointer {
  padding: 20px 30px;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  background-color: #6C5DD3;
  color: white;
}

.card {
  cursor: pointer;
  box-shadow:  0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 35px;
  overflow: hidden;
}

.card:hover {
  .hover-menu {
    opacity: 1;
  }
}
</style>