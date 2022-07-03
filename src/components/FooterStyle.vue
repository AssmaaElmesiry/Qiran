<template>
    <div class="bg-white fixed bottom-0 right-0 w-full z-99">
        <ul class="flex justify-between pt-3 pb-2 px-5">
            <li class="flex flex-col justify-center items-center" v-for="item in items" :key="item">
                <img :src="item.icon"/>
                <a :href="item.url" class="mt-1 text-xs font-bold">{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
data() {
    return {
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
                url:('/homePage'),
            },
            {
                id:4,
                icon: ('../src/assets/menu.svg'),
                name:'القائمة',
                url:('/homePage'),
            },
        ]
    }
},
}
</script>