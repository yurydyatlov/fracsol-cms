<template>

  <div>

    <Nuxt />

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
  }
}
</script>

<style>

</style>
