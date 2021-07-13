<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <section class="content-begin">
      <div class="section-with-bg section-standart incline-section">
        <div class="container">
          <div class="mirrored-box about-us-info">
            <div class="mirrored-box__content">

              <div class="about-us-info__content min-height-content-250">
                <div class="info-text">

                  <div class="tab-content">

                    <div class="left-cut-bg-container">
                      <img src="~assets/images/fracsol-contact.png" alt="Fracsol Logo Contact" />
                    </div>

                    <div class="contact-form">
                      <div class="info-text__title">
                        CONTACT US
                      </div>
                      <div class="info-text__content italic m-t-25">
                        <div v-if="title" v-html="$md.render(title)"></div>
                      </div>

                      <div class="info-text__content italic contact-inputs">

                        <div class="input-bg-element">
                          <input placeholder="Email" />
                        </div>

                        <div class="input-bg-element">
                          <input placeholder="Phone" />
                        </div>

                        <div class="input-bg-element" style="height: 55px">
                          <textarea placeholder="Message" />
                        </div>

                        <br />

                        <div class="d-f-center">
                          <img src="~assets/images/submit.png" class="submit-btn" alt="Contact" />
                        </div>

                      </div>

                      <br />
                      <br />
                      <br />
                      <br />

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
import AboutInfo from "@/layouts/components/about-info";
import { formatSeo } from "@/utils/seo";

export default {
  components: {FooterMain, TopNavigation, AboutInfo},
  data() {
    return {
      animating: false,
      seo: '',
      title: ''

    }
  },
  async fetch() {
    let res = await this.$strapi.find('contact-us');
    this.seo = res['SEO'];
    this.title = res['Title'];
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
