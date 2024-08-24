<template>
  <div class="login grid grid-cols-2 items-center w-full min-h-screen h-min">
    <div class="flex justify-center w-full relative z-10">
      <div class="">
        <div class="flex items-center gap-5 pb-6">
          <img class="w-[52px] h-[52px]" src="@/assets/LogoGame.svg" alt="">
          <h2 class="text-[45px] font-semibold text-white">Unity.</h2>
        </div>
        <p class="text-[16px] font-semibold text-white pb-8">A Video Gaming Platfrom UI Kit</p>
        <div class="grid gap-4">
          <div class="flex items-center bg-opacity-80 bg-[#1B1D21] rounded-[15px] overflow-hidden" v-for="(item, index) in card_game" :key="index">
            <img class="h-[117px] rounded-[15px]" :src="item.img" alt="">
            <div class="py-5 px-6">
              <p class="font-medium text-[13px] text-white pb-1">{{item.game}}</p>
              <p class="font-medium text-[12px] text-[#808191] pb-2">{{item.title}}</p>
              <div class="flex gap-2">
                <img src="@/assets/dotorange.svg" alt="">
                <p class="font-medium text-[12px] text-[#808191]">{{item.spectators}} viewers</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3 pt-5">
          <img src="@/assets/PlusLogin.svg" alt="">
          <p class="text-white text-[14px] font-bold">Discover more</p>
        </div>
      </div>
    </div>
    <div class=" flex justify-start w-full">
      <div class="card flex justify-center bg-white rounded-[35px] p-10 w-fit relative z-10">
        <div
            class="exit-button absolute top-6 right-6 rounded-[100px] w-[38px] h-[38px] flex justify-center items-center"
            @click="exit()"
        >
          <img src="@/assets/arrow-right.svg" alt="">
        </div>
        <div class="w-[380px]">
          <h2 class="font-semibold text-[40px] pb-5">Sign up</h2>
          <div class="flex gap-4 pb-8">
            <p class="font-medium text-[12px] text-[#808191]">Already a user</p>
            <p class="font-medium text-[12px] text-[#3F8CFF] cursor-pointer" @click="signin">Login now</p>
          </div>
          <div class="grid gap-6">
            <div class="flex gap-4">
              <div>
                <p class="font-medium text-[12px] text-[#808191] pb-4">First name</p>
                <Input class="bg-[#E4E4E4] bg-opacity-50 h-[56px]" type="text" />
              </div>
              <div>
                <p class="font-medium text-[12px] text-[#808191] pb-4">Last name</p>
                <Input class="bg-[#E4E4E4] bg-opacity-50 h-[56px]" type="text" />
              </div>
            </div>
            <div>
              <p class="font-medium text-[12px] text-[#808191] pb-4">Usename or email</p>
              <Input class="bg-[#E4E4E4] bg-opacity-50 h-[56px]" type="email" />
            </div>
            <div>
              <p class="font-medium text-[12px] text-[#808191] pb-4">Password</p>
              <Input class="bg-[#E4E4E4] bg-opacity-50 h-[56px]" type="password"/>
            </div>
            <Button class="bg-[#6C5DD3] text-[14px] font-bold rounded-[15px] h-[56px]" @click="login">Continue</Button>
            <p class="font-medium text-[12px] text-[#808191]">Or continue with</p>
            <Button class="bg-[#3F8CFF] text-[14px] font-bold rounded-[15px] h-[56px]">Google</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import {useRouter} from "vue-router";

const router = useRouter()

const card_game = [
  {
    img: new URL('@/assets/LoginImg/1.png', import.meta.url).href,
    title: 'Online Game',
    game: 'League of Legends®',
    spectators: '2.8K'
  },
  {
    img: new URL('@/assets/LoginImg/2.png', import.meta.url).href,
    title: 'Shooting',
    game: 'Call of Duty®',
    spectators: '2.8K'
  },
  {
    img: new URL('@/assets/LoginImg/3.png', import.meta.url).href,
    title: 'eSport',
    game: 'The Dota 2',
    spectators: '2.8K'
  },
]

const exit = () => {
  router.back()
}

const login = () => {
  localStorage.setItem('loggedIn', 'true')
  router.push('/')
}

const signin = () => {
  router.push('/login')
}
</script>

<style scoped>
.login {
  background-image: url('@/assets/bg-singup.png');
  background-size: cover;
  background-position-x: center;
  box-shadow: inset 0 0 1000px rgba(0, 0, 0, 1);
}
.login::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.3); /* Полупрозрачный черный цвет */
  z-index: 1;
  height: 100vh;
}

.card {
  box-shadow:  0 16px 20px rgba(0, 0, 0, 0.6);
}

.exit-button {
  cursor: pointer;
  box-shadow:  6px 6px 20px rgba(0, 0, 0, 0.07);
}
</style>