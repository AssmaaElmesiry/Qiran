<template>
    <section class="w-full h-screen overflow-y-scroll bg-bgSection relative" :class="{ active: showInfo, show: showCity} ">
        <HeaderStyleVue>المعلومات الشخصية</HeaderStyleVue>
        <div class="h-screen overflow-y-scroll">
            <form class="pt-6 px-4">
                <div class="flex flex-col mb-4">
                    <lable class="mb-2">الاسم كاملاً : </lable>
                    <input placeholder="اكتب الاسم كاملاً" type="name" class="px-3 py-4" required>
                </div>
                <div class="flex flex-col mb-4">
                    <lable class="mb-2">رقم الهوية : </lable>
                    <input placeholder="رقم الهوية الوطنية" type="number" class="pr-3 py-4" required>
                </div>
                <div class="flex flex-col mb-4">
                    
                    <lable class="mb-2">الجنس : </lable>
                    <div class="flex justify-between items-center">
                        <div class="w-44 flex  items-center text-center bg-white py-4">
                            <input type="radio" id="female" value="female"  v-model="picked" class="ml-12 mr-5">
                            <label for="female" class="text-sm">انثى</label>
                        </div>
                       <div class="w-44 flex  items-center text-center bg-white py-4">
                            <input type="radio" id="Male" value="Male"  v-model="picked" class="ml-12 mr-5">
                            <label for="Male" class="text-sm"> ذكر</label>
                        </div>

                    </div>
                </div>
                <div class="flex flex-col mb-4">
                    <lable class="mb-2">المنطقة : </lable>
                    <div @click="showInfo = !showInfo" class="flex justify-between px-3 py-4 bg-white">
                        <p>حدد المنطقة</p>
                        <fa icon="angle-down"/>
                    </div>
                </div>
                <div class="flex flex-col mb-4">
                    <lable class="mb-2">المدينة : </lable>
                    <div @click="showCity = !showCity" class="flex justify-between px-3 py-4 bg-white">
                        <p>حدد المدينة</p>
                        <fa icon="angle-down"/>
                    </div>
                </div>
                <div class="flex flex-col mb-4">
                    <lable class="mb-2">رقم التواصل : </lable>
                    <input placeholder="اكتب رقم التوصل" type="tel" class="pr-3 py-4" required>
                </div>
                <div class="flex flex-col mb-4">           
                    <lable class="mb-2">البريد الالكتروني : </lable>
                    <input placeholder="اكتب البريد الالكتروني" type="email" class="pr-3 py-4" required>
                </div>
                <div class="flex flex-col mb-4">
                    <lable class="mb-2">تاريخ الميلاد : </lable>
                    <input placeholder="حدد تاريخ الميلاد" type="date" class="pr-3 py-4 bg-white w-full" required>
                </div>
            </form>
                        <div class="pt-12 bg-white mb-5 px-4 rounded-t-3xl text-white">
                    <MainButtonVue class="py-2 w-full">حفظ</MainButtonVue>
                </div>
        </div>

    </section>
    <Transition :duration="{ enter: 500, leave: 300 }"  name="nested">
        <div  v-if="showInfo"  class="flex flex-col justify-between items-center py-5 border-bg-border border-b border-solid absolute bottom-0 left-0 w-full bg-white rounded-t-3xl">
            <h2 class="font-bold text-base w-full text-right pr-8">حدد المنطقة</h2>
            <ul class="w-full px-8 overflow-x-scroll">
               
                <li v-for="item in city" :key="item" class="flex justify-between border-bg-border border-b border-solid py-4">
                        <p class="font-medium text-sm">{{ item }}</p>
                    <input type="checkbox" id="" value=""/>
                </li>
                <MainButton class="w-full py-2 text-white mb-5" @click="showInfo = !showInfo">حفظ</MainButton>
            </ul>
        </div>
    </Transition>
    <Transition :duration="{ enter: 500, leave: 300 }"  name="nested">
        <div  v-if="showCity"  class="flex flex-col justify-between items-center py-5 border-bg-border border-b border-solid absolute bottom-0 left-0 w-full bg-white rounded-t-3xl">
            <h2 class="font-bold text-base w-full text-right pr-8">حدد المدينة</h2>
            <ul class="w-full px-8 overflow-x-scroll">
               
                <li v-for="item in city" :key="item" class="flex justify-between border-bg-border border-b border-solid py-4">
                        <p class="font-medium text-sm">{{ item }}</p>
                    <input type="checkbox" id="" value=""/>
                </li>
                <MainButton class="w-full py-2 text-white mb-5" @click="showCity = !showCity">حفظ</MainButton>
            </ul>
        </div>
    </Transition>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import MainButtonVue from "./Buttons/MainButton.vue";
import MainButton from "./Buttons/MainButton.vue";
export default{
    components:{
    HeaderStyleVue,
    MainButtonVue,
    MainButton
},
    data() {
        return {
            picked: 'female',
            showInfo: false,
            showCity: false,
            city:[
                'الطائف',
                'المدينة',
                'مكة',
                'الرياض',
                'حائل',
                'الدمام',
                'نجران',
            
            ]
        }
    },
    
}
</script>
<style scoped>
input[type="radio"]{
    accent-color: #744966;
}
.active::before,.show::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    height: 100%;
}
</style>