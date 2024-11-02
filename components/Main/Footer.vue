<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>


<template>
    <footer class="
     font-arial
     p-10 
     font-semibold 
     text-grey
     dark:text-neutral-800
     text-neutral-300
     ">
        <p>&copy; Copyright {{ year }} Rdmr. All rights reserved. No downloading, copying or editing allowed</p>
    </footer>
</template>