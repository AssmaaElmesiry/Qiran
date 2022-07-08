<script>
import SplashPageVue from "./components/SplashPage.vue";
export default{
  components:{
    SplashPageVue
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
</script>
<template>
  <SplashPageVue :isLoading="isLoading" />
  <RouterView v-if="!isLoading"/>
</template>

<style>
  @import './assets/base.css';
  #app{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    position: relative;
  }
</style>
