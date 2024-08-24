<template>
  <div class="flex">
    <div :class="['border-r transition-all duration-300', { 'p-4': isMenuCollapsed, 'w-64 p-5': !isMenuCollapsed }]">
      <div class="flex w-full justify-center h-20 gap-10">
        <div v-if="!isMenuCollapsed" class="flex items-center">
          <img src="@/assets/LogoGame.svg" alt="" />
          <div  class="pl-1 font-semibold" style="font-size: 24px">Unity.</div>
        </div>
        <div class="flex items-center cursor-pointer" @click="toggleMenu">
          <img class="" src="@/assets/BurgerMenu.svg" alt="">
        </div>
      </div>
      <div class="grid gap-8 w-full">
        <div>
          <p v-if="!isMenuCollapsed" class="font-medium color-grey pt-3 pb-4 pl-5" style="font-size: 12px">New Feeds</p>
          <div class="color-grey">
            <RouterLink
                v-for="(item, index) in nav_list"
                :key="index"
                :to="item.url"
                class="transition-all duration-500"
                :class="[
                    'nav-item flex gap-4 parent cursor-pointer hover:text-white',
                    { 'justify-center items-center w-[56px] h-[56px]': isMenuCollapsed },
                    isActive(item.url) ? 'active' : ''
                ]"
            >
              <component :is="item.icon" class="icon" />
              <p v-if="!isMenuCollapsed" class="flex items-center font-semibold" style="font-size: 14px">{{ item.name }}</p>
            </RouterLink>
          </div>
        </div>
        <div v-if="!isMenuCollapsed" class="px-5">
          <div class="h-px bg-[#E4E4E4]" />
        </div>
        <div>
          <p v-if="!isMenuCollapsed" class="font-medium color-grey pb-4 pl-5" style="font-size: 12px">Following</p>
          <div class="color-grey">
            <div
                v-for="(user, index) in users"
                :key="index"
                class="transition-all duration-500"
                :class="['nav-item flex gap-4 parent cursor-pointer hover:text-white', { 'justify-center items-center w-[56px] h-[56px]': isMenuCollapsed }]"
            >
              <Avatar class="h-[24px] w-[24px]">
                <AvatarImage :src="user.image" alt="user.name" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p v-if="!isMenuCollapsed" class="flex items-center font-semibold" style="font-size: 14px">{{ user.name }}</p>
            </div>
          </div>
        </div>
        <div v-if="!isMenuCollapsed" class="px-5">
          <div class="h-px bg-[#E4E4E4]" />
        </div>
        <div>
          <p v-if="!isMenuCollapsed" class="font-medium color-grey pt-3 pb-4 pl-5" style="font-size: 12px">Unity Gaming</p>
          <div class="color-grey">
            <div class="transition-all duration-500" :class="['nav-item flex gap-4 parent cursor-pointer hover:text-white', { 'justify-center items-center w-[56px] h-[56px]': isMenuCollapsed }]">
              <component :is="IChat" class="icon" />
              <p v-if="!isMenuCollapsed" class="flex items-center font-semibold" style="font-size: 14px">Chat</p>
            </div>
            <div class="transition-all duration-500" :class="['nav-item flex gap-4 parent cursor-pointer hover:text-white', { 'justify-center items-center w-[56px] h-[56px]': isMenuCollapsed }]">
              <component :is="ISetting" class="icon" />
              <p v-if="!isMenuCollapsed" class="flex items-center font-semibold" style="font-size: 14px">Setting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="w-full py-7 px-16 flex items-center justify-between h-[111px] border-b">
        <div class="flex items-center gap-40">
          <Popover v-model:open="openFrameworks">
            <PopoverTrigger as="div">
              <div
                  role="combobox"
                  class="w-[200px] flex items-center justify-between cursor-pointer"
              >
                <img src="@/assets/Discovery.svg" alt="" />
                <p class="font-semibold pl-4 color-grey" style="font-size: 14px">Discovery</p>
                <img class="" src="@/assets/small-right.svg" alt="" />
              </div>
            </PopoverTrigger>
            <PopoverContent class="w-[200px] p-0">
              <Command>
                <CommandGroup>
                  <CommandItem
                      v-for="framework in filteredFrameworks"
                      :key="framework.value"
                      :value="framework.value"
                      @select="selectFramework(framework)"
                  >
                    {{ framework.label }}
                  </CommandItem>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <div class="relative w-full max-w-sm items-center mr-8">
            <Input id="search" type="text" placeholder="Search..." class="pl-10" style="border-radius: 100px" />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
              <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center w-[300px] pr-14">
          <img src="@/assets/Plus.svg" alt="" />
          <img src="@/assets/Chat.svg" alt="" />
          <img src="@/assets/Notification.svg" alt="" />
        </div>
        <div class="flex justify-between w-[240px]" v-if="loggedIn === 'true'">
          <div class="">
            <Popover v-model:open="openNavUser">
              <PopoverTrigger as="div">
                <div class="flex gap-4 items-center">
                  <Avatar class="h-[48px] w-[48px]">
                    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p class="text-[14px] font-semibold">Tam Tran</p>
                    <p class="text-[13px] font-medium color-grey">Free account</p>
                  </div>
                  <img src="@/assets/small-up-down.svg" alt="">
                </div>
              </PopoverTrigger>
              <PopoverContent class="w-[200px] p-0">
                <Command>
                  <CommandGroup>
                    <CommandItem
                        v-for="item in userNavigation"
                        :key="item.value"
                        :value="item.value"
                        @select="selectUserNavigation(item)"
                        @click="item.value()"
                    >
                      {{ item.label }}
                    </CommandItem>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <router-link to="/login" class="color-grey cursor-pointer w-[240px] text-center" v-if="loggedIn === 'false'">
          Login
        </router-link>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from '@radix-icons/vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRoute } from "vue-router";

import {
  Command,
  CommandGroup,
  CommandItem
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import IGame from '@/components/IGame.vue';
import IActivity from '@/components/IActivity.vue';
import IProfile from "@/components/IProfile.vue";
import IDocument from "@/components/IDocument.vue"
import IVideo from '@/components/IVideo.vue';
import ISetting from '@/components/ISetting.vue';
import IChat from '@/components/IChat.vue';

const nav_list = [
  {
    name: 'New Feed',
    icon: IGame,
    url: '/'
  },
  {
    name: 'Trending',
    icon: IActivity,
    url: '/trending'
  },
  {
    name: 'Following',
    icon: IProfile,
    url: '/following'
  },
  {
    name: 'Your Videos',
    icon: IDocument,
    url: '/videos'
  },
  {
    name: 'Playlist',
    icon: IVideo,
    url: '/playlist'
  }
];

const route = useRoute();

const isActive = (url) => {
  return route.path === url;
};

const users = [
  {
    name: 'Dylan Hodges',
    image: 'https://github.com/radix-vue.png'
  },
  {
    name: 'Vincent Parks',
    image: 'https://github.com/radix-vue.png'
  },
  {
    name: 'Richard Bowers',
    image: 'https://github.com/radix-vue.png'
  },
  {
    name: 'Isaac Lambert',
    image: 'https://github.com/radix-vue.png'
  },
  {
    name: 'Lillie Nash',
    image: 'https://github.com/radix-vue.png'
  },
  {
    name: 'Edith Cain',
    image: 'https://github.com/radix-vue.png'
  },
  {
    name: 'Jerry Sherman',
    image: 'https://github.com/radix-vue.png'
  }
];

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

const openFrameworks = ref(false);
const openNavUser = ref(false);
const value = ref('');
const searchQuery = ref('');
const loggedIn = ref(localStorage.getItem('loggedIn'));

const isMenuCollapsed = ref(false);

const logout = () => {
  localStorage.setItem('loggedIn', 'false');
  loggedIn.value = 'false';
}

const userNavigation = [
  { value: logout, label: 'Выход' }
];

const filteredFrameworks = computed(() => {
  if (!searchQuery.value) return frameworks;
  return frameworks.filter(framework =>
      framework.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectedFramework = computed(() => {
  return frameworks.find(framework => framework.value === value.value);
});

const selectFramework = (framework) => {
  value.value = value.value === framework.value ? '' : framework.value;
  openFrameworks.value = false;
};

const selectUserNavigation = (nav) => {
  value.value = value.value === nav.value ? '' : nav.value;
  openNavUser.value = false;
}

const toggleMenu = () => {
  isMenuCollapsed.value = !isMenuCollapsed.value;
};
</script>

<style scoped>
.parent {
  --icon-color: #808191;
}

.parent:hover {
  --icon-color: #ffffff;
}

.color-grey {
  color: #808191;
}

.nav-item {
  padding: 16px 20px;
  border-radius: 0.7rem;
}

.nav-item:hover {
  background-color: #6C5DD3;
}

.active {
  background-color: #6C5DD3;
  color: white;
  --icon-color: #ffffff;
}
</style>
