<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <AboutInfo></AboutInfo>

    <footer-main></footer-main>

  </div>


</template>

<script>

import TopNavigation from "@/layouts/components/top-navigation";
import FooterMain from "@/layouts/components/footer-main";
import AboutInfo from "@/layouts/components/about-info";

export default {
  components: {FooterMain, TopNavigation, AboutInfo},
  data() {
    return {
      animating: false,
      mountains: ['ready', 'to', 'test']
    }
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
    scrollToElement() {

      /*this.scrollTo(null, 55);*/

      /*bringIntoView(document.querySelector('#con'), 400);*/
      this.$forceUpdate()

      /*el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});*/

      /*if (el) {
        el.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }*/
    },
  },
  head() {
    return {
      title: "Opla Energy"
    };
  }
}
</script>

<style>

</style>
