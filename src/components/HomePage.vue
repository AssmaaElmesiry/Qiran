<template>
    <section class="w-full bg-bgSection h-full ">
        <HeaderStyleVue>الرئيسية</HeaderStyleVue>
        <div>
            <input type="text" placeholder="البحث عن شريك..."  v-model="search" class="h-16 py-5 pr-6 bg-white w-full mt-16"/>
        </div>
        <div class="container mx-auto px-4 h-screen overflow-y-scroll pb-28">
            <div class="mt-5 mb-4 bg-mainColor flex p-4">
                <div class=" bg-secondColor flex p-3"><img src="../assets/rings.svg" class="w-10"/></div>
                <div class="mr-4">
                    <p class="text-white text-sm font-bold text-justify leading-relaxed">تمكين الراغبين في الزواج من الحصول على شريك الحياة بكل سهولة ويسر</p>
                </div>
            </div>
            <div class="bg-white pt-4 pr-5 pb-5">
                <div class="flex items-center">
                    <div class="bg-mainColor w-14 h-14 rounded-full flex justify-center items-center ml-6"><img src="../assets/hand.svg"/></div>
                    <h2 class="font-bold text-base">تقدم منصة قران</h2>
                </div>
                <ul class="mt-4">
                    <li v-for="service in services" :key="service" class="flex items-center text-xs font-bold mb-7"><span></span>{{service.item}}</li>
                </ul>
            </div>
            <div class="mt-6">
                <StorySwiper/>
            </div>
        </div>
        <FooterStyleVue class="text-itemColor"/>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import StorySwiper from './StorySwiper.vue';
import FooterStyleVue from "./FooterStyle.vue";
export default{
    data() {
        return {
            search: '',
            services:[
                {id: 1, item:'عرض الحالات الراغبة في الزواج من الجنسين'},
                {id: 2, item:'عرض صوتي ومرئي لمجموعة من قصص النجاح في الحياة الزوجية'},
                {id: 3, item:'عرض يبين الحالات المسجلة وحاالت التوافق'},
                {id: 4, item:'عرض لمجموعة من اإلرشادات والتوجيهات الدينية'},
                {id: 5, item:'والاجتماعية والنفسية والتربوية المتعلقة بالزواج'},
                {id: 6, item:'خدمة االتصال واالستفسار'},
                {id: 7, item:'خدمة الشكاوى والمقترحات'},
            ]
        }
    },
    components:{
        HeaderStyleVue,
        StorySwiper,
        FooterStyleVue,
    },
}
</script>
<style scoped>
ul li span{
    display: flex;
    width: 7px;
    height: 7px;
    background-color: #744966;
    border-radius: 50%;
    margin-left: 10px;
}
</style>