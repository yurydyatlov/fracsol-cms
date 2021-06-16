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
            <div class="column column-40 centered-column" data-aos="fade-up">

              <div class="container">
                <div class="title-max-width">

                  <h1 class="header-title header-title--white title-add-shadow">
                    Take your rock stimulation to the next level!
                  </h1>

                  <div class="common-text sm common-text--white">
                    We have developed advanced solutions to track, predict, and reduce the impact of frac interactions.
                  </div>
                </div>

                <br />

                <div class="center-m-o">
                  <a class="button button-link button-link--white button-clear adjusted">
                    <img src="~assets/images/url.svg" alt="Learn More">Learn More</a>
                </div>
              </div>

            </div>

            <div class="column column-60 column--no-padding align-content-right" data-aos="flip-up">
              <img src="~assets/images/home-iot.png" alt="Home IOT" />
            </div>

          </div>
        </div>
      </div>
    </section>

    <section>
      <Features></Features>
    </section>

    <footer-main></footer-main>

  </div>


</template>

<script>

import TopNavigation from "@/layouts/components/top-navigation";
import FooterMain from "@/layouts/components/footer-main";
import Features from "@/layouts/components/features";

export default {
  components: {Features, FooterMain, TopNavigation},
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
      title: "Fracsol - Revsolz"
    };
  }
}
</script>
