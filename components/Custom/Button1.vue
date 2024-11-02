/**
* text - отображает текст на кнопке
* url - ссылка (можно в формате nuxt)
*/

<script setup>
const props = defineProps(
    { 
        text:{
        type: String,
        default: 'Button'},
        
        url:{
            type: String,
            default: '/'}

    });
</script>

<template>
    <div>
        <NuxtLink target="_blank" :to="url">
        <p class="
            font-extrabold
            duration-300
            border-2
            p-4 
            text-center 
            rounded-lg
            cursor:pointer
            bg-neutral-800
            border-neutral-700

            hover:bg-neutral-300
            hover:text-neutral-700
            hover:border-neutral-500
            hover:-translate-y-1
            "><span>{{ props.text }}</span>
        </p>
        </NuxtLink>
    </div>
</template>