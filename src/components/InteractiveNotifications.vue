<template>
    <section class="w-full h-screen bg-bgSection">
        <HeaderStyleVue>التنبيهات التفاعلية</HeaderStyleVue>
        <div class="mt-5 bg-white ">
            <div class="flex justify-between py-4 px-7 border-b border-bg-border">
                <p>التنبيهات عبر المنصة</p>
                <div>
                    <label class="switch">
                    <input type="checkbox" class="hidden">
                    <div class="slider round absolute top-0 left-0 right-0 bottom-0 bg-bg-gray"></div>
                </label>
                </div>
            </div>
            <div class="flex justify-between py-4 px-7 border-b border-bg-border">
                <p>التنبيهات عبر الجوال</p>
                <div>
                    <label class="switch">
                    <input type="checkbox" class="hidden">
                    <div class="slider round absolute top-0 left-0 right-0 bottom-0 bg-bg-gray"></div>
                </label>
                </div>
            </div>
            <div class="flex justify-between py-4 px-7 border-b border-bg-border">
                <p>التنبيهات عبر البريد الالكتروني</p>
                <div>
                    <label class="switch">
                    <input type="checkbox" class="hidden">
                    <div class="slider round absolute top-0 left-0 right-0 bottom-0 bg-bg-gray"></div>
                </label>
                </div>
            </div>
        </div>
        <FooterStyleVue/>
    </section>
</template>
<script>
import HeaderStyleVue from "./HeaderStyle.vue";
import FooterStyleVue from "./FooterStyle.vue";
export default{
    components:{
        HeaderStyleVue,
        FooterStyleVue
    },
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>
<style scoped>
.switch{
    position: relative;
    width: 34px;
    height: 21px;
    display: flex;
}
.switch input {
  display: none;
}

.slider {
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 32px;
    width: 32px;
    left: 20px;
    top: -7px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

input:checked + .slider {
  background-color: #744966;
}

input:focus + .slider {
  box-shadow: 0 0 1px #744966;
}

input:checked + .slider:before {
  -webkit-transform: translateX(-37px);
  -ms-transform: translateX(-37px);
  transform: translateX(-37px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>