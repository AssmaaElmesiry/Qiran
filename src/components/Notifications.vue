<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="w-full h-screen">
        <HeaderStyleVue>التنبيهات</HeaderStyleVue>
        <div class="">
            <div class="w-full flex justify-end border-b border-bg-border px-4">
                <button class="py-4 w-full text-end text-xs font-bold" @click="removeElement">
                    مسح الكل
                </button>            
            </div>
            <ul class="px-4">

                <li v-for="(item, index) in notifications" :key="index" class="flex justify-between py-5 border-b border-bg-border">
                    <div class="flex">
                        <div class="w-16 h-16 bg-bgItem flex justify-center items-center rounded-full ml-3">
                            <img :src="item.img"/>
                        </div>
                        <div>
                            <h2 class="font-bold text-sm mb-1">{{item.name}}</h2>
                            <p class="font-bold text-xs mb-1">{{item.info}}</p>
                            <span class="text-TextSpan text-xs">{{item.date}}</span>
                        </div>
                    </div>
                    <div class="w-1/4 flex justify-end items-baseline" @click="del(index)">
                        <img src="../assets/delete.svg"/>
                    </div>
                </li>
            </ul>
        </div>
        <FooterStyleVue/>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import FooterStyleVue from "./FooterStyle.vue";
import Female from "../assets/Single-Female.svg"
import card from "../assets/card.svg";
import layer1 from "../assets/layer1.svg"
import file from "../assets/file.svg"
export default{
    components:{
        HeaderStyleVue,
        FooterStyleVue
    },
    data() {
        return {
            notifications:[
                {
                    id: 1,
                    img: Female,
                    name: 'أسماء الزهراني',
                    info: 'قامت بالموافقة على طلبكم',
                    date: 'الإثنين، 22 ابريل 2022 ٠٨:١٣ م'
                },
                {
                    id: 2,
                    img: card,
                    name: 'تمت عملية الدفع بنجاح',
                    info: 'الدفع عن طريق مدى',
                    date: 'الإثنين، 22 ابريل 2022 ٠٨:١٣ م'
                },
                {
                    id: 3,
                    img: layer1,
                    name: 'تم التسجيل بنجاح',
                    info: 'تمت عملية التسجيل لديك بنجاح',
                    date: 'الإثنين، 22 ابريل 2022 ٠٨:١٣ م'
                },
                {
                    id: 4,
                    img: file,
                    name: 'الملف الشخصي',
                    info: 'ملفك الشخصي لا يحتوى على معلومات كاملة',
                    date: 'الإثنين، 22 ابريل 2022 ٠٨:١٣ م'
                },
            ]
        }
    },
    methods: {
        del (index) {
            this.notifications.splice(index, 1)
        },
        removeElement(index) {
            this.notifications.splice(index);
        },

    }
}
</script>