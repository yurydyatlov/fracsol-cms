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
                        Use the form below or email us at contact@revsolz.com.
                      </div>

                      <div class="info-text__content italic m-t-25">

                        <div class="input-bg-element">
                          <input placeholder="Email" />
                        </div>

                        <div class="input-bg-element">
                          <input placeholder="Phone" />
                        </div>

                        <div class="input-bg-element" style="height: 54px">
                          <textarea placeholder="Message" />
                        </div>

                        <br />

                        <div class="d-f-center">
                          <button class="btn primary">Submit</button>
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

export default {
  components: {FooterMain, TopNavigation, AboutInfo},
  data() {
    return {
      animating: false,
      mountains: ['ready', 'to', 'test']
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
      title: "Contact Us - Revsolz"
    };
  }
}
</script>

<style>

</style>
