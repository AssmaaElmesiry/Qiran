<template>
    <section class="w-full h-screen bg-bgSection">
        <HeaderStyleVue>المعلومات الشخصية</HeaderStyleVue>
        <div class="container mx-auto px-4">
            <form class="mt-16 pt-6">
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
                    <input placeholder="حدد المنطقة" type="text" class="pr-3 py-4" required>
                </div>
                <div class="flex flex-col mb-4">
                    <lable class="mb-2">المدينة : </lable>
                    <input placeholder="حدد المدينة" type="text" class="pr-3 py-4" required>
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
                    <input placeholder="حدد تاريخ الميلاد" type="date" class="pr-3 py-4" required>
                </div>

            </form>
        </div>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
export default{
    components:{
        HeaderStyleVue,
    },
    data() {
        return {
            picked: 'female'
        }
    },
}
</script>
<style scoped>
input[type="radio"]{
    accent-color: #744966;
}
</style>