<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <div style="position: relative;">
      <div class="slider"></div>
      <div class="bg-curve-line"></div>
    </div>

    <section id="con" class="content-begin"></section>

    <section>
      <div class="section-with-bg section-standart incline-section">
        <div class="full-height--center" style="position: relative;z-index: 2;">
          <div class="row">
            <div class="column column-40 centered-column">

              <div class="container">
                <div class="title-max-width">

                  <h1 class="header-title header-title--white title-add-shadow">
                    {{ intro.title }}
                  </h1>

                  <div class="common-text sm common-text--white">
                    {{ intro.main_page }}
                  </div>
                </div>

                <br/>

                <div class="center-m-o">
                  <a class="button button-link button-link--white button-clear adjusted">
                    <img src="~assets/images/url.svg" alt="Learn More">Learn More</a>
                </div>
              </div>

            </div>

            <div class="column column-60 column--no-padding align-content-right" data-aos="flip-up">
              <img src="~assets/images/home-iot.png" alt="Home IOT"/>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section>
      <Features :features="features"></Features>
    </section>

    <footer-main></footer-main>

  </div>


</template>

<script>

import TopNavigation from "@/layouts/components/top-navigation";
import FooterMain from "@/layouts/components/footer-main";
import Features from "@/layouts/components/features";
import { formatSeo } from "@/utils/seo";

export default {
  components: {Features, FooterMain, TopNavigation},
  scrollToTop: true,
  data() {
    return {
      animating: false,
      seo: '',
      intro: '',
      features: []
    }
  },
  async fetch() {
    let res = await this.$strapi.find('homepage');
    this.features = await res.Feature;
    this.seo = await res.seo;
    this.intro = await res.Intro;
  },
  async beforeMount() {
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
