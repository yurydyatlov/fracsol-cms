<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :currentTab="'owm'" :owmIntro="owmIntro"></FracsolCircle>

    <section>
      <OwmFeatures :features="owmFeatures"></OwmFeatures>
    </section>

    <section class="section-standart">
      <div class="video-bg">
        <img :src="`${ require('~/assets/images/owm-screen-bg.png') }`" class="video-img" alt="OWM Video Bg">
        <div class="video-player-abs">
          <div class="video-player">
            <img style="cursor: pointer;" :src="`${ require('~/assets/images/owm-player.png') }`" @click="videoPlayMode = true" v-if="!videoPlayMode" />
            <video width="100%" height="100%" controls v-if="videoPlayMode" autoplay>
              <source :src="process.env.strapiBaseUri + video" type="video/mp4">
              Your browser does not support the video tag.
            </video>
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

import { formatSeo } from "@/utils/seo";

export default {
  components: {FooterMain, TopNavigation, AboutInfo, FracsolCircle, OwmFeatures},
  async fetch() {
    let res = await this.$strapi.find('owm');
    this.seo = res['SEO'];
    this.owmFeatures = res['Features'];
    this.owmIntro = res['Intro'];
    if (res['Video']) {
      this.video = res['Video'].url;
    }
  },
  data() {
    return {
      animating: false,
      videoPlayMode: false,
      owmFeatures: [],
      owmIntro: '',
      video: ''
    }
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
  },
  head() {
    return formatSeo(this.seo);
  }
}
</script>

<style>

</style>
