<template>
    <header class="bg-mainColor w-full fixed top-0 right-0 flex pt-5 pb-5 px-4 text-white z-99">
        <div class="flex-grow">
            <fa icon="chevron-right" @click="$router.go(-1)"/>
        </div>
        <div class="flex-grow text-center"><h2 class="text-base text-white font-bold"><slot></slot></h2></div>
        <div class="flex items-center flex-grow justify-end">
            <div class="relative">
                <fa icon="bell" class="text-xl "/>
                <span class="bg-white w-5 h-5 absolute -top-3 -right-2 rounded-full text-mainColor flex justify-center items-center border-2 border-mainColor border-solid font-bold">3</span>
            </div>
            <fa icon="magnifying-glass" class="text-xl mr-6"/>
        </div>
    </header>
</template>