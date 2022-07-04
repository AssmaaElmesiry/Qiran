<template>
    <section class="w-full h-screen bg-bgSection">
        <HeaderStyleVue>
            الملف الشخصي
            <div> ddd</div>
        </HeaderStyleVue>
        <div class=" flex flex-col justify-center mt-8 mb-2 bg-mainColor px-4 h-96">
            <div class="flex justify-between">
                <div class="flex ">
                    <img src="../assets/userwhite.svg"/>
                    <p class="text-white text-sm font-medium mr-2">
                        الطائف
                    </p>
                </div>
                <div class="flex ">
                    <img src="../assets/calendarwhite.svg"/>
                    <p class="text-white text-sm font-medium mr-2">
                        20عام
                    </p>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div class="border-4 border-secondColor border-solid w-32 h-32 rounded-full flex justify-center items-center">
                    <div class=" w-28 h-28 bg-secondColor rounded-full border-0 border-mainColor border-solid flex justify-center items-center"><img src="../assets/Single-Female.svg" class="w-11 h-11"/></div>
                </div>
            </div>
            <div class="text-center mt-3 mb-7">
                <h2 class="font-bold text-xl text-white">أسماء الزهراني</h2>
            </div>
            <ButtonLoginVue  @click="isShow = !isShow" class="flex items-center justify-center font-bold text-sm text-mainColor py-2 mb-4">
                ارسال دعوه 
                <img src="../assets/heart.svg" class="mr-1"/>
            </ButtonLoginVue>
        </div>
        <div class="container mx-auto px-4 -mt-14">
            <div 
                class="w-full  mb-5" 
                v-for="(info, index) in information" 
                :key="info.id"
            >
                <div class="flex justify-between font-bold py-4 px-7 bg-white shadow-md" @click="toggle(index)">
                    <h4 class="font-bold text-sm">{{info.title}}</h4>
                    <fa icon="angle-down" class="text-Graytext"/>
                </div>
                <transition name="scale" v-for="item in info.details" :key="item" class="bg-white px-5">
                    <div class="flex justify-between pb-5" v-show="info.visible"  >
                        <p class="font-medium text-sm">{{item.name}}</p><span class="font-medium text-sm"> {{item.desc}}</span>
                    </div>
                </transition>
            </div>
        </div>
        <Transition :duration="{ enter: 500, leave: 300 }"  name="nested">
            <div v-if="isShow" class="w-full absolute left-0 right-0 bottom-0 rounded-t-3xl">
                <div class="bg-bg-details pt-16  rounded-t-3xl">
                    <div class="w-full flex justify-center pt-11 pb-6">
                        <img src="../assets/Email.svg"/>
                    </div>
                    <div class="text-center mt-6 pb-8">
                        <p class="text-base">شكرا لك تم ارسال طلبكم والدفع بنجاح</p>
                    </div>
                </div>
                <div class="flex flex-col py-7 bg-white px-7">
                    <div class="flex">
                        <div class="w-11 h-11 rounded-full bg-secondColor flex justify-center items-center"><img src="../assets/Single-Female.svg"/></div>
                        <div class="flex flex-col mr-4"><span>من</span><p class="font-bold text-base">سعد الحارثي</p></div>
                    </div>
                    <div class="mr-4 my-3"><img src="../assets/arrow.svg"/></div>
                    <div class="flex">
                        <div class="w-11 h-11 rounded-full bg-secondColor flex justify-center items-center"><img src="../assets/Single-Female.svg"/></div>
                        <div class="flex flex-col mr-4"><span>من</span><p class="font-bold text-base">سعد الحارثي</p></div>
                    </div>
                    <MainButtonVue class="py-2 text-white mb-7 mt-8">الانتقال للملف الشخصي</MainButtonVue>
                </div>
            </div>
        </Transition>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import ButtonLoginVue from "./Buttons/ButtonLogin.vue";
import MainButtonVue from "./Buttons/MainButton.vue";
export default{
    components:{
        HeaderStyleVue,
        ButtonLoginVue,
        MainButtonVue,
    },
    data() {
        return {
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
                    ]

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
                    ]

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
                    ]

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
                    ]

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