<template>
<section class="w-full h-screen overflow-y-scroll bg-bgSection">
    <HeaderStyleVue>تقييم خدماتنا</HeaderStyleVue>
        <div class="container mx-auto px-4">
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
                    
                    <lable class="mb-2 bg-RateSection py-5 pr-5 font-bold text-sm">هل كانت المنصة مفيدة لك للبحث عن شريك</lable>
                    <div class="flex flex-col w-full">
                        <div class="flex  items-center text-center bg-white py-4">
                            <input type="radio" id="true" value="true"  v-model="picked1" class="ml-12 mr-5">
                            <label for="true" class="text-sm">نعم</label>
                        </div>
                       <div class="flex  items-center text-center bg-white py-4">
                            <input type="radio" id="false" value="false"  v-model="picked1" class="ml-12 mr-5">
                            <label for="false" class="text-sm"> لا</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mb-4">
                    
                    <lable class="mb-2 bg-RateSection py-5 pr-5 font-bold text-sm">هل كانت المنصة مفيدة لك للبحث عن شريك</lable>
                    <div class="flex flex-col w-full">
                        <div class="flex  items-center text-center bg-white py-4">
                            <input type="radio" id="true" value="true"  v-model="picked2" class="ml-12 mr-5">
                            <label for="true" class="text-sm">نعم</label>
                        </div>
                       <div class="flex  items-center text-center bg-white py-4">
                            <input type="radio" id="false" value="false"  v-model="picked2" class="ml-12 mr-5">
                            <label for="false" class="text-sm"> لا</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mb-4">
                    
                    <lable class="mb-2 bg-RateSection py-5 pr-5 font-bold text-sm">هل كانت المنصة مفيدة لك للبحث عن شريك</lable>
                    <div class="flex flex-col w-full">
                        <div class="flex  items-center text-center bg-white py-4">
                            <input type="radio" id="true" value="true"  v-model="picked3" class="ml-12 mr-5">
                            <label for="true" class="text-sm">نعم</label>
                        </div>
                       <div class="flex  items-center text-center bg-white py-4">
                            <input type="radio" id="false" value="false"  v-model="picked3" class="ml-12 mr-5">
                            <label for="false" class="text-sm"> لا</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
            <div class="pt-12 bg-white mb-5 px-4 rounded-t-3xl text-white">
                <MainButtonVue class="py-2 w-full">ارسال</MainButtonVue>
            </div>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import MainButtonVue from "./Buttons/MainButton.vue";
export default{
    components:{
        HeaderStyleVue,
        MainButtonVue
    },
    data() {
        return {
            picked: 'female',
            picked1: 'true',
            picked2: 'true',
            picked3: 'true'
        }
    },
}
</script>
<style scoped>
input[type="radio"]{
    accent-color: #744966;
}
</style>