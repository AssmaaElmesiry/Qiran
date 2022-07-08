<template>
    <section class="bg-mainColor w-full h-screen overflow-y-scroll">
        <div class="container mx-auto px-9 h-full flex items-center flex-col text-center ">
            <h2 class="text-white text-base font-bold mt-5">تأكيد الحساب</h2>
            <div class="inputs mt-36 flex justify-between">
                <input type="number" class=" w-16 h-16 text-center font-bold text-white bg-SideColor">
                <input type="number" class=" w-16 h-16 text-center font-bold text-white bg-SideColor">
                <input type="number" class=" w-16 h-16 text-center font-bold text-white bg-SideColor">
                <input type="number" class=" w-16 h-16 text-center font-bold text-white bg-SideColor">
            </div>
            <div class=" mt-5 sm:w- w-full">
                <ButtonLoginVue @click="isShow = !isShow" class="mb-9 bg-secondColor w-full text-black font-bold text-sm py-3">تأكيد</ButtonLoginVue>
                <div class="flex justify-between w-full font-bold text-sm text-white">
                    <p>{{ timerCount }}</p>
                    <p>معاودة الارسال</p>
                </div>
            </div>
        </div>
        <Transition :duration="{ enter: 500, leave: 300 }"  name="nested">
            <div v-if="isShow" class="w-full bg-white absolute left-0 right-0 bottom-0 px-6 rounded-t-3xl">
                <div class="w-full flex justify-center mt-11 mb-6"><easy-spinner type="dots" size="55px" color="#4E5A61" class="" /></div>
                <div class="text-center">
                    <h2 class="text-xl font-bold">شكرا لك</h2>
                    <p class="text-base">تم إنشاء حساب الرجاء دفع الرسوم ليتم تأكيده</p>
                </div>
                <div class="flex justify-between my-7">
                    <MainButton @click="goToHome()" class="text-white text-sm font-bold px-12 rounded-sm">لاحقا</MainButton>
                    <MainButton @click="goToPayment()" class="text-white text-sm font-bold px-12 rounded-sm">ادفع الان</MainButton>
                </div>
            </div>
        </Transition>
    </section>
</template>
<script>
import ButtonLoginVue from "../Buttons/ButtonLogin.vue";
import MainButton from "../Buttons/MainButton.vue";
export default{
    components:{
        ButtonLoginVue,
        MainButton,
    },
    data() {
        return {
            timerCount: 30,
            isShow: false,
        }
    },
    watch: {
        timerCount: {
            handler(value) {

                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }

            },
            immediate: true // This ensures the watcher is triggered upon creation
        }
    },
    methods:{
        goToHome(){
            this.$router.push('/homePage'); 
        },
        goToPayment(){
            this.$router.push('/Payment'); 
        }
    }
}
</script>
<style scoped>
.inputs{
    direction: ltr;
    width: 356px;
}
.nested-enter-active >div,
.nested-leave-active >div {
  transition: all 0.3s ease-in-out; 
}

.nested-enter-from >div,
.nested-leave-to >div {
  transform: translateX(30px);
  opacity: 0;
}
</style>