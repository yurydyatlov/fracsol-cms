<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :currentTab="'fdi'"></FracsolCircle>

    <section>
      <FdiFeatures></FdiFeatures>
    </section>

    <section class="section-standart">
      <div class="video-bg">
        <img :src="`${ require('~/assets/images/fdi-screen-bg.png') }`" class="video-img" alt="TWM Video Bg">

        <div class="video-player-abs">
          <div class="video-player">
            <img style="cursor: pointer;" :src="`${ require('~/assets/images/fdi-player.png') }`" />
          </div>
        </div>
      </div>

    </section>

    <footer-main></footer-main>

  </div>

</template>

<script>

import TopNavigation from "@/layouts/components/top-navigation";
import FooterMain from "@/layouts/components/footer-main";
import AboutInfo from "@/layouts/components/about-info";
import FracsolCircle from "@/layouts/components/fracsol-circle";
import FdiFeatures from "@/layouts/components/fdi-features";

export default {
  components: {FooterMain, TopNavigation, AboutInfo, FracsolCircle, FdiFeatures},
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
      title: "FDI - Revsolz"
    };
  }
}
</script>

<style>

</style>
