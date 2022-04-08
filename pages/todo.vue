<template>
  <div>
     <TodoApp class="container mx-auto" />
  </div>  
</template>

<script>
import feather from "feather-icons";

export default {
  name: "Todo",
  scrollToTop: true,
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped></style>
