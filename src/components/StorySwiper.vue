<template>
    <div class="relative">
        <h2 class="absolute top-0 text-sm font-bold">قصص نجاح</h2>
        <swiper
        :slides-per-view="2"
        :space-between="30"
        :modules="modules"
        :pagination="{
          clickable: true,
        }"
        class="pt-14 pb-24"
        >
        
        <swiper-slide class="bg-white flex w-52">
          <div class="py-9 w-full flex justify-center items-center">
            <div>
              <div  class="bg-bgItem rounded-full border-4 border-white border-solid w-12 h-12 flex items-center justify-center">
                <img src="../assets/Single-Female.svg" class=""/>
              </div>
              <p class="text-center text-sm text-mainColor">رنا</p>
            </div>
            <div>
              <div  class="bg-bgItem rounded-full border-4 border-white border-solid w-12 h-12 flex items-center justify-center -mr-3">
                <img src="../assets/Single-Male.svg" class=""/>
              </div>
              <p class="text-center text-sm text-mainColor">احمد</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="bg-white flex w-52">
          <div class="py-9 w-full flex justify-center items-center">
            <div>
              <div  class="bg-bgItem rounded-full border-4 border-white border-solid w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src="../assets/Single-Female.svg" class=""/>
              </div>
              <p class="text-center text-sm text-mainColor">رنا</p>
            </div>
            <div>
              <div  class="bg-bgItem rounded-full border-4 border-white border-solid w-12 h-12 flex items-center justify-center overflow-hidden -mr-3">
                <img src="../assets/Single-Male.svg" class=""/>
              </div>
              <p class="text-center text-sm text-mainColor">احمد</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="bg-white flex w-52">
          <div class="py-9 w-full flex justify-center items-center">
            <div>
              <div  class="bg-bgItem rounded-full border-4 border-white border-solid w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src="../assets/Single-Female.svg" class=""/>
              </div>
              <p class="text-center text-sm text-mainColor">رنا</p>
            </div>
            <div>
              <div  class="bg-bgItem rounded-full border-4 border-white border-solid w-12 h-12 flex items-center justify-center overflow-hidden -mr-3">
                <img src="../assets/Single-Male.svg" class=""/>
              </div>
              <p class="text-center text-sm text-mainColor">احمد</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="bg-white flex w-52">
          <div class="py-9 w-full flex justify-center items-center">
            <div>
              <div  class="bg-bgItem rounded-full border-4 border-white border-solid w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src="../assets/Single-Female.svg" class=""/>
              </div>
              <p class="text-center text-sm text-mainColor">رنا</p>
            </div>
            <div>
              <div  class="bg-bgItem rounded-full border-4 border-white border-solid w-12 h-12 flex items-center justify-center overflow-hidden -mr-3">
                <img src="../assets/Single-Male.svg" class=""/>
              </div>
              <p class="text-center text-sm text-mainColor">احمد</p>
            </div>
          </div>
        </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
export default {
    components: {
      Swiper,
      SwiperSlide,
      // eslint-disable-next-line vue/no-unused-components
      Pagination,
    },
    setup() {
      return {
      modules: [Pagination],
    };
    },
  };
</script>
<style>
.swiper-pagination{
  position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: auto !important;
    height: fit-content !important;
}
.swiper-pagination-bullet{
  width: 4px;
  height: 4px;
}
.swiper-pagination-bullet-active{
  background: #744966;
  width: 10px;
  height: 4px;
  border-radius: 2px;
}
</style>
