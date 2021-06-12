<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <FracsolCircle :currentTab="'owm'"></FracsolCircle>

    <section>
      <OwmFeatures></OwmFeatures>
    </section>

    <footer-main></footer-main>

  </div>

</template>

<script>

import TopNavigation from "@/layouts/components/top-navigation";
import FooterMain from "@/layouts/components/footer-main";
import AboutInfo from "@/layouts/components/about-info";
import FracsolCircle from "@/layouts/components/fracsol-circle";
import OwmFeatures from "@/layouts/components/owm-features";

export default {
  components: {FooterMain, TopNavigation, AboutInfo, FracsolCircle, OwmFeatures},
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
  },
  head() {
    return {
      title: "Opla Energy"
    };
  }
}
</script>

<style>

</style>
