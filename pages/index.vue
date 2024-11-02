<template>
<div>
    <div class=" 
    transition-all
    grid
    md:grid-cols-3
    m-10
    gap-10
    ">
        <div class="md:col-span-2 flex-row"><ProfileCard/></div>
        <div class="md:col-span-1 flex-row"><ButtonsCard/></div>
    </div>

    <div class="
    grid 
    grid-cols-2
    mx-10
    gap-10
    ">
    <CustomTGLink/>
    <CustomGitHubLink/>
    </div>
    
</div>
</template>