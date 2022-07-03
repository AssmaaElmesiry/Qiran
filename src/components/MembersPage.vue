<template>
    <section class="w-full bg-bgSection">
        <HeaderStyleVue>الاعضاء</HeaderStyleVue>
        <div>
            <input type="text" placeholder="البحث عن شريك..."  v-model="search" class="h-16 py-5 pr-6 bg-white w-full mt-16"/>
        </div>
        <div class="container mx-auto px-4 h-full mb-20">
            <div v-for="partner in partners" :key="partner.id" class="p-4 bg-white mt-4">
                <div class="flex">
                    <div class="w-16 h-16 bg-bgSection flex justify-center items-center rounded-full">
                        <img :src="partner.image" />
                    </div>
                    <div class="mr-4 flex flex-col">
                        <h3 class="mb-3 text-mainColor font-bold text-sm"> {{ partner.name}} </h3>
                        <div class="flex">
                            <div class="flex">
                                <img src="../assets/088-user.svg"/>
                                <p class="mr-2 text-mainColor">{{partner.place}}</p>
                            </div>
                            <div class="flex mr-6">
                                <img src="../assets/017-calendar.svg"/>
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
                    name: 'أسماء الزهراني',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
                {
                    id: 3,
                    name: 'أسماء الزهراني',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
                {
                    id: 4,
                    name: 'أسماء الزهراني',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
                {
                    id: 5,
                    name: 'أسماء الزهراني',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
                {
                    id: 6,
                    name: 'أسماء الزهراني',
                    image: ('../src/assets/Single-Female.svg'),
                    age: '20',
                    place: 'الطائف',
                    method: this.details
                },
            ]
        }
    },
    methods: {
        details() {
            this.$router.push('/detailsPage');
        },

    },
    computed:{
        // eslint-disable-next-line vue/no-dupe-keys
        partners(){
            return this.partner.filter(h => h.partners.name.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
}
</script>
