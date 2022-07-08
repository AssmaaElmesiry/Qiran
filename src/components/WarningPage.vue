<template>
    <section class="w-full bg-bgSection h-full ">
        <HeaderStyleVue>الرئيسية</HeaderStyleVue>
        <div class="container mx-auto px-4 h-screen overflow-y-scroll pb-28">
            <div class="mt-5 mb-4 bg-mainColor flex p-4">
                <div class=" bg-secondColor flex p-3"><img src="../assets/rings.svg" class="w-10"/></div>
                <div class="mr-4">
                    <p class="text-white text-sm font-bold text-justify leading-relaxed">تمكين الراغبين في الزواج من الحصول على شريك الحياة بكل سهولة ويسر</p>
                </div>
            </div>
            <div class="mt-28 flex flex-col justify-center items-center ">
                <img src="../assets/warning.svg"/>
                <p class="mt-6 text-colorP text-base font-bold w-56 text-center">الر جاء إتمام عملية الدفع لتتمكن من البحث عن أعضاء</p>
                <MainButtonVue class="text-white text-sm font-bold py-2 w-full mt-11">ادفع الان</MainButtonVue>
            </div>
        </div>

        <FooterStyleVue class="text-itemColor"/>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import MainButtonVue from "./Buttons/MainButton.vue";
import FooterStyleVue from "./FooterStyle.vue";
export default{
    components:{
        HeaderStyleVue,
        MainButtonVue,
        FooterStyleVue,
    },
}
</script>