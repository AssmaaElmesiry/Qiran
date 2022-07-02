<template>
    <section class="bg-mainColor w-full h-screen overflow-y-scroll">
        <div class="container mx-auto px-9 h-full flex items-center flex-col text-center ">
            <div class="mt-14 mb-24">
                <img src="../assets/Logo.svg"/>
            </div>
            <form class="w-full flex flex-col justify-center text-center">
                <h2 class="mb-14 text-lg text-white font-bold">تسجيل الدخول</h2>
                <input placeholder="رقم الجوال" value="" type="number" class="py-4 pr-4 w-full" required/>
                <div class="mt-4 mb-5 text-right text-sm text-white">
                    <a href="#">نسيت كلمة المرور؟</a>
                </div>
                <div class="mb-12">
                    <ButtonLoginVue class="bg-secondColor w-full text-black font-bold text-sm">تسجيل الدخول</ButtonLoginVue>
                </div>
                <div class="mb-8">
                    <p @click="goToNewAccount()" class="text-white text-sm">انشاء حساب جديد</p>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
    import ButtonLoginVue from "../components/Buttons/ButtonLogin.vue";
    export default{
        components:{
            ButtonLoginVue,
        },
        methods:{
            goToNewAccount(){
                this.$router.push('/newaccount'); 
            }
        }
    }
</script>
