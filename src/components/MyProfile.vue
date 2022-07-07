<template>
    <section class="w-full h-screen bg-white overflow-y-scroll">
        <HeaderStyleVue>
            الملف الشخصي
        </HeaderStyleVue>
        <div class=" flex flex-col justify-center mt-8 mb-2 bg-mainColor px-4 py-9">
            <div class="w-full flex justify-center">
                <div class="border-4 border-secondColor border-solid w-32 h-32 rounded-full flex justify-center items-center">
                    <div class=" w-28 h-28 bg-secondColor rounded-full border-0 border-mainColor border-solid flex justify-center items-center">
                    <img src="../assets/Single-Female.svg" class="w-11 h-11"/></div>
                </div>
            </div>
            <div class="text-center mt-3 mb-7">
                <h2 class="font-bold text-xl text-white">أسماء الزهراني</h2>
                <div class="flex justify-center text-TextColor mt-2">
                    <img src="../assets/tel.svg"/>
                    <a href="tel:+05234576891" class="mr-2">05234576891</a>
                </div>
            </div>
            <div class="flex justify-between">
                <ButtonLoginVue  @click="isShow = !isShow" class="flex items-center justify-center font-bold text-sm text-mainColor py-2 px-4">
                    <img src="../assets/1.svg" class="ml-1"/>
                    البريد الوارد
                <p class="mr-1">20</p>
                </ButtonLoginVue> 
                <MainButtonVue class="flex bg-profileButton px-4 py-2 text-TextColor">
                    <img src="../assets/send.svg" class="ml-1 "/>
                    الدعوات  المرسلة
                   <p class="mr-1">20</p>
                </MainButtonVue>          
            </div>
        </div>
        <div class="container mx-auto px-4">
            <div class="mt-4 mb-6">
                <h2 class="mb-3 text-sm font-bold">اكمال الملف الشخصي</h2>
                <div class="shell relative h-3 w-full rounded-xl bg-TextColor">
                    <div class="bar absolute top-0 right-0 h-3 rounded-xl bg-mainColor" :style="{ width: progress + '%' }">
                    <span class="absolute top-3 left-0 text-black font-bold">{{ progress }}%</span>
                    </div>
                </div>
            </div>
        </div>
            <div 
                class="w-full" 
                v-for="info in information" 
                :key="info.id"
            >
                <a class="flex justify-between font-bold py-4 px-7  border-bg-border border-b border-solid bg-white" :href="info.src">
                    <p class="font-bold text-sm">{{info.title}}</p>
                    <fa icon="chevron-left" class="text-Graytext"/>
                </a>
            </div>
        <FooterStyleVue/>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import ButtonLoginVue from "./Buttons/ButtonLogin.vue";
import MainButtonVue from "./Buttons/MainButton.vue";
import FooterStyleVue from "./FooterStyle.vue";
export default{
    components:{
        HeaderStyleVue,
        ButtonLoginVue,
        MainButtonVue,
        FooterStyleVue
    },
    data() {
        return {
            progress: 90,
            isShow: false,
            visible: true,
            information:[
                {
                    id: 1,
                    title: 'المعلومات الشخصية',
                    details:[
                        {
                            name:'الطول',
                            desc:'170'
                        },
                        {
                            name:'الوزن',
                            desc:'90'
                        },
                        {
                            name:'لون الشعر',
                            desc:'أسود'
                        },
                        {
                            name:'لون العيون',
                            desc:'أحضر'
                        },
                        {
                            name:'لون البشرة',
                            desc:'قمحي'
                        },
                    ],
                    src: ('/ProfileInformation'),

                },
                {
                    id: 2,
                    title: 'الحالة الصحية',
                    details:[
                        {
                            name:'الطول',
                            desc:'170'
                        },
                        {
                            name:'الوزن',
                            desc:'90'
                        },
                    ],
                    src: (''),

                },
               {
                    id: 3,
                    title: 'الحالة الاجتماعية',
                    details:[
                        {
                            name:'الطول',
                            desc:'170'
                        },
                        {
                            name:'الوزن',
                            desc:'90'
                        },
                    ],
                    src: (''),

                },
                {
                    id: 4,
                    title: 'قبلي / ــة',
                    details:[
                        {
                            name:'الطول',
                            desc:'170'
                        },
                        {
                            name:'الوزن',
                            desc:'90'
                        },
                    ],
                    src: (''),

                },
                {
                    id: 4,
                    title: 'التنبيهات التفاعلية',
                    details:[
                        {
                            name:'الطول',
                            desc:'170'
                        },
                        {
                            name:'الوزن',
                            desc:'90'
                        },
                    ],
                    src: ('/InteractiveNotifications'),

                },
                {
                    id: 4,
                    title: 'الدفع الالكتروني',
                    details:[
                        {
                            name:'الطول',
                            desc:'170'
                        },
                        {
                            name:'الوزن',
                            desc:'90'
                        },
                    ],
                    src: ('/Payment'),

                },
            ],
        }
    },
    methods: {
        toggle(key) {
            var vm = this;
            if (!vm.information[key].visible) {
                vm.information[key].visible = true;
            } else  {
                vm.information[key].visible = false;
            }
        },
    },
}
</script>
<style scoped>
.bar {
  width: 15px;
}
</style>