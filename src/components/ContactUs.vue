<template>
    <section class="w-full h-screen bg-bgSection">
        <HeaderStyleVue>اتصل بنا</HeaderStyleVue>
        <div class="container mx-auto px-4 mt-5">
            <div v-for="item in contactUs" :key="item" class="flex justify-between py-9 bg-white mb-4 px-5">
                <img :src="item.icon"/>
                <p class="text-base font-medium"> {{item.name}} </p>
                <p class="text-base font-medium"> {{item.desc}} </p>
            </div>
            <form class="pt-6">
                <div class="flex flex-col mb-4">
                    <lable class="mb-2">أكتب اسمك : </lable>
                    <input placeholder="اكتب الاسم ثلاثي" type="name" class="px-3 py-4" required>
                </div>
                <div class="flex flex-col mb-4">
                    <lable class="mb-2">رقم الجوال : </lable>
                    <input placeholder="رقم الجوال" type="number" class="pr-3 py-4" required>
                </div>
                <div class="flex flex-col mb-4">           
                    <lable class="mb-2">البريد الالكتروني : </lable>
                    <input placeholder="اكتب البريد الالكتروني" type="email" class="pr-3 py-4" required>
                </div>
                <div class="flex flex-col mb-4">           
                    <lable class="mb-2">تفاصيل الرسالة : </lable>
                    <textarea placeholder="تفاصيل الرسالة" type="email" class="pr-3 py-4" required></textarea>
                </div>
            </form>
        </div>
        <FooterStyleVue />
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import FooterStyleVue from "./FooterStyle.vue";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg"
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
                    icon: mail,
                    name: 'البريد الالكتروني',
                    desc: 'Qiran@gmail.com',
                },
                {
                    id:2,
                    icon: phone,
                    name: 'رقم الجوال',
                    desc: '0123456789236',
                },
            ]
        }
    },
}
</script>