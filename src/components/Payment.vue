<template>
    <section class="w-full bg-bgSection h-screen">
        <HeaderStyleVue>طرق الدفع</HeaderStyleVue>
        <div class="container mx-auto px-4 mt-16 pb-5">
            <div class="pt-6 pr-8 border bg-white mt-20 pb-5">
                <img src="../assets/mada.png" class="mb-4"/>
                <p class="font-medium text-base">تم دفع رسوم 100 ريال سعودي</p>
            </div>
        </div>
        <FooterStyleVue/>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import FooterStyleVue from "./FooterStyle.vue";
export default{
    components:{
        HeaderStyleVue,
        FooterStyleVue
    }
}
</script>