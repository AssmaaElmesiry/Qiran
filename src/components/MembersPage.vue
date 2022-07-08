<template>
    <section class="w-full h-screen bg-bgSection overflow-y-scroll relative" :class="{ active: showMsg}">
        <HeaderStyleVue>
            <img src="../assets/filter.svg" class="absolute top-6 right-14" @click="showMsg = !showMsg"/>
            الاعضاء
        </HeaderStyleVue>
        <div class="container mx-auto px-4 h-screen overflow-y-scroll mb-20" >
            <div v-for="partner in partners" :key="partner.id" class="p-4 bg-white mt-4">
                <div class="flex">
                    <div class="w-16 h-16 bg-bgSection flex justify-center items-center rounded-full">
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
                <MainButtonVue @click="partner.method" class="w-full mt-6 text-white">التفاصيل</MainButtonVue>
            </div>
        </div>
        <FooterStyleVue/>
    </section>
    <Transition :duration="{ enter: 500, leave: 300 }"  name="nested" v-if="showMsg" class="absolute z-99 h-full bg-white left-0 right-0 bottom-0 rounded-t-3xl">
        <div class="w-full h-auto overflow-y-scroll pb-14">
            <div class="w-full flex justify-between py-4 bg-bg-gray px-4">
                <fa icon="chevron-right" @click="showMsg = !showMsg"/>
                <h2>فلتر</h2>
                <fa icon="arrow-rotate-right" @click="isShow= false" />
            </div>
            <div class="overflow-y-scroll h-full">
                <div 
                class="w-full" 
                v-for="(info, index) in information" 
                :key="info.id"
                >
                    <div class="flex justify-between font-bold py-4 px-7 border-bg-border border-b border-solid bg-white" @click="toggle(index)">
                        <h4 class="font-bold text-sm">{{info.title}}</h4>
                        <fa icon="angle-down" class="text-Graytext"/>
                    </div>
                    <transition name="scale" v-for="item in info.details" :key="item" class="bg-white px-5">
                        <div class="flex justify-between py-5 border-bg-border border-b border-solid" v-show="info.visible"  >
                            <p class="font-medium text-sm">{{item.name}}</p><span class="font-medium text-sm"> {{item.desc}}</span>
                            <input type="checkbox" id="" value=""/>
                        </div>
                    </transition>
                </div>
                <div  class='px-8 mt-3'>
                    <MainButtonVue class="py-2 w-full text-white" @click="goToErrorPage()">
                        عرض النتائج
                    </MainButtonVue>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import MainButtonVue from "./Buttons/MainButton.vue";
import FooterStyleVue from "./FooterStyle.vue";

export default{
    components:{
        HeaderStyleVue,
        FooterStyleVue,
        MainButtonVue,
    },
    data() {
        return {
            search: '',
            isShow: false,
            showMsg: false,
            partners:[
                {
                    id: 1,
                    name: 'أسماء الزهراني',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
                {
                    id: 2,
                    name: 'خديجة الفيصل',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
                {
                    id: 3,
                    name: 'رنين السعدي',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
                {
                    id: 4,
                    name: 'أسماء الغامدي',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
                {
                    id: 5,
                    name: 'رنين السعدي',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
                {
                    id: 6,
                    name: 'رنين السعدي',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
            ],
            visible: true,
            information:[
                {
                    id: 1,
                    title: 'المدينة',
                    details:[
                        {
                            name:'الطائف',
                        },
                        {
                            name:'حائل',
                        },
                        {
                            name:'الرياض',
                        },
                        {
                            name:'المدينة',
                        },
                        {
                            name:'جدة',
                        },
                        {
                            name:'مكة',
                        },
                    ]

                },
                {
                    id: 2,
                    title: 'الحالة الصحية',
                    details:[
                        {
                            name:'aaaaa',
                        },
                        {
                            name:'ssss',
                        },
                    ]

                },
               {
                    id: 3,
                    title: 'العمر',
                    details:[
                        {
                            name:'25',
                        },
                        {
                            name:'30',
                        },
                    ]

                },
                {
                    id: 4,
                    title: 'الجنس',
                    details:[
                        {
                            name:'ذكر',
                        },
                        {
                            name:'أنثى',
                        },
                    ]

                },
                {
                    id: 4,
                    title: 'المواصفات',
                    details:[
                        {
                            name:'ذكر',
                        },
                        {
                            name:'أنثى',
                        },
                        {
                            name:'ذكر',
                        },
                        {
                            name:'أنثى',
                        },
                        {
                            name:'ذكر',
                        },
                        {
                            name:'أنثى',
                        },
                    ]

                },
            ],
        }
    },
    methods: {
        details() {
            this.$router.push('/detailsPage');
        },
        goToErrorPage(){
            this.$router.push('/ErrorPage')
        },
        toggle(key) {
            var vm = this;
            if (!vm.information[key].visible) {
                vm.information[key].visible = true;
            } else  {
                vm.information[key].visible = false;
            }
        },
        goToMemberPage(){
            this.$router.push('/membersPage');
        }
    },
    computed:{
        // eslint-disable-next-line vue/no-dupe-keys
        partners(){
            if (this.search) {
                return this.partners.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(v => item.name.toLowerCase().includes(v));
                });
            } else {
                return this.partners;
            }
        }
    },
}
</script>
<style scoped>
.nested-enter-active >div,
.nested-leave-active >div {
  transition: all 0.3s ease-in-out; 
}

.nested-enter-from >div,
.nested-leave-to >div {
  transform: translateX(30px);
  opacity: 0;
}
.active::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    height: 100%;
}
</style>
