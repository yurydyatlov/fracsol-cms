<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :currentTab="'twm'"></FracsolCircle>

    <section>
      <TwmFeatures></TwmFeatures>
    </section>

    <section class="section-standart">

      <div class="video-bg">
        <img :src="`${ require('~/assets/images/twm-screen-bg.png') }`" class="video-img" alt="TWM Video Bg">
        <div class="video-player-abs">
          <div class="video-player">
            <img style="cursor: pointer;" :src="`${ require('~/assets/images/twm-player.png') }`" />
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
      title: "TWM - Revsolz"
    };
  }
}
</script>

<style>

</style>
