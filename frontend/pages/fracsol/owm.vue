<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :currentTab="'owm'"></FracsolCircle>

    <section>
      <OwmFeatures></OwmFeatures>
    </section>

    <section class="section-standart">
      <div class="video-bg">
        <img :src="`${ require('~/assets/images/owm-screen-bg.png') }`" class="video-img" alt="TWM Video Bg">

        <div class="video-player-abs">
          <div class="video-player">
            <img style="cursor: pointer;" :src="`${ require('~/assets/images/owm-player.png') }`" />
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
import OwmFeatures from "@/layouts/components/owm-features";

export default {
  components: {FooterMain, TopNavigation, AboutInfo, FracsolCircle, OwmFeatures},
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
  },
  head() {
    return {
      title: "OWM - Revsolz"
    };
  }
}
</script>

<style>

</style>
