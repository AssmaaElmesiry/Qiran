<template>
    <div class="bg-white fixed bottom-0 right-0 w-full z-99">
        <ul class="flex justify-between pt-3 pb-2 px-5">
            <router-link class="flex flex-col justify-center items-center" v-for="item in items" :key="item" :to="item.url">
                <img :src="item.icon" @click="item.method"  v-show="mobile" :class="{'icon-active': mobileNav}"/>
                <p class="mt-1 text-xs font-bold">{{ item.name }}</p>
            </router-link>
        </ul>
    </div>
    <transition name="mobile-nav">
        <div  v-show="mobileNav" class="absolute top-0 right-0 w-full h-screen bg-mainColor z-99 overflow-y-scroll">
            <fa icon="xmark"  @click="toggleMobileNav" class="mt-8 text-4xl text-white mr-14"/>
            <div class="w-full flex justify-center"><img src="../assets/Logo.svg"/></div>
            <ul class="dropdown-nav mx-14 mt-12">
                <router-link v-for="item in MenuList" :key="item" class="flex mb-10" :to="item.url">
                    <img :src="item.icon"/>
                    <p class="text-lg mr-3 text-white">{{item.name}}</p>
                </router-link>
            </ul>
            <div class="mask"></div>
        </div>
    </transition>
</template>
<script>
import home from "../assets/home.svg"
import user from "../assets/user.svg"
import settings from "../assets/settings.svg"
import menu from "../assets/menu.svg"
import HomeMenu from "../assets/HomeMenu.svg"
import ring from "../assets/ring.svg"
import usermenu from "../assets/usermenu.svg"
import star from "../assets/star.svg"
import logout from "../assets/logout.svg"
import settingsMenu from "../assets/settingsMenu.svg"
import send from "../assets/send.svg"
import share from "../assets/share.svg"


export default{
data() {
    return {
        mobile: true,
        mobileNav: false,
        items:[
            {
                id:1,
                icon: home,
                name:'الرئيسية',
                url: ('/homePage'),
            },
            {
                id:2,
                icon: user,
                name:'الاعضاء',
                url:('/membersPage'),
            },
            {
                id:3,
                icon: settings,
                name:'حسابي',
                url:('/MyProfile'),
            },
            {
                id:4,
                icon: menu,
                name:'القائمة',
                method: this.toggleMobileNav,
            },
        ],
        MenuList:[
            {
                id:1,
                icon: HomeMenu,
                name: 'الرئيسية',
                url: ('/homePage'),
            },
            {
                id:2,
                icon: ring,
                name: 'من نحن',
                url: ('/homePage'),
            },
            {
                id:3,
                icon: usermenu,
                name: 'الاعضاء',
                url: ('/membersPage'),
            },
            {
                id:4,
                icon: star,
                name: 'قيمنا',
                url: ('/RateUs'),
            },
            {
                id:5,
                icon: logout,
                name: 'تسجيل الدخول',
                url: ('/'),
            },
            {
                id:6,
                icon: settingsMenu,
                name: 'حسابي',
                url: ('/MyProfile'),
            },
            {
                id:7,
                icon: send,
                name: 'اتصل بنا',
                url: ('/ContactUs'),
            },
            {
                id:8,
                icon: share,
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