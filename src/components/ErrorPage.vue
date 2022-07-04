<template>
    <section class="w-full bg-bgSection h-screen overflow-y-scroll">
        <HeaderStyleVue>الرئيسية</HeaderStyleVue>
        <div>
            <input type="text" placeholder="البحث عن شريك..."  v-model="search" class="h-16 py-5 pr-6 bg-white w-full mt-16"/>
        </div>
        <div class="container mx-auto px-4 h-auto flex flex-col justify-center items-center mt-24 mb-24">
            <div>
                <img src="../assets/error.svg"/>
            </div>
            <p class="mt-8 mb-9">
            عفوا نتائج البحث لديك غير  متوفرة
            </p>
            <MainButtonVue class="text-white w-full">معاودة البحث</MainButtonVue>
        </div>
        <FooterStyleVue class="text-itemColor"/>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import FooterStyleVue from "./FooterStyle.vue";
import MainButtonVue from "./Buttons/MainButton.vue";

export default{
    components:{
        HeaderStyleVue,
        FooterStyleVue,
        MainButtonVue,
    },
}
</script>