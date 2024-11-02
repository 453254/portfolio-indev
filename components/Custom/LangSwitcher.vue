<template>
    
    <div class="items-center w-40 max-h-10 mb-5">
        
        <input type="range" min="1" max="300" step="1" v-model="sliderValue" @input="updateSlider" class="
        w-full
        h-1
        bg-gray-400 
        rounded-lg 
        appearance-none 
        cursor-pointer 
        dark:bg-gray-700
        ">
        
        <div class="flex justify-between transition-all select-none">
            <div @click="sliderValue = 1"
            class="transition-all duration-600 cursor-pointer active:text-2xl" :class="{
                'dark:text-slate-100 text-slate-700 text-3xl font-bold': sliderValue <= 70, 
                'dark:text-grey-600 text-slate-400 text-base': sliderValue > 70}
            ">RU</div>

            <div @click="sliderValue = 150"
            class="transition-all duration-600 cursor-pointer active:text-2xl" :class="{
                'dark:text-slate-100 text-slate-700 text-3xl font-bold' : sliderValue > 70 && sliderValue < 225,
                'dark:text-grey-600 text-slate-400 text-base' : sliderValue <= 70 || sliderValue > 225}
            ">EN</div>

            <div @click="sliderValue = 300"
            class="transition-all duration-600 cursor-pointer active:text-2xl" :class="{
                'dark:text-slate-100 text-slate-700 text-3xl font-bold': sliderValue >= 225,
                'dark:text-grey-600 text-slate-400  text-base': sliderValue < 225}
            ">ZH</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sliderValue: 153.45
        };
    },
    methods: {
        updateSlider(event) {
            this.sliderValue = parseInt(event.target.value);
        }
    }
};
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 40px;
    height: 5px;
    border-radius: 0%;
    background: #475569;
}

.dark input[type="range"]::-webkit-slider-thumb {
    background: #e7e5e4;
}

input[type="range"]::-moz-range-thumb {
    width: 40px;
    height: 5px;
    border-radius: 0%;
    background: #475569;
}

.dark input[type="range"]::-moz-range-thumb {
    background: #e7e5e4;
}

input[type="range"]::-ms-thumb {
    width: 40px;
    height: 5px;
    border-radius: 0%;
    background: #475569;
}

.dark input[type="range"]::-ms-thumb {
    background: #e7e5e4;
}
</style>