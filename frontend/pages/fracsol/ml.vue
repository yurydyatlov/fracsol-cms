<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :currentTab="'ml'" :mlIntro="mlIntro"></FracsolCircle>

    <ml-features v-if="mlFeatures.length > 0" :features="mlFeatures"></ml-features>

    <section class="section-standart" v-if="video">
      <div class="video-bg">
        <img :src="`${ require('~/assets/images/fdi-screen-bg.png') }`" class="video-img" alt="FDI Video Bg">
        <div class="video-player-abs">
          <div class="video-player">
            <img style="cursor: pointer;" :src="`${ require('~/assets/images/fdi-player.png') }`"
                 @click="videoPlayMode = true" v-if="!videoPlayMode"/>
            <video width="100%" height="100%" controls v-if="videoPlayMode" autoplay>
              <source :src="strapiBaseUri + video" type="video/mp4">
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
import FdiFeatures from "@/layouts/components/fdi-features";
import MlFeatures from "@/layouts/components/ml-features";

import { strapiBaseUri } from "@/nuxt.config";
import { formatSeo } from "@/utils/seo";

export default {
  components: {MlFeatures, FooterMain, TopNavigation, AboutInfo, FracsolCircle, FdiFeatures},
  async fetch() {
    let res = await this.$strapi.find('ml');
    this.seo = res['SEO'];
    this.mlFeatures = res['Features'];
    this.mlIntro = res['Intro'];
    if (res['Video']) {
      this.video = res['Video'].url;
    }
  },
  data() {
    return {
      animating: false,
      strapiBaseUri: strapiBaseUri,
      mlFeatures: [],
      mlIntro: ''
    }
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {},
  head() {
    return formatSeo(this.seo);
  }
}
</script>

<style>

</style>
