<template>
    <section class="w-full h-screen bg-bgSection">
        <HeaderStyleVue>المعلومات الشخصية</HeaderStyleVue>
        <div class="container mx-auto px-4">
            <form class="mt-16 pt-6">
                <div class="flex flex-col">
                    <lable>الاسم كاملاً : </lable>
                    <input placeholder="اكتب الاسم كاملاً" type="name" class="px-3 py-4">
                </div>
                <div class="flex flex-col">
                    <lable>رقم الهوية : </lable>
                    <input placeholder="رقم الهوية الوطنية" type="number" class="pr-3 py-4">
                </div>
                <div class="flex flex-col">
                    
                    <lable>الجنس : </lable>
                    <input type="radio" id="female" value="female"  v-model="picked">
                    <label for="female">انثى</label>
                    <input type="radio" id="Male" value="Male"  v-model="picked">
                    <label for="Male"> ذكر</label>
                </div>
                <div class="flex flex-col">
                    <lable>المنطقة : </lable>
                    <input placeholder="حدد المنطقة" type="text" class="pr-3 py-4">
                </div>
                <div class="flex flex-col">
                    <lable>المدينة : </lable>
                    <input placeholder="حدد المدينة" type="text" class="pr-3 py-4">
                </div>
                <div class="flex flex-col">
                    <lable>رقم التواصل : </lable>
                    <input placeholder="اكتب رقم التوصل" type="tel" class="pr-3 py-4">
                </div>
                <div class="flex flex-col">           
                    <lable>البريد الالكتروني : </lable>
                    <input placeholder="اكتب البريد الالكتروني" type="email" class="pr-3 py-4">
                </div>
                <div class="flex flex-col">
                    <lable>تاريخ الميلاد : </lable>
                    <input placeholder="حدد تاريخ الميلاد" type="date" class="pr-3 py-4">
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