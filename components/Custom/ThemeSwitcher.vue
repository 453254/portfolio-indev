<template>
<div class="text-slate-700 dark:text-slate-300 lg:cursor-pointer hover:scale-95 transition-transform ease-out duration-300">

  <div @click="handleButtonClick" class="items-center scale-90 select-none flex flex-col lg:flex-row text-2xl font-bold">
    <p class="themetext cursor-pointer lg:mr-4"></p>
    
    <div class="flex cursor-pointer">
      <p>M</p>
      
      <div class="mr-0.5 mt-1 checkbox toggle-switch dark:toggle-switch mx-1">
        <input @click="handleButtonClick" class="toggle-input" id="toggle" type="checkbox">
        <label class="toggle-label" for="toggle"></label>
      </div>
      
      <p>DE</p>
    </div>
  </div>

</div>
</template>



<script>
export default {
  data() {
    return {
      isDark: false
    };
  },
  mounted() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      this.isDark = true;
    }
  },
  methods: {
    handleButtonClick() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
};
</script>