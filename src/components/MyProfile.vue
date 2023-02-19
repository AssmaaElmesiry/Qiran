<template>
    <section class="w-full h-screen  overflow-y-scroll" :class="{ active: showMsg}">
        <HeaderStyleVue>
            الملف الشخصي
        </HeaderStyleVue>
        <div class=" flex flex-col justify-center bg-mainColor px-4 py-9 ">
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
                <MainButtonVue  @click="isSent = !isSent" class="flex bg-profileButton px-4 py-2 text-TextColor">
                    <img src="../assets/send.svg" class="ml-1 "/>
                    الدعوات  المرسلة
                   <p class="mr-1">20</p>
                </MainButtonVue>          
            </div>
        </div>
        <div v-if="!isShow == !isSent" class="bg-white">
            <div class="container mx-auto px-4 overflow-y-scroll ">
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
        </div>
        <div v-else-if="isShow" class="bg-bgSection overflow-y-scroll pb-28">
            <div v-for="partner in partners" :key="partner.id" class="p-4 bg-white mt-4  mx-4">
                <div class="flex">
                    <div class="w-20 h-20 bg-bgSection flex justify-center items-center rounded-full">
                        <img :src="partner.image" />
                    </div>
                    <div class="mr-4 flex flex-col">
                        <h3 class="mb-3 text-mainColor font-bold text-sm"> {{ partner.name}} </h3>
                        <div class="flex">
                            <div class="flex">
                                <img src="../assets/user2.svg"/>
                                <p class="mr-2 text-mainColor">{{partner.place}}</p>
                            </div>
                            <div class="flex mr-6">
                                <img src="../assets/calendar1.svg"/>
                                <p class="mr-2 text-mainColor">{{partner.age}} عام</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-4">
                    <ProfileButtonVue class="bg-greenButton text-white">موافقة</ProfileButtonVue>
                    <ProfileButtonVue class="bg-redButton text-white">رفض</ProfileButtonVue>
                </div>

            </div>
            <div v-for="partner in partners2" :key="partner.id" class="p-4 bg-white mt-4  mx-4">
                <div class="flex">
                    <div class="w-20 h-20 bg-bgSection flex justify-center items-center rounded-full">
                        <img :src="partner.image" />
                    </div>
                    <div class="mr-4 flex flex-col">
                        <h3 class="mb-3 text-mainColor font-bold text-sm"> {{ partner.name}} </h3>
                        <div class="flex">
                            <div class="flex">
                                <img src="../assets/user2.svg"/>
                                <p class="mr-2 text-mainColor">{{partner.place}}</p>
                            </div>
                            <div class="flex mr-6">
                                <img src="../assets/calendar1.svg"/>
                                <p class="mr-2 text-mainColor">{{partner.age}} عام</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-4">
                    <ProfileButtonVue class="bg-blueButton text-white">ارسال رسالة</ProfileButtonVue>
                    <ProfileButtonVue class="bg-redButton text-white">إلغاء</ProfileButtonVue>
                </div>

            </div>
        </div>
        <div v-else-if="isSent" class="bg-bgSection overflow-y-scroll pb-28">
            <div v-for="partner in partners" :key="partner.id" class="p-4 bg-white mt-4  mx-4">
                <div class="flex">
                    <div class="w-20 h-20 bg-bgSection flex justify-center items-center rounded-full">
                        <img :src="partner.image" />
                    </div>
                    <div class="mr-4 flex flex-col">
                        <h3 class="mb-3 text-mainColor font-bold text-sm"> {{ partner.name}} </h3>
                        <div class="flex">
                            <div class="flex">
                                <img src="../assets/user2.svg"/>
                                <p class="mr-2 text-mainColor">{{partner.place}}</p>
                            </div>
                            <div class="flex mr-6">
                                <img src="../assets/calendar1.svg"/>
                                <p class="mr-2 text-mainColor">{{partner.age}} عام</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-4">
                    <ProfileButtonVue class="bg-greenButton text-white">موافقة</ProfileButtonVue>
                    <ProfileButtonVue class="bg-bgItem text-black">  
                        <fa icon="circle-check" class="text-greenButton text-xl ml-3"/>
                        قيد المراجعة</ProfileButtonVue>
                </div>

            </div>
            <div v-for="partner in partners2" :key="partner.id" class="p-4 bg-white mt-4  mx-4">
                    <div class="flex">
                        <div class="w-20 h-20 bg-bgSection flex justify-center items-center rounded-full">
                            <img :src="partner.image" />
                        </div>
                        <div class="mr-4 flex flex-col">
                            <h3 class="mb-3 text-mainColor font-bold text-sm"> {{ partner.name}} </h3>
                            <div class="flex">
                                <div class="flex">
                                    <img src="../assets/user2.svg"/>
                                    <p class="mr-2 text-mainColor">{{partner.place}}</p>
                                </div>
                                <div class="flex mr-6">
                                    <img src="../assets/calendar1.svg"/>
                                    <p class="mr-2 text-mainColor">{{partner.age}} عام</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-4">
                        <ProfileButtonVue class="bg-blueButton text-white">ارسال رسالة</ProfileButtonVue>
                        <ProfileButtonVue class="bg-bgItem text-black" @click="partner.method">  
                            <fa icon="circle-check" class="text-blueButton text-xl ml-3"/>
                            تم الاستلام</ProfileButtonVue>
                    </div>
                    <div v-show="received" class="mt-4 border-t border-bgItem">
                        <div>
                            <h2 class="text-blueButton flex items-center font-medium text-sm mt-4">
                                <img src="../assets/msg.png" class="ml-2"/>
                                لقد تلقيت رسالة الان
                            </h2>
                            <span class="text-TextSpan mt-1">الإثنين، 22 ابريل 2022 ٠٨:١٣ م</span>
                        </div>
                        <div class="text-xs mt-5 leading-loose border-b pb-4 border-bgItem">
                            <p>مرحبا 
                                {{name}}
                            </p>
                            <p>
                                شكرا لك لمتابعة ملفي الشخصي انا قمت بمشاهدة كل التفاصيل
                                واوافق على الارتباط بك
                            </p>
                        </div>
                        <div class="flex pt-4">
                            <p class="flex ml-9"  @click="del(index)">
                                <img src="../assets/remove.svg" class="ml-3"/>
                                مسح
                            </p>
                            <p class="flex" @click="showMsg = !showMsg">
                                <img src="../assets/pen.svg" class="ml-3"/>
                                الرد
                            </p>
                        </div>
                    </div>
            </div>
        </div>
        <FooterStyleVue/>
    </section>
    <transition :duration="{ enter: 500, leave: 300 }"  name="nested" class="absolute z-99 w-full bg-white px-5 bottom-0 left-0 rounded-t-3xl">
        <div class="flex flex-col justify-center items-center py-5 border-bg-border border-b border-solid" v-if="showMsg"  >
            <div class="w-20 h-20 bg-bgSection flex justify-center items-center rounded-full mt-11">
                <img src="../assets/Single-Female.svg" />
            </div>
            <h2 class="text-sm font-bold mt-3 mb-6">رسالة جديدة لـ أسماء الزهراني</h2>
            <textarea class="bg-bgSection h-28 w-full mb-5"></textarea>
            <MainButton class="py-2 text-white w-full">ارسال</MainButton>
        </div>
    </transition>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import ButtonLoginVue from "./Buttons/ButtonLogin.vue";
import MainButtonVue from "./Buttons/MainButton.vue";
import ProfileButtonVue from "./Buttons/ProfileButton.vue";
import FooterStyleVue from "./FooterStyle.vue";
import MainButton from "./Buttons/MainButton.vue";
import Female from "../assets/Single-Female.svg"
export default{
    components:{
    HeaderStyleVue,
    ButtonLoginVue,
    MainButtonVue,
    FooterStyleVue,
    ProfileButtonVue,
    MainButton
},
    data() {
        return {
            progress: 90,
            isShow: false,
            showMsg: false,
            isSent: false,
            received: false,
            visible: true,
            name: 'سعد الحارثي',
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
            partners:[
                {
                    id: 1,
                    name: 'أسماء الزهراني',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                },
                {
                    id: 2,
                    name: 'أسماء الزهراني',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                },
            ],
            partners2:[
                {
                    id: 1,
                    name: 'لمياء السعدي',
                    image: Female,
                    age: '20',
                    place: 'الطائف',
                    method: this.msg
                },
                {
                    id: 2,
                    name: 'أسماء الزهراني',
                    image: Female,
                    age: '20',
                    place: 'الطائف',
                    method: this.msg
                },
            ]
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
        msg(){
            this.received = !this.received;
        },
        del (index) {
            this.partners2.splice(index, 1)
        },
    },
}
</script>
<style scoped>
textarea {
    resize: none;
}
.bar {
  width: 15px;
}
</style>