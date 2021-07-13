<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <AboutInfo
        :team="team"
        :board="board"
        :intro="intro"
        :story="story"
        :mission="mission"
        :vision="vision">
    </AboutInfo>

    <footer-main></footer-main>

  </div>


</template>

<script>

import TopNavigation from "@/layouts/components/top-navigation";
import FooterMain from "@/layouts/components/footer-main";
import AboutInfo from "@/layouts/components/about-info";
import { formatSeo } from "@/utils/seo";

export default {
  components: {FooterMain, TopNavigation, AboutInfo},
  scrollToTop: true,
  data() {
    return {
      animating: false,
      story: '',
      intro: '',
      mission: '',
      vision: '',
      team: [],
      board: []
    }
  },
  async fetch() {
    let res = await this.$strapi.find('about-us');
    this.seo = res['SEO'];
    this.team = res['Board'];
    this.board = res['Team'];
    this.story = res['Story'];
    this.intro = res['Intro'];
    this.mission = res['Mission'];
    this.vision = res['Vision'];
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
