<script>
export default {
    props: {
        svgUrl: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
};
</script>

<template>
    <div class="
        select-none
        p-2 
        flex 
        items-center
        border
        border-neutral-400
        dark:border-neutral-600
        rounded-md
        hover:border-neutral-500
        dark:hover:border-neutral-500
        ">

        <img :src="svgUrl" alt="Skill Icon" class="
        w-5 
        h-5 
        saturate-0
        "/>
        <p class="ml-2">{{ title }}</p>
    </div>
</template>

<style scoped>
</style>