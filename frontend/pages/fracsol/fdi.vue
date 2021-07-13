<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :currentTab="'fdi'" :fdiIntro="fdiIntro"></FracsolCircle>

    <section>
      <FdiFeatures :features="fdiFeatures"></FdiFeatures>
    </section>

    <section class="section-standart">
      <div class="video-bg">
        <img :src="`${ require('~/assets/images/fdi-screen-bg.png') }`" class="video-img" alt="FDI Video Bg">
        <div class="video-player-abs">
          <div class="video-player">
            <img style="cursor: pointer;" :src="`${ require('~/assets/images/fdi-player.png') }`" @click="videoPlayMode = true" v-if="!videoPlayMode" />
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
import { strapiBaseUri } from "@/nuxt.config";
import { formatSeo } from "@/utils/seo";

export default {
  components: {FooterMain, TopNavigation, AboutInfo, FracsolCircle, FdiFeatures},
  data() {
    return {
      strapiBaseUri,
      animating: false,
      videoPlayMode: false,
      fdiFeatures: [],
      fdiIntro: '',
      video: '',
      seo: ''
    }
  },
  async fetch() {
    let res = await this.$strapi.find('fdi');
    this.seo = res['SEO'];
    this.fdiFeatures = res['Features'];
    this.fdiIntro = res['Intro'];
    if (res['Video']) {
      this.video = res['Video'].url;
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
    return formatSeo(this.seo);
  }
}
</script>

<style>

</style>
