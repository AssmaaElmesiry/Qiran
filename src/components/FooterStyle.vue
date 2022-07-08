<template>
    <div class="bg-white fixed bottom-0 right-0 w-full z-99">
        <ul class="flex justify-between pt-3 pb-2 px-5">
            <a class="flex flex-col justify-center items-center" v-for="item in items" :key="item" :href="item.url">
                <img :src="item.icon" @click="item.method"  v-show="mobile" :class="{'icon-active': mobileNav}"/>
                <p class="mt-1 text-xs font-bold">{{ item.name }}</p>
            </a>
        </ul>
    </div>
    <transition name="mobile-nav">
        <div  v-show="mobileNav" class="absolute top-0 right-0 w-full h-screen bg-mainColor z-99 overflow-y-scroll">
            <fa icon="xmark"  @click="toggleMobileNav" class="mt-8 text-4xl text-white mr-14"/>
            <div class="w-full flex justify-center"><img src="../assets/Logo.svg"/></div>
            <ul class="dropdown-nav mx-14 mt-12">
                <a v-for="item in MenuList" :key="item" class="flex mb-10" :href="item.url">
                    <img :src="item.icon"/>
                    <p class="text-lg mr-3 text-white">{{item.name}}</p>
                </a>
            </ul>
            <div class="mask"></div>
        </div>
    </transition>
</template>
<script>
export default{
data() {
    return {
        mobile: true,
        mobileNav: false,
        items:[
            {
                id:1,
                icon: ('../src/assets/home.svg'),
                name:'الرئيسية',
                url: ('/homePage'),
            },
            {
                id:2,
                icon: ('../src/assets/user.svg'),
                name:'الاعضاء',
                url:('/membersPage'),
            },
            {
                id:3,
                icon: ('../src/assets/settings.svg'),
                name:'حسابي',
                url:('/MyProfile'),
            },
            {
                id:4,
                icon: ('../src/assets/menu.svg'),
                name:'القائمة',
                method: this.toggleMobileNav,
            },
        ],
        MenuList:[
            {
                id:1,
                icon: ('../src/assets/HomeMenu.svg'),
                name: 'الرئيسية',
                url: ('/homePage'),
            },
            {
                id:2,
                icon: ('../src/assets/ring.svg'),
                name: 'من نحن',
                url: ('/homePage'),
            },
            {
                id:3,
                icon: ('../src/assets/usermenu.svg'),
                name: 'الاعضاء',
                url: ('/membersPage'),
            },
            {
                id:4,
                icon: ('../src/assets/star.svg'),
                name: 'قيمنا',
                url: ('/RateUs'),
            },
            {
                id:5,
                icon: ('../src/assets/logout.svg'),
                name: 'تسجيل الدخول',
                url: ('/'),
            },
            {
                id:6,
                icon: ('../src/assets/settingsMenu.svg'),
                name: 'حسابي',
                url: ('/MyProfile'),
            },
            {
                id:7,
                icon: ('../src/assets/send.svg'),
                name: 'اتصل بنا',
                url: ('/ContactUs'),
            },
            {
                id:8,
                icon: ('../src/assets/share.svg'),
                name: 'مشاركة التطبيق',
                url: ('/homePage'),
            },
        ]
    }
},
    methods: {
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
    }
}
</script>
<style scoped>
.mask{
    position: absolute;
    right: 0;
    top: 26%;
    height: 455px;
    width: 23px;
    border-top-left-radius: 25px;
    background-color: #E9E8E5;
    border-bottom-left-radius: 25px;
}
</style>