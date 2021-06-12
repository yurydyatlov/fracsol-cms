<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :currentTab="'twm'"></FracsolCircle>

    <section>
      <TwmFeatures></TwmFeatures>
    </section>

    <footer-main></footer-main>

  </div>

</template>

<script>

import TopNavigation from "@/layouts/components/top-navigation";
import FooterMain from "@/layouts/components/footer-main";
import AboutInfo from "@/layouts/components/about-info";
import FracsolCircle from "@/layouts/components/fracsol-circle";
import TwmFeatures from "@/layouts/components/twm-features";

export default {
  components: {FooterMain, TopNavigation, AboutInfo, FracsolCircle, TwmFeatures},
  data() {
    return {
      animating: false
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
