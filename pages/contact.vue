<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Deutschalnd, Rheinland-Pfalz",
          icon: "map-pin",
          link: "#",
        },
        {
          id: 2,
          name: "cazanjiucristian@gmail.com",
          icon: "mail",
          link: "mailto:cazanjiucristian@gmail.com",
        },
      ],
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
