<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :currentTab="'twm'" :twmIntro="twmIntro"></FracsolCircle>

    <section>
      <TwmFeatures :features="twmFeatures"></TwmFeatures>
    </section>

    <section class="section-standart">

      <div class="video-bg">
        <img :src="`${ require('~/assets/images/twm-screen-bg.png') }`" class="video-img" alt="TWM Video Bg">
        <div class="video-player-abs">
          <div class="video-player">
            <img style="cursor: pointer;" :src="`${ require('~/assets/images/twm-player.png') }`" @click="videoPlayMode = true" v-if="!videoPlayMode" />
            <video width="100%" height="100%" controls v-if="videoPlayMode" autoplay>
              <source :src="process.env.strapiBaseUri + video" type="video/webm">
              <source :src="process.env.strapiBaseUri + video" type="video/mp4">
              Your browser does not support the video tag.
            </video>

<!--            <iframe v-if="videoPlayMode" width="100%" height="100%" src="https://www.youtube.com/embed/qtBAlZUk-m0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
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

import { formatSeo } from "@/utils/seo";

export default {
  components: {FooterMain, TopNavigation, AboutInfo, FracsolCircle, TwmFeatures},
  async fetch() {
    let res = await this.$strapi.find('twm');
    this.seo = res['SEO'];
    this.twmFeatures = res['Features'];
    this.twmIntro = res['Intro'];
    this.video = res['Video']['url']
  },
  data() {
    return {,
      animating: false,
      videoPlayMode: false,
      twmFeatures: [],
      twmIntro: '',
      video: '',
      seo: ''
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
