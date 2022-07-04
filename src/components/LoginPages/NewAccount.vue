<template>
    <section class="bg-mainColor w-full h-screen overflow-y-scroll">
        <div class="container mx-auto px-9 h-full flex items-center flex-col text-center ">
            <div class="mt-14 mb-24">
                <img src="../../assets/Logo.svg"/>
            </div>
            <form class="w-full flex flex-col justify-center text-center">
                <h2 class="mb-14 text-lg text-white font-bold">انشاء حساب جديد</h2>
                <input placeholder="رقم الجوال" value="" type="number" class="py-4 pr-4 w-full" required/>
                <div class="mt-4 mb-5 text-right text-sm text-white flex relative">
                    <input type="checkbox" id="checkbox" v-model="checked" class="ml-4" />
                    <a href="#" class="text-sm">الموافقة على
                        <span class="underline"> شروط وأحكام الاستخدام</span>
                    </a>
                </div>
                <div class="mb-12">
                    <ButtonLoginVue @click="goToAccountConfirmation" class="bg-secondColor w-full text-black font-bold text-sm py-4">إنشاء حساب جديد</ButtonLoginVue>
                </div>
                <div class="mb-8">
                    <p @click="goToLoginPage()" class="text-white text-sm">تسجيل الدخول</p>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
import ButtonLoginVue from "../../components/Buttons/ButtonLogin.vue";
export default{
    data() {
        return {
            checked: false,
        }
    },
    components:{
        ButtonLoginVue,
    },
    methods:{
        goToAccountConfirmation(){
            this.$router.push('/AccountConfirmation'); 
        }
    }   
}
</script>
<style scoped>
/* input[type="checkbox"] {
    height: 14px;
    width: 14px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
}
input:checked {
    border: 1px solid #fff;
    font-family: "Font Awesome 6 Free";
    content: 'f00c';
    background-color: red;
    display: block;
    text-align: center;
    color: #41B883;
    position: relative;
    right: 0;
    top: 0;
} */
</style>
