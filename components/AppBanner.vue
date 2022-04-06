<template>
  <section class="text-left mt-48 w-8/1">
    <!-- Banner left contents -->
    <h1
      class="
        mx-auto
        text-3xl
        md:text-4xl
        xl:text-5xl
        text-center text-primary-dark
        dark:text-primary-light
      "
    >
      <span class="font-mono leading-relaxed"> Hallo, Ich bin </span>
      <p class="font-extrabold mt-5 text-4xl md:text-5xl xl:text-7xl">
        Cristian Cazanjiu
      </p>
    </h1>
    <p
      class="
        mt-10
        text-2xl text-center
        font-semibold
        leading-none
        text-red-700
        font-mono
      "
    >
     Begginer Programierer in JavaScript python und c#
    </p>
    <!-- Banner right illustration -->
    <!-- <div class="w-full md:w-2/3 text-right float-right mt-4 sm:mt-0">
      <img
        src="imige-me.png"
        alt="IMG-2298-removebg-preview"
        border="0"
      />
    </div> -->
  </section>
</template>

<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      // Todo
    };
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style lang="scss" scoped>

</style>
