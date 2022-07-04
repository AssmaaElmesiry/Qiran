<template>
    <section class="w-full h-full bg-bgSection">
        <HeaderStyleVue>اتصل بنا</HeaderStyleVue>
        <div class="container mx-auto px-4 mt-20">
            <div v-for="item in contactUs" :key="item" class="flex justify-between py-9 bg-white mb-4 px-5">
                <img :src="item.icon"/>
                <p class="text-base font-medium"> {{item.name}} </p>
                <p class="text-base font-medium"> {{item.desc}} </p>
            </div>
        </div>
        <FooterStyleVue />
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import FooterStyleVue from "./FooterStyle.vue";
export default{
    components:{
        HeaderStyleVue,
        FooterStyleVue,
    },
    data() {
        return {
            contactUs:[
                {
                    id:1,
                    icon: ('../src/assets/mail.svg'),
                    name: 'البريد الالكتروني',
                    desc: 'Qiran@gmail.com',
                },
                {
                    id:2,
                    icon: ('../src/assets/phone.svg'),
                    name: 'رقم الجوال',
                    desc: '0123456789236',
                },
            ]
        }
    },
}
</script>