<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :intro="intro"></FracsolCircle>

    <section>
      <div class="section-with-bg section-standart">
        <div class="container">
          <div class="mirrored-box about-us-info">
            <div class="mirrored-box__content">

              <div class="about-us-info__content min-height-content-250">
                <div class="info-text">

                  <div class="tab-content">

                    <div class="right-cut-bg-container">
                      <img src="~assets/images/fracsol.svg">
                    </div>

                    <div class="info-text__title">
                      WHY FRACSOL?
                    </div>
                    <div class="info-text__content full-opacity m-t-25" v-html="$md.render(whyFracsol)">
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section-with-bg section-standart">
        <div class="container">
          <div class="about-us-info sticc-lead">
            <div class="mirrored-box__content">

              <div class="about-us-info__content min-height-content-250">
                <div class="info-text">

                  <div class="tab-content">

                    <div class="info-text__title info-text__title--with-shadow">
                      VALUE OF GEOMATICS
                    </div>
                    <div class="info-text__content full-opacity m-t-25">
                      <img alt="Geomatics" src="~assets/images/geomatics.png" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
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
import FracsolCircle from "~/layouts/components/fracsol-circle";
import { formatSeo } from "@/utils/seo";

export default {
  components: {FracsolCircle, FooterMain, TopNavigation},
  async fetch() {
    let res = await this.$strapi.find('fracsol');
    this.seo = res['SEO'];
    this.intro = res['Intro'];
    this.whyFracsol = res['why_fracsol'];
  },
  data() {
    return {
      intro: '',
      whyFracsol: '',
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
    return formatSeo(this.seo);
  }
}
</script>
