<template>

  <div class="index-page">

    <top-navigation></top-navigation>

    <a class="mpd-live-button" target="_blank" href="https://live.oplaenergy.com">MPD Live</a>

    <div style="position: relative;">
      <div class="slider">
        <div class="section-with-bg fixed-height">

          <div class="node-bg"></div>
          <div class="node-bg-over"></div>

          <div class="glow-circle"></div>

          <div class="slider-cont">

            <div class="container full-height--center">
              <div class="row gap-20">
                <div class="column">
                  <div class="flex-center flex-center--dir-column slider-center-content" data-aos="fade-up"
                       data-aos-once="false">
                    <h3 class="top-title">{{ pageTitle }}</h3>
                    <br/>
                    <h1 class="header-title header-title--white">
                      MDP SMART™ MANIFOLD
                    </h1>
                    <div class="common-text common-text--white  title-max-width">
                      Drill safe and reduce cost with Steady Pressure Control and Accurate Flow Monitoring.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button v-scroll-to="'#con'" class="button go-to-content">

            </button>
          </div>

        </div>

      </div>

      <div class="bg-curve-line fixed-page"></div>
    </div>


    <section id="con" class="content-begin">
      <div class="section-with-bg section-standart">
        <div class="container">
          <br/>
          <div class="row">
            <div class="column">

            </div>
            <div class="column c-v-center">
              <div class="title-max-width sm">
                <div>
                  Opla MPDSmart™ manifolds can be rigged-up on all onshore and offshore sites under any weather
                  conditions. Manage well pressure with high accuracy at any depths with Opla MPDSmart package.
                </div>
                <br/>
                <div class="main-win">
                  <a href="">
                    <div class="download-box">

                      <div class="download-box__text">
                        DOWNLOAD OPLA MDP SMART™ MANIFOLD BROCHURE
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-begin">
      <div class="section-with-bg section-standart control-accuracy">
        <div class="row full-height-row">
          <div class="column column-40">
            <div class="full-content">
              <h3 class="header-title header-title--blue">
                CONTROL. <br/>
                ACCURACY. <br/>
                INTELLIGENCE. <br/>
                AUTOMATION. <br/>
              </h3>
            </div>
          </div>
          <div class="column column-60 c-v-center control-accuracy__image"></div>
        </div>
      </div>
    </section>

    <section class="content-begin">
      <div class="section-with-bg section-auto cols-4">
        <div class="container">
          <div class="row">
            <div class="column items">
              <div class="items__image">

              </div>
              <div class="items__title">Choke</div>
              <div class="items__head">DOUBLE ELECTRIC CHOKES</div>

              <div class="common-text">
                Two powerful (2kW) servo motors drive Opla electric chokes to achieve fast and smooth control of the
                surface pressure under all drilling conditions. Drill and trip with confidence in narrow pore pressure
                windows with Opla choke manifold.
              </div>
            </div>
            <div class="column items">
              <div class="items__image">

              </div>
              <div class="items__title">FLOWMETER</div>
              <div class="items__head">REAL-TIME MUD RHEOLOGY</div>
              <div class="common-text">
                The Opla Coriolis flowmeter reports density and flowrate and then takes it one step further and reports
                real-time mud rheology. This patent pending process provides incremental data on the mud quality and
                increases the accuracy of the fluid model utilized in hydraulic calculations.
              </div>
            </div>
            <div class="column items">
              <div class="items__image">

              </div>
              <div class="items__title">AUTOMATION</div>
              <div class="items__head">INTELLIGENT CONTROL UNIT</div>
              <div class="common-text">
                Opla utilizes high performance servo drive and fast processors PLC in the
                intelligent control unit to maximize accuracy and precision in monitoring and controlling of MPD sensors
                and equipment.
              </div>
            </div>
            <div class="column items">
              <div class="items__image">
              </div>
              <div class="items__title">AUTOMATION</div>
              <div class="items__head">NON LINEAR CHOKE ALGORITHMS</div>
              <div class="common-text">
                The Opla MPDSmart™ Manifold is controlled via a patent pending non-linear closed-loop controller
                minimizing reaction times and pressure overshoot under all drilling conditions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section-with-bg gray-bg section-standart incline-section pmd-smart-var">
        <div class="container full-height--center">
          <div class="row">

            <div class="column" data-aos="fade-right">

            </div>

            <div class="column column-center">
              <div class="title-max-width" data-aos="fade-left">

                <h3 class="top-title">
                  Software
                </h3>

                <h3 class="header-title header-title--blue md">MPD SMART™</h3>

                <div class="common-text sm">
                  MPDSmart™ manifold is powered by the intellegent MPDSmart™ software resulting in the engineering precision & operation's automation.
                </div>

                <br/>

                <a class="button button-link button-clear adjusted">Discover Our Software</a>

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
import Features from "@/layouts/components/features";

export default {
  components: {FooterMain, TopNavigation, Features},
  data() {
    return {
      pageTitle: 'Technology & Solutions',
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
      title: this.pageTitle + ' | Opla Energy',
      meta: [
        {charset: 'utf-8'},
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content:
              'Master of MPD Technology'
        }
      ],
    }
  }
}
</script>

<style>

.skew-element-line {
  position: absolute;
  bottom: 24px;
  right: 0;
  width: 500px;
  height: 79px;
  transform: skewY(5.5deg);
  background-color: var(--darker-main-color);
}
</style>
